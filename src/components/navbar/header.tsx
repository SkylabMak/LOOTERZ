"use client";
import { usePathname } from "next/navigation";

const link = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/join",
		label: "Rooms",
	},
	{
		href: "/create",
		label: "Create a Room",
	},
	{
		href: "/lobby",
		label: "'s Rooms",
	},
];
export default function Header() {
	const pathname = usePathname();
	const active = link.find((item) => item.href === pathname);
	if (pathname != "/lobby") {
		return (
			<header className="flex items-center justify-between px-32 py-6">
				<div className="inline-flex h-[72px] items-center gap-8 px-10 py-6 relative bg-[#00000040] rounded-[14px_0px_0px_0px]">
					{/* <img className="relative w-[12.94px] h-[21.32px]" alt="Vector" src="vector.svg" /> */}
					<span className="relative w-fit font-black italic text-white text-xl text-center tracking-[0] leading-[22px] whitespace-nowrap">
						{active ? active.label : "Home"}
					</span>
				</div>
				<div className="inline-flex h-[72px] items-center gap-4 px-10 py-6 relative bg-[#00000040] rounded-[0px_0px_16px_0px]">
					{/* <div className="relative w-5 h-5 bg-[url(/account.png)] bg-[100%_100%]" /> */}
					<span className="relative w-fit font-extrabold italic text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Mickie2k
					</span>
				</div>
			</header>
		);
	}
}
