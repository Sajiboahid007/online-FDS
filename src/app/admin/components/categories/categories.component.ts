import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../../fds-config/entity-models/categories';
import { AppQuery } from '../../../shared/app-query';
import { CategoriesService } from '../../services/categories-service';
import { CategoryInsertUpdateComponent } from './category-insert-update/category-insert-update.component';

@Component({
  selector: 'categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  destroy$ = new Subject<void>();
  category: Category[] = [];

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly cdr: ChangeDetectorRef,
    private readonly dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: AppQuery<Category[]>) => {
          this.category = res?.data ?? [];
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error fetching categories:', error);
        },
      });
  }

  AddCategory(): void {
    const ref = this.dialogService.open(CategoryInsertUpdateComponent, {
      header: 'Add Category',
      width: '500px',
      data: null,
    });
    if (ref?.onClose) {
      ref.onClose.pipe(takeUntil(this.destroy$)).subscribe((result) => {
        if (result) this.getCategories();
      });
    }
  }

  openEditCategory(cat: Category): void {
    const ref = this.dialogService.open(CategoryInsertUpdateComponent, {
      header: 'Edit Category',
      width: '500px',
      data: cat,
    });
    if (ref?.onClose) {
      ref.onClose.pipe(takeUntil(this.destroy$)).subscribe((result) => {
        if (result) this.getCategories();
      });
    }
  }
}
