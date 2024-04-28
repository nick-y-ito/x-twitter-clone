import { NewPostInput } from "@/components/NewPost/NewPostInput";
import { NewPostFooter } from "./NewPostFooter";
import { PostType } from "@/types/post";
import { useNewPost } from "@/components/NewPost/useNewPost";
import { Avatar } from "@/components/ui/Avatar";
import { AVATAR_URL } from "@/const/appConst";
import { useUserContext } from "@/contexts/UserContext/useUserContext";

export const NewPost = ({
	fetchPosts,
}: {
	fetchPosts: () => Promise<void>;
}) => {
	const { name, slug } = useUserContext();
	const { values, setValues, count, handleSubmit } = useNewPost({ fetchPosts });

	return (
		<form onSubmit={handleSubmit} className="px-4 pt-4 border-b border-border">
			<input type="hidden" name="author" value={name} />
			<input type="hidden" name="authorSlug" value={slug} />
			<div className="flex gap-2">
				<Avatar
					src={`${AVATAR_URL}?seed=${slug}`}
					className="shrink-0 size-10"
				/>
				<div className="flex flex-col w-full">
					<NewPostInput
						content={values.content}
						setContent={(content: PostType["content"]) => {
							setValues({ ...values, content });
						}}
					/>
					<NewPostFooter count={count} />
				</div>
			</div>
		</form>
	);
};
