interface IPostHeaderProps {
	author: string;
	authorSlug: string;
}

export const PostHeader = ({ author, authorSlug }: IPostHeaderProps) => {
	return (
		<div className="flex gap-1">
			<span className="font-bold">{author}</span>
			<div className="text-muted">
				<span>@{authorSlug}</span>
				<span className="px-1">·</span>
				<time>1h</time>
			</div>
		</div>
	);
};
