"use client";
import HomePage from "./homepage/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.replace("/homepage");
	}, []);

	return <HomePage />;
}
