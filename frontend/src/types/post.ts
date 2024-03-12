export type PostType = {
	_id: string;
	author: string;
	content: string;
	tags?: string[];
	authorSlug: string;
	length: number;
	dateAdded: string;
	dateModified: string;
};

export type NewPostType = Omit<PostType, "_id" | "length" | "dateModified">;
