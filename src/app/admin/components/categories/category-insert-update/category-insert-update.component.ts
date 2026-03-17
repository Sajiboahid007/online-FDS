import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Category } from '../../../../fds-config/entity-models/categories';
import { CategoriesService } from '../../../services/categories-service';

@Component({
  selector: 'app-category-insert-update',
  standalone: false,
  templateUrl: './category-insert-update.component.html',
  styleUrl: './category-insert-update.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryInsertUpdateComponent implements OnInit {
  isEditMode = false;
  isLoading = false;
  categoryform!: FormGroup;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly categoriesService: CategoriesService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.isEditMode = !!this.config.data;
  }

  ngOnInit(): void {
    this.categoryform = new FormGroup({
      Name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      Status: new FormControl<boolean>(true),
    });
    if (this.config.data) {
      const cat = this.config.data as Category;
      this.categoryform.patchValue({
        Name: cat.name,
        Status: cat.status ?? true,
      });
    }
  }

  onDiscard(): void {
    this.ref.close(null);
  }

  onSave(): void {
    if (this.categoryform.invalid) {
      this.categoryform.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.cdr.markForCheck();
    const value = this.categoryform.getRawValue() as { Name: string; Status: boolean };
    const payload = { name: value.Name, status: value.Status };
    const request =
      this.isEditMode && this.config.data
        ? this.categoriesService.updateCategory((this.config.data as Category).id, payload)
        : this.categoriesService.addCategory(payload);

    request.subscribe({
      next: (res) => {
        this.isLoading = false;
        this.cdr.markForCheck();
        this.ref.close(res?.data ?? payload);
      },
      error: () => {
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }
}
