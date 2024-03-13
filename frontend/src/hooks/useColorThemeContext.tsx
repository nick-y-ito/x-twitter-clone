import { ColorTheme } from "@/const/appConst";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

/** The type for the color theme context state */
type ColorThemeProviderState = {
	appliedColorTheme: ColorTheme.LIGHT | ColorTheme.DARK;
	colorTheme: ColorTheme;
	setColorTheme: (theme: ColorTheme) => void;
};

/** The initial state of the color theme context */
const initialState: ColorThemeProviderState = {
	appliedColorTheme: ColorTheme.DARK,
	colorTheme: ColorTheme.SYSTEM,
	setColorTheme: () => null,
};

/** The context for the color theme */
const ColorThemeProviderContext =
	createContext<ColorThemeProviderState>(initialState);

interface ThemeProviderProps {
	/** The children to be wrapped with the context provider */
	children: ReactNode;
	/** The default color theme to be used */
	defaultTheme?: ColorTheme;
	/** The key to be used for storing the color theme in local storage */
	storageKey?: string;
}

/** The provider for the color theme context */
export const ColorThemeProvider = ({
	children,
	defaultTheme = ColorTheme.SYSTEM,
	storageKey = "color-theme",
	...props
}: ThemeProviderProps) => {
	/**
	 * The theme that is currently set by the user
	 * It can be 'light', 'dark' or 'system'
	 */
	const [theme, setTheme] = useState<ColorTheme>(
		() => (localStorage.getItem(storageKey) as ColorTheme) || defaultTheme
	);
	/**
	 * The theme that is currently applied to the root element
	 * If the theme is 'system', it will be either 'light' or 'dark' based on the system preference
	 */
	const [appliedTheme, setAppliedTheme] = useState<
		ColorTheme.LIGHT | ColorTheme.DARK
	>(ColorTheme.DARK);

	/**
	 * Apply the theme to the root element
	 * @param theme - The theme to be applied to the root element
	 */
	const applyTheme = (theme: ColorTheme.LIGHT | ColorTheme.DARK) => {
		const root = window.document.documentElement;
		root.classList.remove(ColorTheme.LIGHT, ColorTheme.DARK);
		root.classList.add(theme);
		setAppliedTheme(theme);
	};

	useEffect(() => {
		/** Add color theme class ('light' or 'dark') to the root element based on system  */
		const setSystemTheme = () => {
			const systemTheme = window.matchMedia(
				`(prefers-color-scheme: ${ColorTheme.DARK})`
			).matches
				? ColorTheme.DARK
				: ColorTheme.LIGHT;

			applyTheme(systemTheme);
		};

		if (theme === ColorTheme.SYSTEM) {
			setSystemTheme();
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

			// Reflect system color scheme changes
			mediaQuery.addEventListener("change", setSystemTheme);

			// Clean up event listener on component unmount or when colorTheme changes
			return () => mediaQuery.removeEventListener("change", setSystemTheme);
		} else {
			applyTheme(theme);
		}
	}, [theme]);

	/** The value to be provided to the context */
	const value = {
		appliedColorTheme: appliedTheme,
		colorTheme: theme,
		setColorTheme: (theme: ColorTheme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ColorThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ColorThemeProviderContext.Provider>
	);
};

/** A hook to use the color theme context */
export const useColorThemeContext = () => {
	const context = useContext(ColorThemeProviderContext);

	if (context === undefined)
		throw new Error(
			"useColorThemeContext must be used within a ColorThemeProvider"
		);

	return context;
};
