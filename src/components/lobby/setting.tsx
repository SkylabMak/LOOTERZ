import * as React from "react";
import EachSetting from "./eachSetting";

interface ISettingProps {}

const Setting: React.FunctionComponent<ISettingProps> = (props) => {
  return (
    <div className="w-[500px] h-full bg-black opacity-[50%] rounded-xl p-4 shadow-lg shadow-gray-500">
      <p className="text-center mb-">Settings</p>
      <div className="space-y-3">
        <EachSetting settingName="Room Name" inputType="text" />
        <EachSetting settingName="Max Players" inputType="number" />
        <EachSetting settingName="Time/Turns" inputType="number" />
        <EachSetting settingName="Password" inputType="password" />
      </div>
    </div>
  );
};

export default Setting;

