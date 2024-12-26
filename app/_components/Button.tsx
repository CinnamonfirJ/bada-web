import React from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";

interface ButtonProps {
  variant?: "default" | "primary" | "light" | "dark";
  children: React.ReactNode; // Explicitly define the type for children
  icon?: React.ReactNode; // For an optional icon
  to?: string; // Define the type for `to`
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  icon,
  to = "#",
}) => {
  const ButtonStyle = cva(
    [
      "flex",
      "justify-center",
      "items-center",
      "gap-3",
      "text-sm",
      "rounded-full",
      "cursor-pointer",
    ],
    {
      variants: {
        variant: {
          default: ["px-0", "py-0"],
          primary: [
            "bg-primary",
            "text-white",
            "border",
            "border-primary",
            "hover:border-secondary",
            "hover:bg-secondary",
            "hover:text-black",
            "px-4",
            "py-2",
          ],
          light: [
            "bg-transparent",
            "hover:bg-secondary",
            "border",
            "border-foreground",
            "px-4",
            "py-2",
          ],
          dark: [
            "bg-black",
            "text-white",
            "border",
            "border-black",
            "hover:bg-white",
            "hover:text-black",
            "px-6",
            "py-2",
          ],
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  const variantClass = ButtonStyle({ variant });

  return (
    <Link href={to}>
      <div className={`${variantClass}`}>
        {icon && <div>{icon}</div>}
        <span className='flex items-center gap-3 text-nowrap'>{children}</span>
      </div>
    </Link>
  );
};

export default Button;
