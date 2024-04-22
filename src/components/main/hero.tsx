import Container from "../wrappers/container";
import OpacityAnim from "../wrappers/opacityAnim";
import { Button } from "../ui/button";
import * as Avatar from "@radix-ui/react-avatar";

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
	return (
		<Container>
			<OpacityAnim variants={headerLeft}>
				<section className='flex flex-col items-center justify-center gap-12 md:mt-24'>
					<Avatar.Root className='inline-flex h-[200px] w-[200px] select-none items-center justify-center overflow-hidden rounded-full align-middle border-gray-300 border-4'>
						<Avatar.Image
							src='https://avatars.githubusercontent.com/u/82826676?s=400&u=4e8fbe6c1b74dec73a6f35d7f055fc931f42cbb4&v=4'
							alt='@alessiolagreca'
						/>
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>

					<div className='text-center'>
						<h1 className='text-xl font-bold leading-10 tracking-tight sm:text-5xl md:text-4xl md:leading-none max-w-3xl'>
							I'm Alessio, a Front-End Developer passionate about web development and clean design.
						</h1>
						<p className='mt-6 text-base leading-7'>Currently working on Upwork as a Freelancer</p>
					</div>
				</section>
			</OpacityAnim>
		</Container>
	);
};

export default Hero;
