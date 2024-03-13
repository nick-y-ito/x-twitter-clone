import { IconMeatball } from "@/assets/images/icons";
import { PostFooter } from "@/components/Post/PostFooter";
import { PostHeader } from "@/components/Post/PostHeader";
import { PostType } from "@/types/post";
import { PostBody } from "@/components/Post/PostBody";
import { Avatar } from "@/components/ui/Avatar";
import { AVATAR_URL } from "@/const/appConst";

export const Post = ({ post }: { post: PostType }) => {
	return (
		<article className="relative flex px-4 py-3 gap-2 border-b border-border">
			<button className="absolute top-0 right-0 size-9 mt-1 mr-2 flex items-center justify-center bg-primary">
				<IconMeatball className="size-5 text-muted" />
			</button>
			<Avatar
				src={`${AVATAR_URL}?seed=${post.authorSlug}`}
				className="size-10 shrink-0 p-0.5"
			/>
			<div className="grow flex flex-col min-w-0">
				<PostHeader author={post.author} authorSlug={post.authorSlug} />
				<PostBody content={post.content} tags={post.tags} />
				<PostFooter />
			</div>
		</article>
	);
};
