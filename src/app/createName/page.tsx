"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { paytone_one } from "@/utilites/font";
export default function HomePage() {
	const router = useRouter();
	const [name, setName] = useState("");

	useEffect(() => {
		let value;
		value = localStorage.getItem("name") || "";
		setName(value);
	}, []);

	const saveToLocalStorage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.setItem("name", name);
		router.push("/homepage");
	};
	return (
		<main className="relative min-h-min h-screen">
			<div className="flex justify-center flex-col items-center h-full">
				<form
					onSubmit={saveToLocalStorage}
					className="w-3/6 flex flex-col gap-6 items-center"
				>
					<label className={paytone_one.className + " text-2xl"}>
						CREATE A USERNAME
					</label>
					<input
						value={name}
						className="bg-transparent px-12 py-8 border-solid border-1 border-white rounded-full w-full text-3xl"
						onChange={(e) => setName(e.target.value)}
						placeholder="Username"
						required
					/>
					<button
						type="submit"
						className="lg:px-80 lg:py-6 lg:text-3xl font-black italic [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,198.9,0)_0%,rgb(215,134.51,0)_100%)] text-white rounded-full leading-none transition"
					>
						GO!
					</button>
				</form>
			</div>
		</main>
	);
}
