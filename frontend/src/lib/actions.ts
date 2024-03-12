import { NewPostType, PostType } from "@/types/post";

export const getPosts = async (): Promise<PostType[]> => {
	const res = await fetch("/api/twoots", {
		method: "GET",
	});

	if (!res.ok) {
		throw new Error(
			`Failed to fetch posts with status: ${res.status}. ${res.statusText}`
		);
	}

	const data = await res.json();
	return data as PostType[];
};

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
		throw new Error(
			`Failed to create post with status: ${res.status}. ${res.statusText}`
		);
	}
};
