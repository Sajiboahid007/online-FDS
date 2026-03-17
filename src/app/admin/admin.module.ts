import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryInsertUpdateComponent } from './components/categories/category-insert-update/category-insert-update.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, CategoriesComponent, CategoryInsertUpdateComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, DynamicDialogModule],
  providers: [DialogService],
  exports: [LoginComponent, DashboardComponent, CategoriesComponent, CategoryInsertUpdateComponent],
})
export class AdminModule {}
