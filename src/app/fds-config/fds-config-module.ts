import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ComfirmationDialogComponent } from './comfirmation-dialog/comfirmation-dialog.component';

@NgModule({
  declarations: [ComfirmationDialogComponent],
  imports: [CommonModule, DynamicDialogModule, ButtonModule],
  providers: [DialogService],
  exports: [ComfirmationDialogComponent],
})
export class FdsConfigModule {}
