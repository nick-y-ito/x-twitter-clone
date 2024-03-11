import { IconEarth } from "@/assets/images/icons";
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
		<form className="px-4 py-4">
			<div className="flex gap-2 border-b border-border">
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
						<button
							className="flex items-center gap-1 h-6 mt-3 text-accent"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							<IconEarth className="size-4" />
							<span className="text-sm font-bold">Everyone can reply</span>
						</button>
					</label>
				</div>
			</div>
		</form>
	);
};
