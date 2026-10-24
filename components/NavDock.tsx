"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconHome,
  IconUser,
  IconFolder,
  IconMessage,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBook,
} from "@tabler/icons-react";

const iconClass = "h-full w-full text-neutral-300";

const links = [
  { title: "Home", icon: <IconHome className={iconClass} />, href: "#" },
  { title: "About", icon: <IconUser className={iconClass} />, href: "#about" },
  {
    title: "Projects",
    icon: <IconFolder className={iconClass} />,
    href: "#projects",
  },
  {
    title: "Publications",
    icon: <IconBook className={iconClass} />,
    href: "#publications",
  },
  {
    title: "Technologies",
    icon: <IconMail className={iconClass} />,
    href: "#techStack",
  },
  {
    title: "Contact",
    icon: <IconMail className={iconClass} />,
    href: "#contact",
  },
  // {
  //   title: "GitHub",
  //   icon: <IconBrandGithub className={iconClass} />,
  //   href: "https://github.com/kevnrnldi",
  // },
  // {
  //   title: "LinkedIn",
  //   icon: <IconBrandLinkedin className={iconClass} />,
  //   href: "https://linkedin.com/in/mkevinrinaldi",
  // },
];

const NavDock = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(current >= 0.02);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center " +
          (className ?? "")
        }
      >
        <FloatingDock items={links} />
      </motion.div>
    </AnimatePresence>
  );
};

export default NavDock;
