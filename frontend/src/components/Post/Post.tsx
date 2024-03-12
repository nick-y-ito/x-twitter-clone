import { IconMeatball } from "@/assets/images/icons";
import { PostFooter } from "@/components/Post/PostFooter";
import { PostHeader } from "@/components/Post/PostHeader";
import { PostType } from "@/types/post";
import { isTag } from "@/lib/utils";

export const Post = ({ post }: { post: PostType }) => {
	const words = post.content.split(/\s+/);

	return (
		<article className="relative flex px-4 py-3 gap-2 border-b border-border">
			<button className="absolute top-0 right-0 size-9 mt-1 mr-2 flex items-center justify-center bg-primary">
				<IconMeatball className="size-5 text-muted" />
			</button>
			<figure className="shrink-0 size-10 rounded-full bg-white" />
			<div className="grow flex flex-col min-w-0">
				<PostHeader author={post.author} authorSlug={post.authorSlug} />
				<div className="w-full break-words">
					{words.map((word, i) => {
						if (isTag(word)) {
							return (
								<>
									<a className="text-accent">{word}</a>
									{i < words.length - 1 ? " " : ""}
								</>
							);
						}
						return (
							<>
								{word}
								{i < words.length - 1 ? " " : ""}
							</>
						);
					})}
				</div>
				<div>
					{post.tags?.map((tag, i) => {
						if (words.includes(`#${tag}`)) return;
						return (
							<>
								{i > 0 ? " " : ""}
								<a key={tag} className="text-accent cursor-pointer">
									#{tag}
								</a>
							</>
						);
					})}
				</div>
				<PostFooter />
			</div>
		</article>
	);
};
