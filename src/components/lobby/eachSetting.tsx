import React from "react";

interface IEachSettingProps {
	settingName: string;
	inputType: string;
}

const EachSetting: React.FunctionComponent<IEachSettingProps> = (props) => {
	const { settingName, inputType } = props;

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<>
			<p className="font-bold text-white">{settingName}</p>
			<input
				className="rounded-md p-2 border-zinc-700 border-solid border-[1px] bg-[#18181B] opacity-50 w-full "
				type={inputType}
				placeholder="Placeholder"
				// onKeyDown={handleKeyDown}
			/>
		</>
	);
};

export default EachSetting;
