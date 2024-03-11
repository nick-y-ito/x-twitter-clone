import { NewPostInput } from "@/components/NewPost/NewPostInput";
import { NewPostFooter } from "./NewPostFooter";

export const NewPost = () => {
	return (
		<form className="px-4 pt-4 border-b border-border">
			<div className="flex gap-2">
				<figure className="shrink-0 size-10 rounded-full bg-white" />
				<div className="flex flex-col w-full">
					<NewPostInput />
					<NewPostFooter />
				</div>
			</div>
		</form>
	);
};
