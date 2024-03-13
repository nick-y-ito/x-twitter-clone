import { isTag } from "@/lib/utils";
import { Fragment } from "react";
import { PostType } from "@/types/post";

interface IPostBodyProps {
	content: PostType["content"];
	tags?: PostType["tags"];
}

export const PostBody = ({ content, tags }: IPostBodyProps) => {
	const words = content.split(/\s+/);

	return (
		<>
			<div className="w-full break-words">
				{words.map((word, i) => {
					if (isTag(word)) {
						return (
							<Fragment key={i}>
								<a className="text-accent">{word}</a>
								{i < words.length - 1 ? " " : ""}
							</Fragment>
						);
					}
					return (
						<Fragment key={i}>
							{word}
							{i < words.length - 1 ? " " : ""}
						</Fragment>
					);
				})}
			</div>
			<div>
				{tags?.map((tag, i) => {
					if (words.includes(`#${tag}`)) return;
					return (
						<Fragment key={i}>
							{i > 0 ? " " : ""}
							<a key={tag} className="text-accent cursor-pointer">
								#{tag}
							</a>
						</Fragment>
					);
				})}
			</div>
		</>
	);
};
