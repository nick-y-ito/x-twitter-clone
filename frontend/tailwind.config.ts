import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"primary-foreground": "var(--color-primary-foreground)",
				accent: "var(--color-accent)",
				border: "var(--color-border)",
			},
			height: {
				13: "3.25rem",
			},
		},
	},
	plugins: [],
} satisfies Config;
