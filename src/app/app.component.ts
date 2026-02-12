import { Component, signal } from '@angular/core';
import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  imports: [AdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly title = signal('online-FDS');
}
