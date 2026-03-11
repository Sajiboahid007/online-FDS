import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  exports: [LoginComponent, DashboardComponent],
})
export class AdminModule {}
