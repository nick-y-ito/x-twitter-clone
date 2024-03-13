import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"primary-foreground": "var(--color-primary-foreground)",
				accent: "var(--color-accent)",
				"accent-foreground": "var(--color-accent-foreground)",
				muted: "var(--color-muted)",
				danger: "var(--color-danger)",
				warn: "var(--color-warn)",
				border: "var(--color-border)",
				repost: "var(--color-repost)",
				heart: "var(--color-heart)",
			},
			height: {
				13: "3.25rem",
			},
		},
	},
	darkMode: "class",
	plugins: [],
} satisfies Config;
