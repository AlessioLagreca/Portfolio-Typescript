import OpacityAnim from "../wrappers/opacityAnim";
import * as Avatar from "@radix-ui/react-avatar";
import { useRef, useState } from "react";
import AsciiEffectScene from "./ascii";

const headerLeft = {
	hidden: { y: "-100%", opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const headerRight = {
	hidden: { x: "100%", opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

const Hero = (): JSX.Element => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<OpacityAnim variants={headerLeft}>
			<section className='mx-auto max-w-[560px] flex flex-col items-center justify-center gap-8 mt-6 md:mt-12 px-[30px] md:px-[0px]'>
				<Avatar.Root className='inline-flex h-[140px] w-[140px] select-none items-center justify-center overflow-hidden rounded-full align-middle border-gray-300 border-4 shadow-md'>
					<Avatar.Image
						src='https://avatars.githubusercontent.com/u/82826676?s=400&u=4e8fbe6c1b74dec73a6f35d7f055fc931f42cbb4&v=4'
						alt='@alessiolagreca'
					/>
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>

				<div className='mx-auto flex flex-col gap-4 max-w-[560px] mt-6 items-start justify-start'>
					<span className='font-semibold text-2xl'>
						Hi, I'm Alessio Lagreca
						<br />
					</span>
					<span className='md:text-base sm:text-sm max-w-xl'>
						a web developer passionate about Front-End Development, Emergin Technologies and everything
						programming-related. Constantly learnign new stuff. Here i will upload my projects and my experiences.
					</span>
					{/* <Button variant='greenSoft' size='mio' className='text-xl'>
							<Link href='/about'>About Me</Link>
						</Button> */}
				</div>
				{/* ASCII THREE.JS */}
				<div
					ref={containerRef}
					className=' border-[1px] border-gray-300 shadow-md rounded-xl w-[300px] md:w-[560px] h-[200px] text-black bg-[#f5f5f5] '
				>
					{/* <AsciiArtComponent /> */}
					<AsciiEffectScene container={containerRef} />
				</div>
			</section>
		</OpacityAnim>
	);
};

export default Hero;
