# Components Directory

This directory contains all the React components for the todo application.

## Planned Components

### Core Components
- `TodoList.js` - Main container for all todos
- `TodoItem.js` - Individual todo item component
- `TodoForm.js` - Form for adding/editing todos
- `TodoFilter.js` - Search and filter functionality

### UI Components
- `Header.js` - Application header
- `Button.js` - Reusable button component
- `Input.js` - Reusable input component
- `Modal.js` - Modal dialog component

### Layout Components
- `Container.js` - Main layout wrapper
- `Sidebar.js` - Side navigation (if needed)

## Component Guidelines

1. **Naming**: Use PascalCase for component files and functions
2. **Structure**: Each component should have its own folder with:
   - Component file (e.g., `TodoItem.js`)
   - Styles file (e.g., `TodoItem.css`)
   - Test file (e.g., `TodoItem.test.js`)
   - Index file for exports (e.g., `index.js`)

3. **Props**: Use PropTypes for type checking
4. **State**: Keep components focused and use local state when possible
5. **Styling**: Use CSS modules or styled-components for component-specific styles

## Example Component Structure

```
src/components/
├── TodoItem/
│   ├── TodoItem.js
│   ├── TodoItem.css
│   ├── TodoItem.test.js
│   └── index.js
├── TodoForm/
│   ├── TodoForm.js
│   ├── TodoForm.css
│   ├── TodoForm.test.js
│   └── index.js
└── README.md
```
