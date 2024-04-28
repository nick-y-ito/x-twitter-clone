import { IconMoon, IconSun } from "@/assets/images/icons";
import { ColorTheme } from "@/const/appConst";
import { useColorThemeContext } from "@/contexts/ColorThemeContext/useColorThemeContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";

export const ColorThemeToggler = () => {
	const [isOpened, setIsOpened] = useState(false);

	/* Popover reference to detect outside click */
	const popoverRef = useRef(null);
	useOutsideClick(popoverRef, () => setIsOpened(false));

	const handleClick = (theme: ColorTheme) => {
		setColorTheme(theme);
		setIsOpened(false);
	};

	const { appliedColorTheme, setColorTheme } = useColorThemeContext();

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
					{appliedColorTheme === ColorTheme.LIGHT ? (
						<IconSun className="size-5" />
					) : (
						<IconMoon className="size-5" />
					)}
				</figure>
			</button>
			{isOpened && (
				<ul
					className="absolute z-10 right-0 border border-border rounded text-sm w-32 p-1 bg-primary shadow"
					ref={popoverRef}
				>
					{buttons.map((b, i) => (
						<li key={i}>
							<button
								onClick={() => handleClick(b.theme)}
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
