

import * as React from 'react';

interface IMyUserProps {
  myName: string;
}

const MyUser: React.FunctionComponent<IMyUserProps> = (props) => {
  const { myName } = props;
  return (
    <div className="bg-black h-50 w-auto md:w-1/5 lg:w-[15%] text-white flex justify-around items-center p-3">
      <div className="rounded-full bg-red-500 w-[35px] h-[35px]"></div>
      {myName}
    </div>
  );
};

export default MyUser;
