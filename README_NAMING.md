# Quick Fix for Angular Naming Conventions

## Problem
When you run `ng generate component`, files are created without the `.component` suffix:
```
❌ test-app.ts
❌ test-app.html  
❌ test-app.scss
```

## Solution

### Option 1: Use the Fix Script (Recommended)
After generating a component, run the fix script:

```bash
# Generate your component
ng generate component shared/components/my-component

# Fix the naming
npm run fix-naming src/app/shared/components/my-component
```

This will automatically:
- Rename `my-component.ts` → `my-component.component.ts`
- Rename `my-component.html` → `my-component.component.html`
- Rename `my-component.scss` → `my-component.component.scss`
- Rename `my-component.spec.ts` → `my-component.component.spec.ts`
- Update the class name from `MyComponent` → `MyComponentComponent`
- Update all file references in the TypeScript files

### Option 2: Manual Renaming
1. Rename all files to include `.component` before the extension
2. Update the class name to include `Component` suffix
3. Update `templateUrl` and `styleUrl` in the component file
4. Update imports in spec files

### Option 3: Use Alias Script
Create an alias in your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Add this to your ~/.zshrc or ~/.bashrc
ng-comp() {
  ng generate component "$@" && npm run fix-naming "src/app/$1"
}
```

Then use it like:
```bash
ng-comp shared/components/my-component
```

## Why This Happens

Angular CLI v21 may have different default behavior or configuration. The `angular.json` schematics configuration doesn't control the file naming directly - it's built into the schematic templates.

## Verification

After fixing, your files should look like:
```
✅ my-component.component.ts
✅ my-component.component.html
✅ my-component.component.scss
✅ my-component.component.spec.ts
```

And the class should be:
```typescript
export class MyComponentComponent {  // Note: Component suffix
  // ...
}
```

## Full Documentation

See [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md) for complete details on Angular naming conventions used in this project.
