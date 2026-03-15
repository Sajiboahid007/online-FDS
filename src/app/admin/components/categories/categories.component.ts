import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../../fds-config/entity-models/categories';
import { CategoriesService } from '../../services/categories-service';
import { AppQuery } from '../../../shared/app-query';
import { Subject, takeUntil } from 'rxjs';
import { CategoryInsertUpdateComponent } from './category-insert-update/category-insert-update.component';
@Component({
  selector: 'categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  destroy$: Subject<void> = new Subject<void>();
  category: Category[] = [];
  dataSource = new MatTableDataSource<Category>([]);

  displayedColumns = ['Name', 'Status', 'Action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly cdr: ChangeDetectorRef,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: AppQuery<Category[]>) => {
      this.category = res?.data ?? [];
      this.dataSource.data = this.category;
      this.cdr.markForCheck();
    },
    error: (error) => {
      console.error('Error fetching categories:', error);
    }
  });
  }

  AddCategory(): void {
    this.dialog.open(CategoryInsertUpdateComponent, {
      width: '500px',
      autoFocus: true,
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
