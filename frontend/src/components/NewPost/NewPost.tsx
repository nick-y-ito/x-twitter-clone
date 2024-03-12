import { NewPostInput } from "@/components/NewPost/NewPostInput";
import { NewPostFooter } from "./NewPostFooter";
import { FormEvent, useState } from "react";
import { createPost } from "@/lib/actions";
import { NewPostType, PostType } from "@/types/post";
import { useUserContext } from "@/hooks/useUserContext";

export const NewPost = () => {
	const { name, slug } = useUserContext();

	const defaultNewPost: NewPostType = {
		author: "",
		authorSlug: "",
		content: "",
		tags: [],
		dateAdded: "",
	};

	const [values, setValues] = useState(defaultNewPost);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.target as HTMLFormElement);
			await createPost(formData);
			alert("Posted");
			setValues(defaultNewPost);
		} catch {
			return alert("Something went wrong. Please try again.");
		}
	};

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
					<NewPostFooter />
				</div>
			</div>
		</form>
	);
};
