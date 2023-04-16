import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
	title: "Approach",
	description: "A Real Time Communication App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{" "}
				<Providers>{children}</Providers>{" "}
			</body>
		</html>
	);
}
