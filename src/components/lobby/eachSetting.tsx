

// import * as React from "react";

// interface IEachSettingProps {
//   settingName: string;
//   inputType: string;
// }

// const EachSetting: React.FunctionComponent<IEachSettingProps> = (props) => {
//   const { settingName, inputType } = props;
//   return (
//     <>
//       <p className="font-bold">{settingName}</p>
//       <input
//         className="rounded-md p-2 border-white border-solid border-[1px] bg-[#18181B] opacity-50 w-full"
//         type={inputType}
//         placeholder="Placeholder"
//       />
//     </>
//   );
// };

// export default EachSetting;


import React from 'react';

interface IEachSettingProps {
  settingName: string;
  inputType: string;
}

const EachSetting: React.FunctionComponent<IEachSettingProps> = (props) => {
  const { settingName, inputType } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (inputType === 'number') {
    //   console.log(e); 
    //   e.preventDefault();
    // }
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <p className="font-bold">{settingName}</p>
      <input
        className="rounded-md p-2 border-white border-solid border-[1px] bg-[#18181B] opacity-50 w-full "
        type={inputType}
        placeholder="Placeholder"
        onKeyDown={handleKeyDown}
        
      />
    </>
  );
};

export default EachSetting;

