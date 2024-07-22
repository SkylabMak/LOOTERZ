export default function HeaderLobby() {
	return (
		<header className="flex items-center justify-between px-32 py-6 mb-2">
			<div className="inline-flex h-[72px] items-center gap-8 px-10 py-6 relative bg-[#00000040] rounded-[14px_0px_0px_0px] w-3/4 sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-full mr-8">
				{/* <img className="relative w-[12.94px] h-[21.32px]" alt="Vector" src="vector.svg" /> */}
				<span className="relative w-fit font-black italic text-white text-xl text-center tracking-[0] leading-[22px] whitespace-nowrap">
					Lobby
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
