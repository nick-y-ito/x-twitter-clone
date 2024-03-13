import { cn } from "@/lib/utils";

interface IAvatarProps {
	src: string;
	className?: string;
}

export const Avatar = ({ src, className }: IAvatarProps) => {
	return (
		<figure
			className={cn(
				"size-9 rounded-full overflow-hidden bg-primary-foreground",
				className
			)}
		>
			<img src={src} className="object-cover" />
		</figure>
	);
};
