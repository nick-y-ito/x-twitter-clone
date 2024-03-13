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

export const getTimeDifference = (datetime: string) => {
	const currentTime = new Date();
	const givenTime = new Date(datetime);
	const currentYear = currentTime.getFullYear();
	const givenYear = givenTime.getFullYear();
	const diffInMilliseconds = currentTime.getTime() - givenTime.getTime();

	const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
	const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
	const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

	if (diffInMinutes < 1) {
		return "Now";
	} else if (diffInMinutes < 60) {
		return `${diffInMinutes}m`;
	} else if (diffInHours < 24) {
		return `${diffInHours}h`;
	} else if (diffInDays < 7) {
		return `${diffInDays}d`;
	} else {
		const isDifferentYear = currentYear - givenYear;
		return `${givenTime.toLocaleDateString("en-us", {
			month: "short",
			day: "numeric",
			year: isDifferentYear ? "numeric" : undefined,
		})}`;
	}
};
