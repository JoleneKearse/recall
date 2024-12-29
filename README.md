# Recall

So far, this is a rather scattered project.  I got the idea from [https://reactpractice.dev/articles/7-challenges-to-do-before-a-react-interview/](7 challenges to do before a React interview), *Build a memory game*.  It stated it's a good project to practice state management with, and I thought it would be good to practice:
- `useReducer`
- light/dark mode theme toggle
- dropdowns
- accessibility & animates
- database.

## Memory Game

For ease, I scaled the MVP back to just practicing **Klingon** vocabulary as I'm learning with **Duolingo**.  But I will add other sections to practice a variety of programming languages, like *JavaScript*, *Python*, *C#*, and either *PHP* or *Rust*:
- where you'll need to match methods
- or match comparable code snippets.

## MVP

Klingon vocabulary memory game.
- Firebase database with key-value pairs
- Light/dark mode toggle
- Dynamically add pairs to cards
- Cool flipping card animation
- 
- 

## Challenges Overcome

### Light/Dark Mode Toggle

This was actually the first challenge I tackled on this project.  I knew *Tailwind CSS* made it quite easy, but really just love dark mode and hadn't tried it out yet!

I decided used the *Context API* and learned a few things along the way.  
1. I created `/context/ThemeContext.tsx` file.
- I created my context object.
```typescript
const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
});
```
-  And learned I needed to type my `children` as `ThemeProviderProps`. Who knew? 🤷‍♀️
```typescript
interface ThemeProviderProps {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps)
```
- I defined my state and function, then passed it as a compound component to be used elsewhere in my app.
2. I wrapped my `App.tsx` in my brand-new shiny context, which gave me the awesome ability to use it in `index.html`!
- I could easily define the background and text colors using Tailwind's simple syntax on the body
```tailwind
<body
		class="bg-brand-100 dark:bg-brand-800 text-brand-950 dark:text-brand-200 transition-colors duration-300"
	>
```
- Then utilizing a `useEffect` in my Context would apply that to my entire app everytime the `theme` changed.
```React
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);
```
- But there was one last thing, I was just not getting - I had to tell Tailwind about it!
```javascript
export default {
  darkMode: 'class', 
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

### Developing Resources
![alt text](image.png)
![alt text](image-1.png)