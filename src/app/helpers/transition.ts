export const fade = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
	},
} as const;
