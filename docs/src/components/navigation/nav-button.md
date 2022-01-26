# NavButton

A button for navigation bar

<WvNavButton>About</WvNavButton>

```jsx
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavButton>About</WvNavButton>;
```

## Props

| Name          | Type    | Default |
| ------------- | ------- | ------- |
| isActive      | boolean | `false` |
| withDarkTheme | boolean | `false` |

## Slot / Children

Button content

## Examples

**Active button**

<WvNavButton isActive>About</WvNavButton>

```html
<WvNavButton isActive>About</WvNavButton>
```

**With dark theme**

<div style="background-color: black;">
  <WvNavButton isActive withDarkTheme>About</WvNavButton>
  <WvNavButton withDarkTheme>Report</WvNavButton>
</div>

```html
<WvNavButton isActive withDarkTheme>About</WvNavButton>
<WvNavButton withDarkTheme>Report</WvNavButton>
```