"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export const Button = ({
  children,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
