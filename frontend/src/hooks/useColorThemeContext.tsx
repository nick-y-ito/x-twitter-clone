import { ColorTheme } from "@/const/appConst";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type ColorThemeProviderState = {
	colorTheme: ColorTheme;
	setColorTheme: (theme: ColorTheme) => void;
};

const initialState: ColorThemeProviderState = {
	colorTheme: ColorTheme.SYSTEM,
	setColorTheme: () => null,
};

const ColorThemeProviderContext = createContext<ColorThemeProviderState>(initialState);

interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: ColorTheme;
	storageKey?: string;
}

export const ColorThemeProvider = ({
	children,
	defaultTheme = ColorTheme.SYSTEM,
	storageKey = "color-theme",
	...props
}: ThemeProviderProps) => {
	const [colorTheme, setColorTheme] = useState<ColorTheme>(
		() => (localStorage.getItem(storageKey) as ColorTheme) || defaultTheme
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(ColorTheme.LIGHT, ColorTheme.DARK);

		if (colorTheme === ColorTheme.SYSTEM) {
			const systemTheme = window.matchMedia(
				`(prefers-color-scheme: ${ColorTheme.DARK})`
			).matches
				? ColorTheme.DARK
				: ColorTheme.LIGHT;

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(colorTheme);
	}, [colorTheme]);

	const value = {
		colorTheme,
		setColorTheme: (theme: ColorTheme) => {
			localStorage.setItem(storageKey, theme);
			setColorTheme(theme);
		},
	};

	return (
		<ColorThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ColorThemeProviderContext.Provider>
	);
};

export const useColorThemeContext = () => {
	const context = useContext(ColorThemeProviderContext);

	if (context === undefined)
		throw new Error("useColorThemeContext must be used within a ColorThemeProvider");

	return context;
};
