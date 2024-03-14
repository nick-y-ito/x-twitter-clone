## Z - Clone App of X (Twitter)

## Stack

- TypeScript
- React
- Tailwind CSS
- *No other UI libraries are used*

## Features

- `textarea` expanding as the content grows ([NewPostInput.tsx](./frontend/src/components/NewPost/NewPostInput.tsx))
- Character counter implementation ([CharacterCounter.tsx](./frontend/src/components/NewPost/CharacterCounter.tsx))
- Time display format ([utils.ts](./frontend/src/lib/utils.ts) > `getTimeDifference()`)
- Tag functionality (`#aaa` and `#bbb` are only considered as tags in `#aaa #bbb c#cc # ddd eee#`)
- Color Theme switching ([useColorThemeContext.tsx](./frontend/src/hooks/useColorThemeContext.tsx))
- Popover functionality ([ColorThemeToggler.tsx](./frontend/src/components/Header/ColorThemeToggler.tsx), [useOutsideClick.tsx](./frontend/src/hooks/useOutsideClick.tsx))
- Rename functionality
- Mobile-only design
- Server-side code is a demo implementation

## What I Learned

- How to organize the code for Context APIs
- How to implement color theme switching functionality
- How to create UI parts without using UI libraries
  - Character counter
  - Popover

## Screen Captures

### Character counter and expanding textarea



### Color Theme switching



## Issues

- The `body` tag appears to be continuously re-rendered when the focus is on the textarea.

