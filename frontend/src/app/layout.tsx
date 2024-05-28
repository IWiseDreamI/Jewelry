import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import Header from "@/components/custom/header";
import "./globals.css";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], style: "normal", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Jewelry shop",
  description: "Jewelry shop",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				<main className="flex w-[100%] min-h-screen flex-col items-center justify-between">
					{children}
				</main>
			</body>
		</html>
	);
}
