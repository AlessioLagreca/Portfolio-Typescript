import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Project = (): JSX.Element => {
	return (
		<div className='w-full'>
			<div className='md:mx-auto mx-[30px] max-w-[560px] mt-12 items-center justify-center'>
				<ul>
					<Separator />

					<li className='flex flex-col'>
						<div className='flex gap-2 items-center'>
							<div className='rounded-full bg-orange-300 w-2 h-2'></div>
							<Link
								className='py-2 hover:underline hover:text-gray-600'
								href='https://password-manager-tan-phi.vercel.app/'
								passHref
								legacyBehavior
							>
								<a target='_blank'>Password Manager 🗝️🗝️🗝️</a>
							</Link>
						</div>
						<span className='pl-4 py-2 text-gray-500'>
							Password Manager i've build using Next.js, Tailwind CSS, Crypto Node module for encryption and Postgres as
							database
						</span>
					</li>
					<Separator />

					<li className='flex flex-col'>
						<div className='flex gap-2 items-center'>
							<div className='rounded-full bg-orange-300 w-2 h-2'></div>
							<Link
								className='py-2 hover:underline hover:text-gray-600'
								href='https://landing-page-shadcn-clerk.vercel.app/'
								passHref
								legacyBehavior
							>
								<a target='_blank'>Landing Page (FrontEnd-Mentor) 🚀🚀🚀</a>
							</Link>
						</div>
						<span className='pl-4 py-2 text-gray-500'>
							Project by frontendmentor.io i've built using using Next.js, Tailwind CSS, TypeScript. For animation i've
							used Framer Motion, Lenis Scroll and GSAP and Clerk for Authentication
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Project;
