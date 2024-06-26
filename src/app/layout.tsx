import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const hgrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alessio Lagreca",
	description: "Portfolio of Alessio Lagreca",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={hgrotesk.className}>
				<ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
