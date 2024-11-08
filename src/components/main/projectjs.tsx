import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import OpacityAnim from "../wrappers/opacityAnim";
import { fade } from "@/app/helpers/transition";

const Project = (): JSX.Element => {
  return (
    <OpacityAnim variants={fade}>
      <section className="w-full">
        <div className="md:mx-auto mx-[30px] max-w-[560px] mt-12 items-center justify-center">
          <ul>
            <Separator />

            <li className="flex flex-col mt-2">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-orange-300 w-2 h-2"></div>
                <Link
                  className="py-2"
                  href="https://in-regalo.vercel.app/"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="hover:underline hover:text-gray-600"
                    target="_blank"
                  >
                    InRegalo (in progress) ♻️♻️♻️
                  </a>
                </Link>
              </div>
              <span className="pl-4 py-2 text-gray-500">
                InRegalo is a platform that allows users to donate items they no
                longer need. It is a project that aims to help people reduce
                waste and promote sustainability.
              </span>
            </li>
            <Separator />

            <li className="flex flex-col mt-2">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-orange-300 w-2 h-2"></div>
                <Link
                  className="py-2"
                  href="https://password-manager-tan-phi.vercel.app/"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="hover:underline hover:text-gray-600"
                    target="_blank"
                  >
                    Password Manager 🗝️🗝️🗝️ (temporaly unavailable)
                  </a>
                </Link>
              </div>
              <span className="pl-4 py-2 text-gray-500">
                Password Manager i've build using Next.js, Tailwind CSS, Crypto
                Node module for encryption and Postgres as database
              </span>
            </li>
            <Separator />

            <li className="flex flex-col mt-2">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-orange-300 w-2 h-2"></div>
                <Link
                  className="py-2 hover:underline hover:text-gray-600"
                  href="https://landing-page-shadcn-clerk.vercel.app/"
                  passHref
                  legacyBehavior
                >
                  <a
                    className="hover:underline hover:text-gray-600"
                    target="_blank"
                  >
                    Landing Page (FrontEnd-Mentor) 🚀🚀🚀
                  </a>
                </Link>
              </div>
              <span className="pl-4 py-2 text-gray-500">
                Project by frontendmentor.io i've built using using Next.js,
                Tailwind CSS, TypeScript and Clerk for Authentication. For the
                animations i've used Framer Motion, Lenis Scroll and GSAP.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </OpacityAnim>
  );
};

export default Project;
