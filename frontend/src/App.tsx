import { Header } from "@/components/Header/Header";
import { NewPost } from "@/components/NewPost/NewPost";
import { Post } from "@/components/Post/Post";
import { PostType } from "@/types/post";
import { useEffect, useState } from "react";
import { getPosts } from "./lib/api";
import { ColorThemeProvider, UserContextProvider } from "@/hooks";
import { ColorTheme } from "@/const/appConst";

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
		<ColorThemeProvider defaultTheme={ColorTheme.DARK}>
			<UserContextProvider>
				<Header />
				<main className="w-full min-h-screen">
					<NewPost />
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</main>
			</UserContextProvider>
		</ColorThemeProvider>
	);
};
