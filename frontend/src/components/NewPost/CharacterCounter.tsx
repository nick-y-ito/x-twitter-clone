import { CircularProgress } from "@/components/ui";
import { MAX_CHARACTERS } from "@/const/postConst";
import { cn } from "@/lib/utils";

interface ICharacterCounterProps {
	count: number;
}

export const CharacterCounter = ({ count }: ICharacterCounterProps) => {
	const percentage = (count / MAX_CHARACTERS) * 100;
	const showValue = MAX_CHARACTERS - count <= 20;
	const showProgress = count <= MAX_CHARACTERS + 10;
	const showDangerValue = count >= MAX_CHARACTERS;
	const showDangerProgress = count >= MAX_CHARACTERS;
	const circleColor = showDangerProgress ? "text-danger" : showValue ? "text-warn" : "text-accent";

	return (
		<CircularProgress
			className={circleColor}
			size={24}
			strokeWidth={showProgress ? 2 : 0}
			percentage={percentage > 100 ? 100 : percentage}
			track
			trackClassName="stroke-border"
			value={showValue ? MAX_CHARACTERS - count : ""}
			valueClassName={cn(
				"text-[12px] font-bold",
				showDangerValue ? "text-danger" : "text-muted"
			)}
		/>
	);
};
