# Utils Directory

This directory contains utility functions, helpers, and constants used throughout the application.

## Planned Utilities

### Local Storage
- `localStorage.js` - Functions for saving/loading todos from browser storage
- `storageKeys.js` - Constants for storage keys

### Todo Management
- `todoHelpers.js` - Helper functions for todo operations
- `todoValidation.js` - Validation functions for todo data

### Date & Time
- `dateUtils.js` - Date formatting and manipulation utilities
- `timeUtils.js` - Time-related helper functions

### General Utilities
- `constants.js` - Application constants and configuration
- `helpers.js` - General helper functions
- `formatters.js` - Data formatting utilities

## Utility Guidelines

1. **Pure Functions**: Keep utility functions pure and testable
2. **Error Handling**: Include proper error handling and validation
3. **Documentation**: Document all functions with JSDoc comments
4. **Testing**: Write unit tests for all utility functions
5. **Immutability**: Avoid mutating input parameters

## Example Utility Structure

```
src/utils/
├── localStorage.js
├── todoHelpers.js
├── dateUtils.js
├── constants.js
├── helpers.js
├── index.js          # Export all utilities
└── README.md
```

## Usage Example

```javascript
// Import utilities
import { saveTodos, loadTodos } from '../utils/localStorage';
import { formatDate } from '../utils/dateUtils';
import { TODO_STATUS } from '../utils/constants';

// Use in components
const todos = loadTodos();
const formattedDate = formatDate(new Date());
```
