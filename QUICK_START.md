# Quick Start: Angular Naming Conventions

## For New Components

### Method 1: Generate + Auto-Fix (One Command)
```bash
ng generate component my-feature/my-component && npm run fix-naming src/app/my-feature/my-component
```

### Method 2: Using Shell Alias (Recommended)
Add to your `~/.zshrc` or `~/.bashrc`:
```bash
ng-comp() {
  local component_path="$1"
  ng generate component "$component_path" && npm run fix-naming "src/app/$component_path"
}
```

Then use:
```bash
ng-comp my-feature/my-component
```

## What Gets Fixed

The script automatically converts:
```
❌ my-component.ts          → ✅ my-component.component.ts
❌ my-component.html        → ✅ my-component.component.html
❌ my-component.scss        → ✅ my-component.component.scss
❌ my-component.spec.ts     → ✅ my-component.component.spec.ts
❌ class MyComponent        → ✅ class MyComponentComponent
```

## Manual Fix for Existing Files

If you have files that need fixing:
```bash
npm run fix-naming src/app/path/to/component
```

## IDE Support

### VS Code
- Recommended extensions will be suggested on first open
- Code snippets available (type `ng-component` or `ng-service`)
- Auto-formatting on save

### Cursor IDE
- AI assistant automatically follows naming conventions
- Rules configured in `.cursor/rules/`

### GitHub Copilot
- Follows conventions from `.github-copilot-instructions.md`

## Files Created

- ✅ `.cursor/rules/angular-naming-conventions.mdc` - Cursor AI rules
- ✅ `.vscode/settings.json` - VS Code configuration
- ✅ `.vscode/extensions.json` - Recommended extensions
- ✅ `.vscode/angular-naming.code-snippets` - Code snippets
- ✅ `.github-copilot-instructions.md` - Copilot guidance
- ✅ `angular.json` - Updated with schematic defaults
- ✅ `scripts/enforce-naming.js` - Auto-fix script
- ✅ `NAMING_CONVENTIONS.md` - Full documentation
- ✅ `README_NAMING.md` - Problem/solution guide

## Need Help?

See `NAMING_CONVENTIONS.md` for complete documentation.
