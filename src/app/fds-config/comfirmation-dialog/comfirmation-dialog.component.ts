import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

export interface ConfirmationDialogData {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: 'primary' | 'warn' | 'accent';
}

@Component({
  selector: 'app-comfirmation-dialog',
  standalone: false,
  templateUrl: './comfirmation-dialog.component.html',
  styleUrl: './comfirmation-dialog.component.scss',
})
export class ComfirmationDialogComponent {
  data: ConfirmationDialogData;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.data = {
      title: config.data?.title ?? 'Confirm Delete',
      message: config.data?.message ?? 'Are you sure you want to delete this item?',
      confirmText: config.data?.confirmText ?? 'Delete',
      cancelText: config.data?.cancelText ?? 'Cancel',
      confirmColor: config.data?.confirmColor ?? 'warn',
    };
  }

  onConfirm(): void {
    this.ref.close(true);
  }

  onCancel(): void {
    this.ref.close(false);
  }
}
