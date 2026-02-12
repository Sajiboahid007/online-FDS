# Angular Naming Conventions

This project follows the official Angular Style Guide naming conventions.

## ⚠️ Important Note

If the Angular CLI generates files without the `.component` suffix (e.g., `example.ts` instead of `example.component.ts`), use the fix script:

```bash
# After generating a component:
ng generate component feature/example
npm run fix-naming src/app/feature/example
```

This will automatically rename all files and update imports to follow the correct naming convention.

## File Naming Rules

### Components
```
example.component.ts      // Component class
example.component.html    // Template
example.component.scss    // Styles
example.component.spec.ts // Unit tests
```

**Class name:** `ExampleComponent`

**Generate with CLI:**
```bash
ng generate component feature/example
```

### Modules
```
example.module.ts         // Module
example-routing.module.ts // Routing module
```

**Class name:** `ExampleModule`, `ExampleRoutingModule`

**Generate with CLI:**
```bash
ng generate module feature/example --routing
```

### Services
```
example.service.ts        // Service class
example.service.spec.ts   // Unit tests
```

**Class name:** `ExampleService`

**Generate with CLI:**
```bash
ng generate service services/example
```

### Other Angular Files

#### Directives
```
example.directive.ts
example.directive.spec.ts
```
**Generate:** `ng generate directive directives/example`

#### Pipes
```
example.pipe.ts
example.pipe.spec.ts
```
**Generate:** `ng generate pipe pipes/example`

#### Guards
```
example.guard.ts
example.guard.spec.ts
```
**Generate:** `ng generate guard guards/example`

#### Interceptors
```
example.interceptor.ts
example.interceptor.spec.ts
```
**Generate:** `ng generate interceptor interceptors/example`

#### Resolvers
```
example.resolver.ts
example.resolver.spec.ts
```
**Generate:** `ng generate resolver resolvers/example`

## Naming Style

- **Files:** Use kebab-case (lowercase with hyphens)
  - ✅ `user-profile.component.ts`
  - ❌ `UserProfile.component.ts`
  - ❌ `user_profile.component.ts`

- **Classes:** Use PascalCase with appropriate suffix
  - ✅ `UserProfileComponent`
  - ❌ `userProfileComponent`
  - ❌ `UserProfile`

- **Selectors:** Use kebab-case with prefix
  - ✅ `<app-user-profile>`
  - ❌ `<appUserProfile>`
  - ❌ `<UserProfile>`

## Project Configuration

### Angular CLI
The `angular.json` file is configured to automatically generate files with correct naming conventions.

### VS Code
The `.vscode/settings.json` file provides editor configuration and formatting rules.

### Cursor IDE
The `.cursor/rules/angular-naming-conventions.mdc` file provides AI guidance for naming conventions.

## Project Configuration

This project is configured to generate **module-based components** by default (not standalone). 

All components generated with Angular CLI will automatically:
- Be non-standalone (`standalone: false` by default)
- Need to be declared in an `NgModule`
- Have access to everything imported in their parent module

## Best Practices

1. **Always use Angular CLI** to generate new files:
   ```bash
   ng generate component components/example
   ng generate service services/example
   ng generate module modules/example --routing
   ```

2. **Keep names descriptive but concise:**
   - ✅ `user-list.component.ts`
   - ❌ `list.component.ts` (too generic)
   - ❌ `user-list-that-shows-all-users.component.ts` (too long)

3. **Group related files in directories:**
   ```
   src/app/
   ├── features/
   │   └── user-management/
   │       ├── user-list/
   │       │   ├── user-list.component.ts
   │       │   ├── user-list.component.html
   │       │   └── user-list.component.scss
   │       └── user-detail/
   │           ├── user-detail.component.ts
   │           ├── user-detail.component.html
   │           └── user-detail.component.scss
   ```

4. **Use consistent suffixes** for file types and class names.

## References

- [Angular Style Guide](https://angular.dev/style-guide)
- [Angular CLI Documentation](https://angular.dev/cli)
