import { Header } from "@/components/Header";
import { NewPost } from "@/components/NewPost/NewPost";
import { Post } from "@/components/Post/Post";
import { PostType } from "@/types/post";
import { useEffect, useState } from "react";
import { getPosts } from "./lib/actions";

export const App = () => {
	const [posts, setPosts] = useState<PostType[]>([]);

	const fetchPosts = async () => {
		const _posts = await getPosts();
		setPosts(_posts);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			<Header />
			<main className="w-full min-h-screen">
				<NewPost />
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</main>
		</>
	);
};
