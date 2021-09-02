# The Contacto Material Style Guide

This is a comprehensive collection of all UI components that are used in the contacto console application. This is developed based on the [style guide](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106) provided by the design team. These components can be further extended into other apps by just modifying the CSS variable list. This collection almost has all
required components to build a standard application. On each component you will find different stories, which are different states of the UI component.
Buliding them here makes it easy to develop hard-to-reach states. These **stories** are different states of a component which can be independantly developed and tested and finally consumed without flaws.

## How to use?

1. Install the component package `npm install @contacto-io/style-guide`
2. Add `@import "~@contacto-io/material-style-guide/build/style-guide.css";` to your main CSS file (Eg. App.scss)
3. Import the component that is required - ```import { Button } from '@contacto-io/style-guide'```
4. Visit the particular component page on the storybook app.
5. Navigate to your required story.
6. Copy the code and modify the `props` as required.
7. Since all the components are wrapper components upon Material UI, please visit [material docs](https://material-ui.com/getting-started/installation/) for additional information.

## Technical Requirements

#### Dependencies

For the compoenents to work properly, make sure the consumer project has these dependencies installed. The following are the peer dependencies for this component library.

```json
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "prop-types": "^15.7.2",
    "@material-ui/core": "^4.9.3",
  }
```

#### CSS variables

This style guide completely depends on CSS variables that are commonly defined by the design team. Make sure that the variables are included on the top for the style guide to work properly.
- [CSS Variable list](https://contacto-io.github.io/material-style-guide/?path=/story/colors-css-variable-list--page)

#### Icons

The icons used are taken from the google icon package. We use Material Rounded Icons throughout our App. For icon names, please visit [Google Material Icon Website](https://fonts.google.com/icons)

## Useful Links

- Design Style Guide
  - [Components](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106)
  - [Spacing](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=809%3A179)
  - [Typography and Colors](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=0%3A1)
  - [Logo and Favicon](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=819%3A179)
- [Style Guide Package](https://github.com/contacto-io/contacto-web-app/packages/961026)
- [Component Library Storybook](https://contacto-io.github.io/material-style-guide/?path=/docs/introduction--page)