import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className = "" }: HeadingProps) => (
  <h1 className={cn(className)}>{children}</h1>
);

export default Heading;
