import { ColorThemeProviderContext } from "@/contexts/ColorThemeContext/ColorThemeProvider";
import { useContext } from "react";

/** A hook to use the color theme context */
export const useColorThemeContext = () => {
	const context = useContext(ColorThemeProviderContext);

	if (context === undefined)
		throw new Error(
			"useColorThemeContext must be used within a ColorThemeProvider"
		);

	return context;
};
