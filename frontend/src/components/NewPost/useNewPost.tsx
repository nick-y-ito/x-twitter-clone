import { FormEvent, useState } from "react";
import { createPost } from "@/lib/api";
import { NewPostType } from "@/types/post";

export const useNewPost = ({
	fetchPosts,
}: {
	fetchPosts: () => Promise<void>;
}) => {
	const defaultNewPost: NewPostType = {
		author: "",
		authorSlug: "",
		content: "",
		tags: [],
		dateAdded: "",
	};

	const [values, setValues] = useState(defaultNewPost);
	const count = values.content.length;

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.target as HTMLFormElement);
			await createPost(formData);
			alert("Posted");
			setValues(defaultNewPost);
			await fetchPosts();
		} catch {
			return alert("Something went wrong. Please try again.");
		}
	};

	return {
		values,
		setValues,
		count,
		handleSubmit,
	};
};
