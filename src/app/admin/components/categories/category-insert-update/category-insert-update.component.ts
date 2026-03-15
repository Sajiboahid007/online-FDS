import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../fds-config/entity-models/categories';

@Component({
  selector: 'app-category-insert-update',
  standalone: false,
  templateUrl: './category-insert-update.component.html',
  styleUrl: './category-insert-update.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryInsertUpdateComponent implements OnInit {
  isEditMode = true;
  isLoading = false;

  categoryform!: FormGroup;

  category: Category[] = [];

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.categoryform = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    });
  }


}
