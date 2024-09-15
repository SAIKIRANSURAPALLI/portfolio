import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { div } from "framer-motion/client";
const footerLinks = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/surapalli-saikiran-0a47051b5",
  },
  {
    title: "Github",
    link: "https://github.com/SAIKIRANSURAPALLI",
  },
  {
    title: "Twitter",
    link: "https://x.com/saikiransura",
  },
  {
    title: "Portfolio",
    link: "https://saikiranportfolio.vercel.app",
  },
];
export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2024 SAIKIRAN. All rights reserved
          </div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((footer) => (
                <div key={footer.title}>
                  <a
                    href={footer.link}
                    className="inline-flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="font-semibold">{footer.title}</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
