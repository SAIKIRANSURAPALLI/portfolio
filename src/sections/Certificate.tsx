"use client";
import certImage1 from "@/assets/images/memoji-avatar-1.png";
import certImage2 from "@/assets/images/memoji-avatar-2.png";
import certImage3 from "@/assets/images/memoji-avatar-3.png";
import certImage4 from "@/assets/images/memoji-avatar-4.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const certifications = [
  {
    title: "Certified Full Stack Web Developer",
    issuer: "Social Prachar",
    description:
      "This certification validates my comprehensive skills in full-stack web development, with a focus on Python. It demonstrates my ability to design, develop, and deploy scalable web applications.",
    image: certImage1,
    link: "https://drive.google.com/file/d/1LYGkOLs9MQWP3LMAfDhJuOevM89l3CZg/view?usp=sharing",
  },
  {
    title: "Certified Full Stack Web Developer",
    issuer: "Pentagon Space",
    description:
      "This certification highlights my proficiency in Java as a full-stack web developer. It signifies my expertise in building and maintaining dynamic web applications using Java-based technologies.",
    image: certImage2,
    link: "https://drive.google.com/file/d/129mqpF28URrXvhK7OFzbg4hXGfJwUCXs/view?usp=sharing",
  },
  {
    title: "Certified CCNA",
    issuer: "Cisco Certified Networking Academy",
    description:
      "This certification demonstrates my in-depth knowledge of networking principles and practices.It validates my ability to  performance and security in network environments.",
    image: certImage3,
    link: "https://drive.google.com/file/d/1LYGkOLs9MQWP3LMAfDhJuOevM89l3CZg/view?usp=sharing",
  },
  {
    title: "Certified Automation Testing",
    issuer: "Simplilearn",
    description:
      "This certification validates my expertise in automation testing, showcasing my skills in using automated testing tools and frameworks to enhance software quality and efficiency.",
    image: certImage4,
    link: "https://drive.google.com/file/d/129mqpF28URrXvhK7OFzbg4hXGfJwUCXs/view?usp=sharing",
  },
];

export const CertificationSection = () => {
  return (
    <section className="py-16 lg:py-24" id="certification">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications"
          title="Achievements"
          description="Here are some of the certifications I’ve earned to demonstrate my skills and expertise."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {certifications.map((certification) => (
                  <Card
                    key={certification.title}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={certification.image}
                          alt={certification.title}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-sans font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-md">
                          {certification.title}
                        </div>
                        <div className="font-serif text-sm text-white/40">
                          {certification.issuer}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="font-sans text-base">
                        {certification.description}
                      </p>
                      <a
                        href={certification.link}
                        className="inline-flex items-center gap-2 bg-white text-gray-950 h-12 px-12 rounded-xl font-semibold justify-center mt-6"
                        target="_blank"
                      >
                        <span>View Certification</span>
                      </a>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
