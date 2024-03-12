import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const extractTags = (content: string) => {
	const tags = content.match(/#\w+/g);
	return tags?.map((tag) => tag.slice(1));
};

export const isTag = (word: string) => {
	return word.startsWith("#") && word.length > 1;
};
