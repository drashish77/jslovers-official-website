import Image from "next/image";
import React, { FC, HTMLAttributes, ReactNode, MouseEvent } from "react";

interface buttonProps {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  bgTransparent?: Boolean;
  style?: React.CSSProperties;
  onMouseEnter?: MouseEvent<HTMLButtonElement> | undefined;
  onMouseLeave?: MouseEvent<HTMLButtonElement> | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}

const CustomButton: FC<buttonProps> = ({
  children,
  onClick,
  className,
  bgTransparent,
  style,
  onMouseEnter,
  onMouseLeave,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        !className
          ? "  button-shadow group flex items-center justify-center rounded-[10px]  px-4 py-3 font-semibold transition-all duration-[400ms] border-[3px]  bg-sky hover:drop-shadow-lg md:px-5 hover:md:-translate-y-1"
          : ` button-shadow group flex items-center justify-center rounded-[10px]  px-4 py-3 font-semibold transition-all duration-[400ms] border-[3px]  bg-sky hover:drop-shadow-lg md:px-5 hover:md:-translate-y-1 ${className}`
      }
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
      <Image
        src="/rightArrow.svg"
        width={16}
        height={16}
        alt="right arrow"
        className="object-contain ml-5"
      />
    </button>
  );
};

export default CustomButton;
