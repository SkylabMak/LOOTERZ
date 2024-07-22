import * as React from "react";

import { CiUser, CiLock  } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";



interface IOwnerRoomLabelProps {
  lobby : {ownerName : string, currentPlayer : number , maxPlayer : number, time : number}
  
  
}

const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (props) => {
  const { lobby } = props;

  return (
    <div className="p-5 bg-black text-white flex flex-col sm:flex-row justify-between font-bold italic w-3/4 sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/4">
      <div>&lt;{lobby.ownerName}'s Room</div>
      <div className=" h-8 sm:h-auto sm:w-48 mt-2 sm:mt-0 text-white  flex justify-between items-center">
          <div className=""><CiUser className="inline-block"></CiUser>{`${lobby.currentPlayer}/${lobby.maxPlayer}`}</div>
          <div><IoTimeOutline className="inline-block"></IoTimeOutline>{`${lobby.time} mins`}</div>
          <div><CiLock className="inline-block"></CiLock>text</div>
      </div>
    </div>
  );
};

export default OwnerRoomLabel;



