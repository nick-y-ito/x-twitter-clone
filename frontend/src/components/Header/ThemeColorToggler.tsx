import { IconMoon, IconSun } from "@/assets/images/icons";
import { ColorTheme } from "@/const/appConst";
import { useColorThemeContext } from "@/hooks";
import { useState } from "react";

export const ThemeColorToggler = () => {
	const [isOpened, setIsOpened] = useState(false);

	const { colorTheme, setColorTheme } = useColorThemeContext();

	const buttons = [
		{ text: "Light", theme: ColorTheme.LIGHT },
		{ text: "Dark", theme: ColorTheme.DARK },
		{ text: "System", theme: ColorTheme.SYSTEM },
	];

	return (
		<div className="relative">
			<button
				className="size-9 flex items-center justify-center"
				onClick={() => {
					setIsOpened(!isOpened);
				}}
			>
				<figure className="text-primary-foreground">
					{colorTheme === ColorTheme.LIGHT ? (
						<IconSun className="size-5" />
					) : (
						<IconMoon className="size-5" />
					)}
				</figure>
			</button>
			{isOpened && (
				<ul className="absolute z-10 right-0 border border-border rounded text-sm w-32 p-1 bg-primary shadow">
					{buttons.map((b, i) => (
						<li key={i}>
							<button
								onClick={() => setColorTheme(b.theme)}
								className="w-full py-1.5 px-2 text-left rounded hover:bg-border"
							>
								{b.text}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
