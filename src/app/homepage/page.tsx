import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	const stylingLine = {
		backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='1%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FFFFFF4C' stroke-width='1' stroke-dasharray='18%2c 18' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
	};

	return (
		<main className="relative min-h-min h-full">
			<div className="flex justify-center flex-col items-center mt-4 h-full">
				<ul className="text-center my-8 font-black italic text-[40px] leading-[40px]">
					<li className="mb-4 p-9">
						<Link
							href="/join"
							className="hover:text-primary hover:text-[42px] ease-in-out duration-100"
						>
							PLAY
						</Link>
					</li>
					<li className="mb-4 p-9">
						<Link
							href="/createRoom"
							className="hover:text-primary hover:text-[42px] ease-in-out duration-100"
						>
							CREATE ROOM
						</Link>
					</li>
				</ul>
				<div className="w-1/4 h-px" style={stylingLine} />
				<ul className="text-center my-8 font-bold italic text-xl text-gray-400">
					<li className=" mb-2 p-4">
						<Link href="/createName" className="hover:text-gray-100">
							CHANGE USERNAME
						</Link>
					</li>
					<li className=" mb-2 p-4">
						<a
							href="https://www.youtube.com/watch?v=V6NXuW-xaTE"
							target="_blank"
							className="hover:text-gray-100"
						>
							TUTORIAL
						</a>
					</li>
					<li className=" mb-2 p-4">
						<a
							href="https://cmon-files.s3.amazonaws.com/pdf/assets_item/resource/33/Looterz_Rulebook.pdf"
							target="_blank"
							className="hover:text-gray-100"
						>
							RULES
						</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
