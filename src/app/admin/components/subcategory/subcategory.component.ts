import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Subcategory } from '../../services/subcategory';

@Component({
  selector: 'subcategory',
  standalone: false,
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubcategoryComponent implements OnInit, OnDestroy {
  subcategory: Subcategory[] = [];
  destroy$: Subject<void> = new Subject<void>();

  AddSubcategory() {
    // Logic to add a new subcategory
  }

  constructor(private readonly subcategoryService: Subcategory) {}
  ngOnInit(): void {
    this.getSubcategories();
  }

  ngOnDestroy(): void {}

  getSubcategories() {
    this.subcategoryService
      .getSubcategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.subcategory = response.data;
        },
        error: (error) => {
          console.error('Error fetching subcategories:', error);
        },
      });
  }
}
