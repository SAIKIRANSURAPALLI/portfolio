"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import PythonIcon from "@/assets/icons/python.svg";
import AwsIcon from "@/assets/icons/aws.svg";
import JenkinsIcon from "@/assets/icons/jenkins.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import KubernetesIcon from "@/assets/icons/kubernetes.svg";
import TerraformIcon from "@/assets/icons/terraform.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import ViteIcon from "@/assets/icons/vitejs.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import BlockchainIcon from "@/assets/icons/blockchain.svg";
import SolidityIcon from "@/assets/icons/solidity.svg";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/reactjs.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  { title: "AWS", iconType: AwsIcon },
  { title: "Jenkins", iconType: JenkinsIcon },
  { title: "Docker", iconType: DockerIcon },
  { title: "Kubernetes", iconType: KubernetesIcon },
  { title: "Terraform", iconType: TerraformIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "Java", iconType: JavaIcon },
  { title: "Next.Js", iconType: NextIcon },
  { title: "Vite.Js", iconType: ViteIcon },
  { title: "SQL", iconType: SqlIcon },
  { title: "Django", iconType: DjangoIcon },
  { title: "React", iconType: ReactIcon },
  { title: "BlockChain", iconType: BlockchainIcon },
  { title: "Solidity", iconType: SolidityIcon },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    top: "5%",
    left: "50%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "40%",
    left: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "10%",
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "40%",
    left: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    top: "65%",
    left: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    top: "70%",
    left: "45%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Exploring the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
