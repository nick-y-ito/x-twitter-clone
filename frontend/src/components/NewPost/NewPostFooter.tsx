import {
	IconEmoji,
	IconGif,
	IconImage,
	IconLocation,
	IconPlus,
} from "@/assets/images/icons";
import { CircularProgress } from "@/components/ui";

export const NewPostFooter = () => {
	return (
		<div className="flex my-2">
			<div className="flex-1 flex">
				<button className="flex items-center justify-center size-9">
					<IconImage className="size-5 text-accent" />
				</button>
				<button className="flex items-center justify-center size-9">
					<IconGif className="size-5 text-accent" />
				</button>
				<button className="flex items-center justify-center size-9">
					<IconEmoji className="size-5 text-accent" />
				</button>
				<button className="flex items-center justify-center size-9 opacity-50">
					<IconLocation className="size-5 text-accent" />
				</button>
			</div>
			<div className="flex items-center gap-3">
				<CircularProgress
					className="text-accent"
					size={24}
					strokeWidth={2}
					percentage={90}
					track
					trackClassName="stroke-border"
				/>
				<div className="h-full border-r border-border"></div>
				<button className="flex items-center justify-center size-6 rounded-full border border-border">
					<IconPlus className="size-4 text-accent" />
				</button>
				<button className="flex items-center justify-center bg-accent h-9 p-4 rounded-full font-bold text">
					Post
				</button>
			</div>
		</div>
	);
};
