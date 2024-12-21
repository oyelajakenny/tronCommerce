import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import React from "react";
import Link from "next/link";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Github",
    href: "https://www.github.com",
    Icon: <Github className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.LinkedIn.com",
    Icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.Facebook.com",
    Icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.Slack.com",
    Icon: <Slack className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    Icon: <Youtube className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center  gap-3.5", className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-white hoverEffect",
                  iconClassName
                )}
              >
                {item.Icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default SocialMedia;
