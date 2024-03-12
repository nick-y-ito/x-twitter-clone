interface ICircularProgressProps {
	/** The percentage of the circle to fill. */
	percentage?: number;
	/** The size of the circle in pixels. */
	size?: number;
	/** The thickness of the circle's stroke in pixels. */
	strokeWidth?: number;
	/** The class name for the SVG element. This is useful for applying styles to the circle, such as color. */
	className?: string;
	/** Whether to show the background circle. */
	track?: boolean;
	/** The class name for the background circle. */
	trackClassName?: string;
	/** The value to display in the center of the circle. */
	value?: string | number;
	/** The class name for the value. */
	valueClassName?: string;
}

export const CircularProgress = ({
	percentage = 100,
	size = 36,
	strokeWidth = 5,
	className,
	track = true,
	trackClassName,
	value,
	valueClassName
}: ICircularProgressProps) => {
	/** The radius of the circle including the stroke */
	const radius = size / 2;
	/** Radius (r) of the circle excluding the stroke */
	const r = radius - strokeWidth / 2;
	const circumference = r * 2 * Math.PI;
	/** The length of the gap in the stroke */
	const strokeDashoffset = circumference * (1 - percentage / 100);

	return (
		<svg height={radius * 2} width={radius * 2} className={className}>
			{track && (
				<circle
					strokeWidth={strokeWidth}
					transform={`rotate(-90 ${radius} ${radius})`}
					className={trackClassName}
					r={r}
					cx={radius}
					cy={radius}
				/>
			)}
			<circle
				stroke="currentColor"
				fill="transparent"
				strokeWidth={strokeWidth}
				/**
				 * The strokeDasharray is a pair of values.
				 * - The first value is the length of the visible part of the stroke.
				 * - The second value is the length of the gap.
				 * This creates a single dash that is the entire length of the circle's circumference
				 */
				strokeDasharray={`${circumference} ${circumference}`}
				/**
				 * The strokeDashoffset is the length of the gap.
				 * For example, if the percentage is 75, the gap will be 25% of the circumference.
				 */
				strokeDashoffset={strokeDashoffset}
				transform={`rotate(-90 ${radius} ${radius})`}
				r={r}
				cx={radius} // Offset from the left
				cy={radius} // Offset from the top
			/>
			<text
				className={valueClassName}
				x="50%"
				y="53%"
				fill="currentColor"
				textAnchor="middle"
				dominantBaseline="middle"
			>
				{value}
			</text>
		</svg>
	);
};
