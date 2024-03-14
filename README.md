## Z - Clone App of X (Twitter)

## Stack

- TypeScript
- React
- Tailwind CSS
- *No other UI libraries are used*

## Features

- `textarea` expanding as the content grows
- Character counter implementation (Exactly the same as X)
- Time display format
- Tag functionality (`#aaa #bbb c#cc # ddd eee#`)
- Rename functionality
- Theme switching
- Popover functionality
- Mobile-only design
- Server-side code is a demo implementation

### What I Learned

- How to organize the code for Context APIs
- How to implement color theme switching
- How to create UI parts without using UI libraries
  - Character counter (See [CharacterCounter.tsx](./frontend/src/components/NewPost/CharacterCounter.tsx))
  - Popover (See [ColorThemeToggler.tsx](./frontend/src/components/Header/ColorThemeToggler.tsx))

## Issues

- The `body` tag appears to be continuously re-rendered when the focus is on the textarea.