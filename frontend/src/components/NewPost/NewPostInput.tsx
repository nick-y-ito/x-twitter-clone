import { IconEarth } from "@/assets/images/icons";
import { ChangeEvent, useRef } from "react";

interface INewPostInputProps {
	content: string;
	setContent: (content: string) => void;
}

export const NewPostInput = ({ content, setContent }: INewPostInputProps) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	return (
		<label htmlFor="new-post" className="py-3 border-b border-border">
			<textarea
				ref={textareaRef}
				id="new-post"
				name="content"
				value={content}
				onChange={handleTextChange}
				className="w-full text-xl"
				placeholder="What is happening?"
			/>
			<button className="flex items-center gap-1 h-6 mt-3 text-accent">
				<IconEarth className="size-4" />
				<span className="text-sm font-bold">Everyone can reply</span>
			</button>
		</label>
	);
};
