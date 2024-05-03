import React, { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  name: string;
  description: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="hover:scale-105 transition-all space-y-4 border shadow-md p-4 rounded-md mb-4">
      <h4 className="font-bold">{props.name}</h4>
      <p className="text-sm">{props.description}</p>
      <div className="w-full flex justify-end">
        <Button size={"sm"} variant={"outline"}>
          View Project
        </Button>
      </div>
    </div>
  );
};
export default ProjectCard;
