import { NewPostInput } from "@/components/NewPost/NewPostInput";
import { NewPostFooter } from "./NewPostFooter";
import { FormEvent, useState } from "react";
import { createPost } from "@/lib/actions";
import { PostType } from "@/types/post";

export const NewPost = () => {
	const defaultNewPost = {
		author: "Nick",
		authorSlug: "nick-nick-nick",
		content: "",
		dateAdded: "",
	};

	const [values, setValues] = useState(defaultNewPost);

	const setContent = (content: PostType["content"]) => {
		setValues({ ...values, content });
	};

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
			<input type="hidden" name="author" value={values.author} />
			<input type="hidden" name="authorSlug" value={values.authorSlug} />
			<div className="flex gap-2">
				<figure className="shrink-0 size-10 rounded-full bg-white" />
				<div className="flex flex-col w-full">
					<NewPostInput content={values.content} setContent={setContent} />
					<NewPostFooter />
				</div>
			</div>
		</form>
	);
};
