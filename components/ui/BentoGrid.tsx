"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import { CanvasText } from "@/components/ui/CanvasText";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import dynamic from "next/dynamic";
import { LuDownload } from "react-icons/lu";
import { NoiseBackground } from "./NoiseBackground";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
}) as any;

const canvasColors = ["#22d3ee", "#a78bfa", "#f472b6", "#facc15"];
const noiseColors = [
  "rgb(229, 231, 235)",
  "rgb(161, 161, 170)",
  "rgb(82, 82, 91)",
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const cvUrl = "/CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV-Muhammad-Kevin-Rinaldi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <NoiseBackground
      containerClassName={cn(
        "group relative overflow-hidden rounded-3xl bg-neutral-800 p-1 backdrop-blur-sm",
        className,
      )}
      gradientColors={noiseColors}
    >
      <div className="group/bento relative flex h-full flex-col justify-between space-y-2 overflow-hidden rounded-3xl bg-[#101010] transition duration-200 hover:shadow-xl">
        <div className={cn("h-full", id === 6 && "flex justify-center")}>
          <div className="absolute h-full w-full">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
          {img && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-1/2 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
          )}

          {id === 1 && (
            <div className="pointer-events-none   absolute inset-0 z-[15] flex -translate-x-full flex-col justify-center overflow-y-auto bg-zinc-900/80 p-6 backdrop-blur-[2px] transition-transform duration-700 ease-out mask-[linear-gradient(to_right,black_70%,transparent_100%)] group-hover/bento:pointer-events-auto group-hover/bento:translate-x-0 lg:p-10">
              <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                About Me
              </h3>

              <dl className="space-y-2 text-sm text-zinc-200 lg:text-base">
                <div className="flex pr-16 lg:pr-24 ">
                  <p className="text-justify">
                    I’m Muhammad Kevin Rinaldi, a backend developer based in
                    Jambi, Indonesia, and an Informatics Engineering graduate
                    from the University of Bengkulu. I enjoy building the parts
                    of an application that users rarely see but always depend
                    on, with a focus on reliable, maintainable, and secure
                    systems. Through my projects, I’ve worked with Express,
                    Laravel, and Next.js, backed by MySQL, MongoDB, and
                    PostgreSQL, from information systems and role-based access
                    control to AI-powered features. Beyond backend development,
                    I’m exploring DevOps, mobile development, and AI. I’m open
                    to collaboration and new opportunities.
                  </p>
                </div>
              </dl>
            </div>
          )}

          <div
            className={cn(
              "absolute -bottom-5 right-0",
              id === 5 && "w-full opacity-80",
            )}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="h-full w-full object-cover object-center"
              />
            )}
          </div>

          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center font-bold text-white" /> */}
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "relative flex min-h-40 flex-col p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            )}
          >
            <div className="z-10 font-sans text-sm font-extralight text-white-200 md:text-xs lg:text-base">
              {description}
            </div>
            <div
              className={cn(
                "z-10 max-w-96 font-sans text-lg font-bold text-neutral-300 lg:text-3xl",
                id === 1 && "max-w-xl leading-snug lg:leading-snug",
              )}
            >
              {id === 1 ? (
                <>
                  Hi, I&apos;m{" "}
                  <CanvasText
                    text="Muhammad Kevin Rinaldi"
                    className="text-xl font-bold md:text-2xl lg:text-4xl"
                    backgroundClassName="bg-violet-700"
                    colors={canvasColors}
                    lineGap={6}
                    animationDuration={10}
                  />
                  <br /> a Backend Developer
                </>
              ) : (
                title
              )}
            </div>

            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5 font-extralight">
                <div className="flex flex-col gap-3 lg:gap-3">
                  {["React.js", "Express.js", "Laravel"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#52525b] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#52525b]" />
                </div>

                <div className="flex flex-col gap-3 lg:gap-3">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#52525b]" />
                  {["PostgreSQL", "MongoDB", "Docker"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#52525b] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>

                <MagicButton
                  title={copied ? "CV Downloaded" : "Download my CV"}
                  icon={<LuDownload />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleDownload}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </NoiseBackground>
  );
};
