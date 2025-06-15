"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  // Style variants
  const variantStyles = {
    primary: "bg-heritage text-white hover:bg-heritage/90",
    secondary: "bg-gold text-white hover:bg-gold/90",
    outline: "border border-heritage text-heritage hover:bg-heritage/10",
  };

  // Size variants
  const sizeStyles = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-8 text-lg",
  };

  const baseStyles = "inline-flex items-center justify-center rounded-none font-medium transition-colors duration-300 focus:outline-none";
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Animation variants
  const buttonAnimation = {
    tap: { scale: 0.98 },
  };

  // Render as link if href is provided
  if (href) {
    return (
      <motion.div whileTap={buttonAnimation.tap}>
        <Link href={href} className={buttonStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Render as button otherwise
  return (
    <motion.button
      className={buttonStyles}
      onClick={onClick}
      whileTap={buttonAnimation.tap}
    >
      {children}
    </motion.button>
  );
} 