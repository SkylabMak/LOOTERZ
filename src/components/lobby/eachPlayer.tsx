

import * as React from "react";

interface IEachPlayerProps {
  name: string;
}

const EachPlayer: React.FunctionComponent<IEachPlayerProps> = (props) => {
  const { name } = props;

  return (
    <div className="rounded-2xl bg-[#291E2C] w-full sm:w-56 h-48 ">
      <div className="w-full h-2/5 bg-white rounded-2xl rounded-b-none bg-opacity-20">
        {/* <img className="bg-auto" src="https://placehold.co/200" alt="" /> */}
      </div>
      <div className="flex flex-col justify-between items-center h-3/5 w-full p-3">
        <p className="text-white">{name}</p>
        <div className="w-4/5 bg-gray-500 text-center rounded-2xl mb-1 p-1 cursor-pointer hover:bg-gray-700 transition">
          Waiting
        </div>
      </div>
    </div>
  );
};

export default EachPlayer;

