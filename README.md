[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Kp1DbCJC)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14228455&assignment_repo_type=AssignmentRepo)
# Mid Term Project - Twootr

Twootr is a Single Page Application that will allow the user to read and create _twoots_. No user authentication or registration is required.

![Screenshot of Twootr App](/assets/screenshot1.png)

## Requirements

- Tech requirements:

  - You should use React for this application.
  - For API requests, you **must** use Axios.
  - For styling components, you **must** use Styled Components.

- Feature requirements:
  - User must be able to change name.
  - User must be able to read _twoots_.
  - User must be able to create _twoots_.
  - All the _twoots_ shown in the application, must come from server.
  - Every new _twoot_ must be sent to server to be saved.
  - User cannot post a new _twoot_ empty or with more than 140 characteres.
  - Counter must update after every change on the input.
  - User must be able to like, save or retwoot each twoot. No need to store this information in the server.
  - If the user clicks on the `write a new text`, it should focus on the input.
  - Time must show how many days ago was posted the _twoots_ (days)

## Endpoints

GET:

- `/twoots` - returns all the twoots saved in the server.

POST:

- `/twoot` - save new twoot in the server and returns same data with ID.
  Expected sent data:

```js
{newTwoot: {
    author:"Henry David Thoreau",
    content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
    authorSlug:"henry-david-thoreau",
    dateAdded:"2022-07-06"
}}
```

Avatars should use:

```js
`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`;
```

## Styles (optional)

- Colors:

  - Navbar / Button : `#711a75`
  - Background Header : `#413f42`
  - Background Main : `#f4f1ec`
  - Active Icons : `f73d93`
  - Font / Box shadow : `#888888`

- Fonts (Google):
  - Logo / Button : Permanent Marker
  - Main : Kanit

## Additional Screenshots

![Twoot hovered and icon active](/assets/screenshot2.png)

![Twoot with over 140 characteres](/assets/screenshot3.png)

![Editing user name](/assets/screenshot4.png)

## Task 1: Setup

- Create a new React app:
  ```bash
  npm create vite@latest frontend -- --template react-ts
  ```
- Install dependencies:
  ```bash
  cd frontend
  npm install
  npm install axios styled-components
  ```
- Clean the project, removing all the unnecessary files.
- Add proxy setup to `vite.config.ts` file.
  ```ts
  export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [react()],
  });
  ```
  This proxy will allow you to make requests to the server without having to type the whole URL.
- Run the frontend to check if no errors:
  `npm run dev`
- Open a new terminal, go to the `server` folder and run the server to check if no errors:
  `npm run server`
- If everything works, make your first commit and push it to GitHub. Ask your teammate to pull the changes.

## Task 2: Make a plan

- Create the file `PLAN.md`
- Must include topics:
  - Data Structure
  - HTML Structure (Diagram)
  - Component Structure (Diagram)
  - Data Map (Components and States)
  - Styling Patterns (Fonts and Colors)

> You can use Whimsical to create the diagrams. Take screenshots and add it to the `PLAN.md` file.

## Task 3: HTML Structure

- Based on the mockup file, create all the elements of the page in the render of App Component (`App.tsx`).

## Task 4: Component Structure

- Create a new folder called `components` inside `src` folder.
- Break your HTML structure into small Components and create a file for each of these Components.
  > To follow best practices, you should name each file with first letter upper case. Ex: `App.tsx`, `NewTwoot.tsx`, etc.
- Add the respective HTML inside each file.

## Task 5: States

- Based on your data map, create the states in the Components that will hold the data and pass it down to child components using `props`.

## Task 6: Get data from server

- Make an API request using Axios to get all the _twoots_ saved in the server.
  ```ts
  //Example of request
  axios.get('/api/twoots');
  ```
  Include the `/api` prefix in the URL for vite to proxy the request
- Update the state with the new data.

## Task 7: Render data

- Calculate how many days ago the _twoot_ was posted. If 0 days, show `posted today`
- Using the data stored in the each state, render it on the UI.

## Task 8: Update state

- Add event listeners for each of the elements that you need to track. For example: Twoot input, character counter, etc.
- Update the state with the new values.

## Task 9: Submit new Twoot

- In case of empty _twoot_ or over 140 characters, twoot button should be disabled and submit should not happen.
- Make a post request using Axios, including the data to be saved.
- After response received, update _twoots_ list in the state.

## Task 10: UI Interactions

- When the user clicks on the `write a new text`, it should focus on the input.
- When the user hovers the twoot, it should change the styling based on the mockup.
- When the user clicks on the icons (🏳️, 🔄, 💗), it should change the styling.

## Task 11: Styled Components

- Update or create styles using Styled Components.

## Task 12: Prepare your presentation

- Show `PLAN.md` file, explaining your decisions
- How was the project divided?
- What you learned?
- What you struggled the most?
- What would you have done differently?
