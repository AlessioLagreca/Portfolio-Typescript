import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Project = (): JSX.Element => {
	return (
		<div className='w-full'>
			<div className='md:mx-auto mx-[30px] max-w-[560px] mt-12 items-center justify-center'>
				<ul>
					<Separator />

					<li className='flex gap-2 items-center'>
						<div className='rounded-full bg-orange-300 w-2 h-2'></div>
						<Link
							className='py-2 hover:underline hover:text-gray-600'
							href='https://password-manager-tan-phi.vercel.app/'
						>
							Password Manager 🗝️🗝️🗝️
						</Link>
					</li>
					<Separator />

					<li className='flex gap-2 items-center'>
						<div className='rounded-full bg-orange-300 w-2 h-2'></div>
						<span className='py-2'>Really cool beautiful Project</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Project;
