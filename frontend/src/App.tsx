import { Header } from "@/components/Header";
import { Post } from "@/components/Post/Post";
import { PostType } from "@/types/post";
import { useEffect, useState } from "react";

export const App = () => {
	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		fetch("http://localhost:8080/twoots")
			.then((res) => res.json())
			.then(setPosts);
	}, []);

	return (
		<>
			<Header />
			<main className="w-full min-h-screen">
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</main>
		</>
	);
};
