# Styles Directory

This directory contains all CSS files and styling resources for the todo application.

## File Structure

### Global Styles
- `index.css` - Global styles, resets, and utility classes
- `variables.css` - CSS custom properties (variables) for theming
- `typography.css` - Typography and font-related styles

### Component Styles
- `App.css` - Main App component styles
- Component-specific CSS files will be created as needed

### Theme Support
- `themes.css` - Dark/light theme definitions
- `animations.css` - CSS animations and transitions

## CSS Architecture

### 1. CSS Custom Properties
Use CSS variables for consistent theming:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #f5f5f5;
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 2. BEM Methodology
Use BEM (Block, Element, Modifier) for CSS class naming:
```css
.todo-item { /* Block */ }
.todo-item__title { /* Element */ }
.todo-item--completed { /* Modifier */ }
```

### 3. Responsive Design
Use mobile-first approach with CSS Grid and Flexbox:
```css
.todo-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .todo-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

## Styling Guidelines

1. **Mobile First**: Design for mobile devices first, then enhance for larger screens
2. **Accessibility**: Ensure sufficient color contrast and focus states
3. **Performance**: Minimize CSS bundle size and avoid unused styles
4. **Consistency**: Use consistent spacing, colors, and typography
5. **Maintainability**: Keep CSS organized and well-documented

## Color Palette

- **Primary**: #667eea (Blue)
- **Secondary**: #764ba2 (Purple)
- **Success**: #28a745 (Green)
- **Warning**: #ffc107 (Yellow)
- **Danger**: #dc3545 (Red)
- **Light**: #f8f9fa
- **Dark**: #343a40

## Typography Scale

- **Heading 1**: 3rem (48px)
- **Heading 2**: 2.25rem (36px)
- **Heading 3**: 1.875rem (30px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
