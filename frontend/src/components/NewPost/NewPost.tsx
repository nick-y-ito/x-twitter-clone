import { NewPostInput } from "@/components/NewPost/NewPostInput";
import { NewPostFooter } from "./NewPostFooter";
import { PostType } from "@/types/post";
import { useUserContext } from "@/hooks/useUserContext";
import { useNewPost } from "@/components/NewPost/useNewPost";

export const NewPost = () => {
	const { name, slug } = useUserContext();
	const { values, setValues, count, handleSubmit } = useNewPost();

	return (
		<form onSubmit={handleSubmit} className="px-4 pt-4 border-b border-border">
			<input type="hidden" name="author" value={name} />
			<input type="hidden" name="authorSlug" value={slug} />
			<div className="flex gap-2">
				<figure className="shrink-0 size-10 rounded-full bg-white" />
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
