## Z - Clone App of X (Twitter)

<img width="350" alt="Screenshot 2024-03-14 at 14 34 23" src="https://github.com/nick-y-ito/x-clone/assets/99148565/33e0c307-6cb7-4e3b-804c-7be966d1060a">

## Stack

- TypeScript
- React
- Tailwind CSS
- *No other UI libraries are used*

## Features

- `textarea` expanding as the content grows ([NewPostInput.tsx](./frontend/src/components/NewPost/NewPostInput.tsx))
- Character counter implementation ([CharacterCounter.tsx](./frontend/src/components/NewPost/CharacterCounter.tsx), [CircularProgress.tsx](./frontend/src/components/ui/CircularProgress.tsx))
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

https://github.com/nick-y-ito/x-clone/assets/99148565/74ef8037-545b-4521-9ceb-689147b7949b

### Color Theme switching

https://github.com/nick-y-ito/x-clone/assets/99148565/ce16e685-16a5-4591-94e1-c1a517479142

## Getting Started

This project is a monorepo, so you need to install the dependencies for both the frontend and backend. Run the following commands in the root directory.

### Install dependencies

```bash
npm ci
```

### Run frontend and backend together

```bash
npm run dev
```

### Run frontend and backend separately

```bash
npm run frontend
```

```bash
npm run server
```