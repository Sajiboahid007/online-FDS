import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryInsertUpdateComponent } from './components/categories/category-insert-update/category-insert-update.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, CategoriesComponent, CategoryInsertUpdateComponent, SubcategoryComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [LoginComponent, DashboardComponent, CategoriesComponent, CategoryInsertUpdateComponent, SubcategoryComponent],
})
export class AdminModule {}
