# Angular Project Configuration Summary

## Component Generation Settings

All components generated with `ng generate component` will automatically have:

### ✅ Default Settings (Configured in `angular.json`)
- **Module-based** (not standalone) - No need to write `standalone: false`
- **SCSS** for styles
- **Separate files** (not flat) - Creates a folder for each component
- **OnPush** change detection strategy
- **Component** suffix in class name
- **Exported** from their module

### Example Generated Component
```bash
ng generate component admin/dashboard
```

Creates:
```
src/app/admin/dashboard/
├── dashboard.component.ts       ✅ Module-based (no standalone property needed)
├── dashboard.component.html
├── dashboard.component.scss
└── dashboard.component.spec.ts
```

With class:
```typescript
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
```

**No need to add `standalone: false`** - It's the default!

## Module Structure

### How to Use Components in Modules

1. **Declare the component** in the module:
```typescript
@NgModule({
  declarations: [DashboardComponent],  // Declare here
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent],  // Export if used outside
})
export class AdminModule { }
```

2. **Component automatically gets access** to everything in the module's imports:
```typescript
// DashboardComponent can use:
// - Anything from CommonModule
// - Anything exported from SharedModule
// No need to import anything in the component itself!
```

## Module vs Standalone

This project uses **module-based architecture**:

### Module-based Component (Default)
```typescript
// No imports array in @Component
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {}

// Must be declared in a module
@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule, SharedModule],
})
```

### Standalone Component (If needed)
```typescript
// Has imports array in @Component
@Component({
  selector: 'app-example',
  standalone: true,  // Explicitly set
  imports: [CommonModule, SharedModule],  // Import what you need
  templateUrl: './example.component.html',
})
export class ExampleComponent {}
```

## Shared Module Pattern

The `SharedModule` exports common components and Angular Material modules:

```typescript
@NgModule({
  declarations: [ShakilTestComponent],
  imports: [CommonModule, MatCardModule, ...],
  exports: [ShakilTestComponent, MatCardModule, ...],
})
export class SharedModule {}
```

Any module that imports `SharedModule` gets access to all exported components and modules.

## Key Benefits

✅ **No `standalone: false` needed** - It's the default
✅ **Clean component code** - No imports array
✅ **Module-level organization** - Better for large apps
✅ **Shared module pattern** - Import once, use everywhere in the module
✅ **Consistent architecture** - All components follow the same pattern

## Files Configured

- `angular.json` - Default schematic settings
- `.cursor/rules/angular-naming-conventions.mdc` - Cursor AI rules
- `.vscode/settings.json` - VS Code settings
- `.github-copilot-instructions.md` - GitHub Copilot guidance
