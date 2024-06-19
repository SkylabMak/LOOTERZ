import * as React from "react";

interface IEachPlayerProps {
    name : string;
}

const EachPlayer: React.FunctionComponent<IEachPlayerProps> = (props) => {

    const { name } = props;

  return (
    <div className="block rounded-2xl bg-[#291E2C] w-56 h-48">
      <div className="w-full h-2/5 bg-white rounded-2xl rounded-b-none bg-opacity-20">
        {/* <img className="bg-auto" src="https://placehold.co/200" alt="" /> */}
      </div>
      <div className="flex flex-col justify-between items-center h-3/5 w-full p-3">
        <p className="text-white">{name}</p>

        <div className="w-4/5 bg-gray-500 text-center rounded-2xl mb-1 p-1">Waiting</div>
      </div>
    </div>
  );
};

export default EachPlayer;


// import * as React from "react";

// interface IEachPlayerProps {
//   name: string;
// }

// const EachPlayer: React.FunctionComponent<IEachPlayerProps> = (props) => {
//   const { name } = props;

//   return (
//     <div className="block rounded-2xl bg-[#291E2C] w-32 h-28 sm:w-36 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-40">
//       <div className="w-full h-2/5 bg-gray-400 rounded-2xl rounded-b-none">
//         {/* <img className="bg-auto" src="https://placehold.co/200" alt="" /> */}
//       </div>
//       <div className="flex flex-col justify-between items-center h-3/5 w-full p-2 sm:p-3">
//         <p className="text-white text-xs sm:text-sm md:text-base">{name}</p>
//         <div className="w-4/5 bg-gray-500 text-center rounded-2xl text-xs sm:text-sm md:text-base">
//           Waiting
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EachPlayer;
