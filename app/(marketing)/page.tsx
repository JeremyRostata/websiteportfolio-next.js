import { ModeToggle } from "@/components/themetoggle";
import Image from "next/image";
import Navbarside from "@/components/navbutton";
import Navbartop from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-between max-w-auto ">
      <section>
        <div className="flex justify-center sm:hidden">
          <Navbarside />
        </div>
        <div className="hidden sm:flex justify-center">
          <Navbartop />
        </div>
        <div className="relative flex place-items-center">
          <div className="h-screen flex flex-col flex-1 justify-center">
            <h1 className="text-sm md:text-2xl">
              Hello, <span className="text-primary">my name is</span>
            </h1>
            <h1 className="text-4xl font-bold md:text-9xl">
              <span className="text-primary">Jeremy</span> Earl
            </h1>
            <p className="text-sm p-5 md:text-sm max-w-2xl">
              Hi there! I&apos;m an aspiring UX and UI designer with a knack for
              front-end development, coupled with a strong interest in back-end
              technologies.
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen max-w-6xl flex flex-row">
        <div className="h-screen flex flex-col">
          <h1 className="text-[20px]  md:text-2xl">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            corporis vel esse <br /> sapiente nihil saepe facere repellendus
            alias? Quibusdam, eum reiciendis. <br /> Aliquam quidem explicabo
            excepturi doloribus blanditiis, porro rem. Harum!
          </p>
          <p className="p-5 ">
            This is my Website Portfolio for website development
          </p>
        </div>
        <div className=" mx-auto max-w-3xl h-screen ">
          <Image
            className="h-screen"
            src="/myprofile.png"
            width={650}
            height={500}
            alt="my_profile_pic"
          />
        </div>
      </section>
      <section>
        <div className="relative flex place-items-center">
          <div className="h-screen flex flex-col flex-1 items-center justify-center">
            <h1 className="text-[20px] md:text-2xl">
              Hello, <span className="text-primary">my name is</span>
            </h1>
            <h1 className="text-[25px] font-bold md:text-6xl">
              <span className="text-primary">Jeremy</span> Earl
            </h1>
            <p className="p-5 text-center">
              This is my Website Portfolio for website development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
