

import * as React from 'react';

import { CiUser } from "react-icons/ci";

interface IMyUserProps {
  myName: string;
}

const MyUser: React.FunctionComponent<IMyUserProps> = (props) => {
  const { myName } = props;
  return (
    <div className="bg-black h-50 w-auto md:w-1/5 lg:w-[15%] text-white flex justify-around items-center p-3">
        <CiUser></CiUser>
      {myName}
    </div>
  );
};

export default MyUser;
