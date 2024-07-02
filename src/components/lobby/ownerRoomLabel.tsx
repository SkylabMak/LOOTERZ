// import * as React from "react";

// interface IOwnerRoomLabelProps {
//   ownerName: string;
// }

// const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (
//   props
// ) => {
//   const { ownerName } = props;

//   return (
//     <>

//       <div className=" w-3/4 h-50 p-5 bg-black text-white flex justify-between font-bold italic">
//         <div>&lt;{ownerName}'s Room</div>
//         <div className="bg-red-500 w-48"></div>
//       </div>

   
//     </>
//   );
// };

// export default OwnerRoomLabel;


// import * as React from "react";

// interface IOwnerRoomLabelProps {
//   ownerName: string;
// }

// const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (
//   props
// ) => {
//   const { ownerName } = props;

//   return (
//     <>

//       <div className="h-50 p-5 bg-black text-white flex justify-between font-bold italic w-1 sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/4">
//         <div>&lt;{ownerName}'s Room</div>
//         <div className="bg-red-500 sm:w-48"></div>
//       </div>

   
//     </>
//   );
// };

// export default OwnerRoomLabel;


import * as React from "react";

interface IOwnerRoomLabelProps {
  ownerName: string;
}

const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (props) => {
  const { ownerName } = props;

  return (
    <div className="p-5 bg-black text-white flex flex-col sm:flex-row justify-between font-bold italic w-3/4 sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/4">
      <div>&lt;{ownerName}'s Room</div>
      <div className="bg-red-500 h-8 sm:h-auto sm:w-48 mt-2 sm:mt-0"></div>
    </div>
  );
};

export default OwnerRoomLabel;



