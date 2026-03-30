import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../../../fds-config/entity-models/categories';
import { AppQuery } from '../../../../shared/app-query';
import { CategoriesService } from '../../../services/categories-service';

@Component({
  selector: 'app-category-insert-update',
  standalone: false,
  templateUrl: './category-insert-update.component.html',
  styleUrl: './category-insert-update.component.scss',
})
export class CategoryInsertUpdateComponent implements OnInit {
  isEditMode = false;
  categoryId!: number;

  categoryForm!: FormGroup;

  category: Category[] = [];
  dataSource = new MatTableDataSource<Category>([]);

  constructor(
    private readonly dialogRef: MatDialogRef<CategoryInsertUpdateComponent>,
    private readonly categoriesService: CategoriesService,
    @Inject(MAT_DIALOG_DATA) public data: Category | null,
  ) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Status: new FormControl(false),
    });

    if (this.data) {
      this.isEditMode = true;
      this.categoryId = this.data.Id;
      this.categoryForm.patchValue(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.isEditMode) {
      // need to update
      const payload: Category = {
        Id: this.categoryId,
        Name: this.categoryForm.get('Name')?.value,
        Status: this.categoryForm.get('Status')?.value,
      };
      this.categoriesService.upodate(payload).subscribe({
        next: (res: AppQuery<Category>) => {
          this.dialogRef.close(true);
        },
        error: (error: any) => {
          console.error('Error updating category:', error);
        },
      });
    } else {
      this.categoriesService.addCategory(this.categoryForm.getRawValue()).subscribe({
        next: (res: AppQuery<Category>) => {
          this.dialogRef.close(true);
        },
        error: (error: any) => {
          console.error('Error adding category:', error);
        },
      });
    }
  }
}
