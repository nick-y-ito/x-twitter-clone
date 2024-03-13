import { getTimeDifference } from "@/lib/utils";

interface IPostHeaderProps {
	author: string;
	authorSlug: string;
	dateAdded: string;
}

export const PostHeader = ({
	author,
	authorSlug,
	dateAdded,
}: IPostHeaderProps) => {
	return (
		<div className="flex gap-1">
			<span className="shrink-0 font-bold overflow-hidden">{author}</span>
			<div className="text-muted text-clip whitespace-nowrap overflow-hidden">
				<span>@{authorSlug}</span>
				<span className="px-1">·</span>
				<time>{getTimeDifference(dateAdded)}</time>
			</div>
		</div>
	);
};
