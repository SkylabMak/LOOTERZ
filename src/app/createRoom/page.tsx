import ImageCard from "../../image/looterzCard.png";
import TextFill from "@/component/textFill";
export default function createRoom() {
    return (
        <body className="bg-red-600">
            <div className=" bg-Accent1 flex justify-between pr-20">
                <button className="bg-black text-left text-lg mt-6 ml-32 p-5 rounded-tl-lg hover:bg-white hover:text-black">
                    Create a Room
                </button>
                <button className="bg-black text-lg mt-6 ml-32 p-5 rounded-br-lg">
                    username
                </button>
            </div>
            <div className="grid grid-cols-2 px-32">
                <div className=" border border-red-50 rounded-t-lg">
                    <p className="text-2xl">Setting</p>
                    <div className="bg-Accent1">
                        <form className="mt-12 grid space-y-8">
                            {/* <TextFill name={"Room Name"} ></TextFill> */}
                            <p>Room Name</p>
                            <input className="bg-red-700 rounded-md text-black" type="text" placeholder="Placeholder" />
                            <TextFill name={"Players"} />
                            <TextFill name={"Time/Turns"} />
                            <TextFill name={"Password"} />
                        </form>
                        <div className="py-4 flex justify-end mr-10 space-x-5">
                            <button className="bg-black text-gray rounded-3xl border border-gray-500 px-5 py-2">Cancel</button>
                            <button className="bg-Accent1 text-gray rounded-3xl border border-gray-500 px-5 py-2">Create a Room</button>
                        </div>
                    </div>
                </div>
                <img src={ImageCard.src} className="ml-40 pt-20"/>
            </div>
        </body>
    );
}