import * as React from 'react';

interface IMyUserProps {
    myName : string;
}

const MyUser: React.FunctionComponent<IMyUserProps> = (props) => {
    const {myName } = props;
  return (
    <>
        {/* <div className=' bg-yellow-200 h-10 w-40 text-black flex justify-around items-center p-5'> */}
        <div className=' bg-yellow-200 h-50 w-[15%] text-black flex justify-around items-center p-3'>
            {/* <div> */}
            <div className='rounded-full bg-red-500 w-[35px] h-[35px]'></div>
            {myName}
            {/* </div> */}
        </div>
    </>

  );
};

export default MyUser;
