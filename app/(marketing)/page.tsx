import { ModeToggle } from "@/components/themetoggle";
import Image from "next/image";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    name: "Project A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, placeat.",
  },
  {
    name: "Project B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, placeat.",
  },
  {
    name: "Project C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, placeat.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="shadow-2xl w-full fixed top-0 z-40 bg-primary/50 backdrop-blur h-16">
        <Navbar />
      </header>
      <main className="flex flex-col items-center">
        <section className="place-items-center ">
          <div className="h-screen flex flex-col justify-center gap-4">
            <h1 className="text-md md:text-2xl">
              Hello, <span className="text-primary">my name is</span>
              <ModeToggle />
            </h1>
            <h1 className="text-6xl font-bold md:text-9xl">
              <span className="text-primary">Jeremy</span> Earl
            </h1>

            <p className="text-sm mt-8 font-serif md:text-lg max-w-md">
              Hi there! I&apos;m an aspiring UX and UI designer with a knack for
              front-end development, coupled with a strong interest in back-end
              technologies.
            </p>
          </div>
        </section>
        <section className="h-screen max-w-6xl flex flex-row my-14">
          <div className="h-screen flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl my-8">01. About Me</h1>
            <p className="max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              corporis vel esse <br /> sapiente nihil saepe facere repellendus
              alias? Quibusdam, eum reiciendis. Aliquam quidem explicabo
              excepturi doloribus blanditiis, porro rem. Harum!
            </p>
            <p className="">
              This is my Website Portfolio for website development
            </p>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              corporis vel esse <br /> sapiente nihil saepe facere repellendus
              alias? Quibusdam, eum reiciendis. Aliquam quidem explicabo
              excepturi doloribus blanditiis, porro rem. Harum!
            </p>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              corporis vel esse <br /> sapiente nihil saepe facere repellendus
              alias? Quibusdam, eum reiciendis. Aliquam quidem explicabo
              excepturi doloribus blanditiis, porro rem. Harum!
            </p>
          </div>
          <div className="hidden mx-auto max-w-3xl h-screen md:block  ">
            <Image
              className="h-screen"
              src="/myprofile.png"
              width={650}
              height={500}
              alt="my_profile_pic"
            />
          </div>
        </section>
        <section className="h-screen max-w-6xl flex flex-col gap-4 my-14">
          <h1 className="flex text-2xl md:text-4xl my-8 after:content-[''] after:block after:top-5 after:relative after:w-60 after:h-[1px] after:bg-red-500">
            02. Background
          </h1>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="intern">Internships</TabsTrigger>
              <TabsTrigger value="educ">Educational Background</TabsTrigger>
            </TabsList>
            <TabsContent value="intern">
              <Card>
                <CardHeader>
                  <CardTitle>Philippine Postal Corporation</CardTitle>
                  <CardDescription>Tala Post Office Intern</CardDescription>
                  <ul className="list-disc">
                    <li>Data encoding</li>
                    <li>Sorting and filing documents</li>
                  </ul>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="educ">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="intern">Internships</TabsTrigger>
              <TabsTrigger value="educ">Educational Background</TabsTrigger>
            </TabsList>
            <TabsContent value="intern">
              <Card>
                <CardHeader>
                  <CardTitle>▹Philippine Postal Corporation</CardTitle>
                  <CardDescription>Tala Post Office Intern</CardDescription>
                  <ul className="list-disc">
                    <li>Data encoding</li>
                    <li>Sorting and filing documents</li>
                  </ul>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="educ">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        <section className="h-screen max-w-6xl flex flex-col gap-4 my-14">
          <h1 className="text-2xl md:text-4xl my-8">03. Projects</h1>
          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              name={item.name}
              description={item.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
