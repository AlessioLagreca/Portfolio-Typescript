import Link from "next/link";

interface Props {
	destination: string;
	a11yText: string;
	label: string;
	extraClasses?: string;
}

export default function FancyLink({ destination, a11yText, label, extraClasses }: Props) {
	return (
		<Link
			href={destination}
			aria-label={a11yText}
			className={`underline hover:text-gray-500 focus:text-gray-500 ${extraClasses}`}
		>
			{label}
		</Link>
	);
}
