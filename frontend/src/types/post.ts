/*
"_id": "An5NAXPrbN",
"author": "Thomas Edison",
"content": "Hell, there are no rules here-- we're trying to accomplish something.",
"tags": [],
"authorSlug": "thomas-edison",
"length": 69,
"dateAdded": "2023-04-14",
"dateModified": "2023-04-14"
},
*/

export type PostType = {
	_id: string;
	author: string;
	content: string;
	tags: string[];
	authorSlug: string;
	length: number;
	dateAdded: string;
	dateModified: string;
};

export type NewPostType = Omit<PostType, "_id" | "length" | "dateModified">;
