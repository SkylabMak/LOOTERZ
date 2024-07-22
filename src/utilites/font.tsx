import { Nunito, Paytone_One } from "next/font/google";
export const nunito = Nunito({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
	subsets: ["latin"],
	display: "swap",
});

export const paytone_one = Paytone_One({ weight: "400", subsets: ["latin"] });
