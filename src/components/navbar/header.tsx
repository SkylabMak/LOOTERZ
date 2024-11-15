"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

const link = [
	{
		href: "/homepage",
		label: "Home",
	},
	{
		href: "/join",
		label: "Rooms",
	},
	{
		href: "/createRoom",
		label: "Create a Room",
	},
];
export default function Header() {
	const [name, setName] = useState("");
	const router = useRouter();
	const pathname = usePathname();
	const active = link.find((item) => item.href === pathname);

	// if (typeof window !== "undefined") {
	// 	useEffect(() => {
	// 		let value;
	// 		value = localStorage.getItem("name");
	// 		if (value) {
	// 			setName(value);
	// 		} else {
	// 			router.push("/createName");
	// 		}
	// 	}, [localStorage.getItem("name")]);
	// }
	if (active !== undefined) {
		return (
			<header className="flex items-center justify-between px-32 py-6">
				<div className="inline-flex h-[72px] items-center gap-6 px-9 py-6 relative bg-[#00000040] rounded-[14px_0px_0px_0px]">
					{/* <img className="relative w-[12.94px] h-[21.32px]" alt="Vector" src="vector.svg" /> */}
					<button onClick={router.back}>
						<IoChevronBack size={32} />
					</button>
					<span className="relative w-fit font-black italic text-white text-xl text-center tracking-[0] leading-[22px] whitespace-nowrap">
						{active ? active.label : "Home"}
					</span>
				</div>
				<div className="inline-flex h-[72px] items-center gap-4 px-10 py-6 relative bg-[#00000040] rounded-[0px_0px_16px_0px]">
					{/* <div className="relative w-5 h-5 bg-[url(/account.png)] bg-[100%_100%]" /> */}
					 <span className="relative w-fit font-extrabold italic text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
						{name}
					</span> 
				</div>
			</header>
		);
	}
}
