import { paytone_one } from "@/utilites/font";
const CreateRoomBtn = () => {
	return (
		<div
			className=" flex
        sticky bottom-[40px] inset-x-0	justify-center
        xl:bottom-[80px] xl:justify-end xl:pr-[80px]
        "
		>
			<button
				type="button"
				className="px-10 py-6 bg-gradient-to-b from-[#B456BC] to-[#852E8C] rounded-full"
			>
				{" "}
				<span className={paytone_one.className}>Create a room</span>
			</button>
		</div>
	);
};
export default CreateRoomBtn;
