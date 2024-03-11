import {
	IconEarth,
	IconEmoji,
	IconGif,
	IconImage,
	IconLocation,
	IconPlus,
} from "@/assets/images/icons";
import { CircularProgress } from "@/components/ui";
import { ChangeEvent, useRef, useState } from "react";

export const NewPost = () => {
	const [text, setText] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	return (
		<form className="px-4 pt-4 border-b border-border">
			<div className="flex gap-2">
				<figure className="shrink-0 size-10 rounded-full bg-white" />
				<div className="flex flex-col w-full">
					<label htmlFor="new-post" className="py-3 border-b border-border">
						<textarea
							ref={textareaRef}
							id="new-post"
							value={text}
							onChange={handleTextChange}
							className="w-full text-xl"
							placeholder="What is happening?"
						/>
						<button className="flex items-center gap-1 h-6 mt-3 text-accent">
							<IconEarth className="size-4" />
							<span className="text-sm font-bold">Everyone can reply</span>
						</button>
					</label>
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
				</div>
			</div>
		</form>
	);
};
