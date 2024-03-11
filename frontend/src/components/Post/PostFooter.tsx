import {
	IconBarChart,
	IconBookmark,
	IconBookmarkSelected,
	IconHeart,
	IconHeartSelected,
	IconRepost,
	IconRepostSelected,
	IconShare,
	IconSpeechBubble,
} from "@/assets/images/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const PostFooter = () => {
	const [isReposted, setIsReposted] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);

	return (
		<div className="flex mt-1 text-muted -mb-2">
			<div className="w-1/5">
				<button className="flex items-center justify-center size-9 -ml-2">
					<IconSpeechBubble className="size-4" />
				</button>
			</div>
			<div className={cn("w-1/5", isReposted && "text-repost")}>
				<button
					className="flex items-center justify-center size-9"
					onClick={() => setIsReposted(!isReposted)}
				>
					{isReposted ? (
						<IconRepostSelected className="size-4" />
					) : (
						<IconRepost className="size-4" />
					)}
				</button>
			</div>
			<div className={cn("w-1/5", isLiked && "text-heart")}>
				<button
					className="flex items-center justify-center size-9"
					onClick={() => setIsLiked(!isLiked)}
				>
					{isLiked ? (
						<IconHeartSelected className="size-4" />
					) : (
						<IconHeart className="size-4" />
					)}
				</button>
			</div>
			<div className="w-1/5">
				<div className="flex items-center justify-center size-9">
					<IconBarChart className="size-4" />
				</div>
			</div>
			<div className={cn("ml-auto", isBookmarked && "text-bookmark")}>
				<button
					className="flex items-center justify-center size-9"
					onClick={() => setIsBookmarked(!isBookmarked)}
				>
					{isBookmarked ? (
						<IconBookmarkSelected className="size-4" />
					) : (
						<IconBookmark className="size-4" />
					)}
				</button>
			</div>
			<div className="">
				<button className="flex items-center justify-center size-9 -mr-2">
					<IconShare className="size-4" />
				</button>
			</div>
		</div>
	);
};
