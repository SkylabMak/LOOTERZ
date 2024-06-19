import * as React from "react";

interface IOwnerRoomLabelProps {
  ownerName: string;
}

const OwnerRoomLabel: React.FunctionComponent<IOwnerRoomLabelProps> = (
  props
) => {
  const { ownerName } = props;

  return (
    <>
      {/* <div className="room-owner"> */}

      <div className="w-3/4 h-50 p-5 bg-black text-white flex justify-between font-bold italic">
        <div>&lt;{ownerName}'s Room</div>
        <div className="bg-red-500 w-48"></div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OwnerRoomLabel;
