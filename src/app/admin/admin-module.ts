import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Login } from './login/login';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, Login],
})
export class AdminModule { }
