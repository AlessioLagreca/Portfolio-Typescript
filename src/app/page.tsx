"use client";

import Footer from "../components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import Main from "../components/main/main";

export default function Home() {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

	return (
		<ReactLenis root>
			<div className='fixed inset-0 -z-10 sfondo'></div>
			<div className='fixed inset-0 opacity-80 grain'></div>
			<div className='relative overflow-x-hidden'>
				<Main />
			</div>
		</ReactLenis>
	);
}
