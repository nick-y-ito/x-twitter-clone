import { NewPostType } from "@/types/post";

export const createPost = async (formData: FormData) => {
	const newPost = Object.fromEntries(
		formData.entries()
	) as unknown as NewPostType;

	newPost.dateAdded = new Date().toISOString();

	const res = await fetch("/api/twoot", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ newTwoot: newPost }),
	});

	if (!res.ok) {
		throw new Error("Failed to create a post.");
	}
};
