import * as React from "react";
import { useEffect, useRef } from "react";

interface INumberFillProps {
	name: string;
	Step: string;
	Min: string;
	Max: string;
}

const NumberFill: React.FunctionComponent<INumberFillProps> = (props) => {
	const { name, Step, Min, Max } = props;
	const exceptThisSymbols = ["e", "E", "+", "-", "."];
	const inputRef = useRef<HTMLInputElement>(null);
	const minInt = parseInt(Min);
	const maxInt = parseInt(Max);
	const stepInt = parseInt(Step);

	const handleIncrement = () => {
		if (inputRef.current) {
			let currentValue = parseInt(inputRef.current.value) || minInt;
			if (currentValue < maxInt) {
				inputRef.current.value = (currentValue + stepInt).toString();
			}
		}
	};

	const handleDecrement = () => {
		if (inputRef.current) {
			let currentValue = parseInt(inputRef.current.value) || minInt;
			if (currentValue > minInt) {
				inputRef.current.value = (currentValue - stepInt).toString();
			}
		}
	};

	useEffect(() => {
		const inputElement = inputRef.current;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (exceptThisSymbols.includes(e.key)) {
				e.preventDefault();
			}
		};

		if (inputElement) {
			inputElement.addEventListener("keydown", handleKeyDown);

			return () => {
				inputElement.removeEventListener("keydown", handleKeyDown);
			};
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const maxValue = Max;
		const minValue = Min;
		if (value.length > 0) {
			const numValue = parseInt(value, 10);
			if (numValue > maxInt) {
				e.target.value = maxValue;
			} else if (numValue < minInt) {
				e.target.value = minValue;
			}
		}
	};

	return (
		<div className=" w-full ">
			<p>{name}</p>
			<div className="relative flex items-center max-w-[8rem]">
				<input
					type="text"
					id="quantity-input"
					data-input-counter
					aria-describedby="helper-text-explanation"
					className="rounded-lg h-11 text-center bg-[#18181B] border-zinc-700 border-1 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
					ref={inputRef}
					onChange={handleChange}
					readOnly
					value={Min}
					required
				/>
				<button
					type="button"
					id="decrement-button"
					data-input-counter-decrement="quantity-input"
					className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
					onClick={handleDecrement}
				>
					<span className="text-lg">-</span>
				</button>
				<button
					type="button"
					id="increment-button"
					data-input-counter-increment="quantity-input"
					className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
					onClick={handleIncrement}
				>
					<span className="text-lg">+</span>
				</button>
			</div>
		</div>
	);
};

export default NumberFill;
