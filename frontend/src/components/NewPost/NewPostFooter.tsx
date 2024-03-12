import {
	IconEmoji,
	IconGif,
	IconImage,
	IconLocation,
	IconPlus,
} from "@/assets/images/icons";
import { CharacterCounter } from "@/components/NewPost/CharacterCounter";
import { MAX_CHARACTERS } from "@/const/postConst";
import { cn } from "@/lib/utils";

interface INewPostFooterProps {
	count: number;
}

export const NewPostFooter = ({ count }: INewPostFooterProps) => {
	const disabled = count < 1 || count > MAX_CHARACTERS;

	return (
		<div className="flex my-2">
			<div className="flex-1 flex">
				<button
					type="button"
					className="flex items-center justify-center size-9"
				>
					<IconImage className="size-5 text-accent" />
				</button>
				<button
					type="button"
					className="flex items-center justify-center size-9"
				>
					<IconGif className="size-5 text-accent" />
				</button>
				<button
					type="button"
					className="flex items-center justify-center size-9"
				>
					<IconEmoji className="size-5 text-accent" />
				</button>
				<button
					type="button"
					className="flex items-center justify-center size-9 opacity-50"
				>
					<IconLocation className="size-5 text-accent" />
				</button>
			</div>
			<div className="flex items-center gap-3">
				<CharacterCounter count={count} />
				<div className="h-full border-r border-border"></div>
				<button
					type="button"
					className="flex items-center justify-center size-6 rounded-full border border-border"
				>
					<IconPlus className="size-4 text-accent" />
				</button>
				<button
					type="submit"
					className={cn(
						"flex items-center justify-center bg-accent text-accent-foreground h-9 p-4 rounded-full font-bold text",
						disabled && "opacity-50"
					)}
					disabled={disabled}
				>
					Post
				</button>
			</div>
		</div>
	);
};
