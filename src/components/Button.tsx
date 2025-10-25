import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";

  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  ["text-xs tracking-wildest uppercase font-bold h-10 px-6 rounded-lg "],
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary:
          "bg-gray-100 text-gray-950 hover:bg-gray-200 hover:text-gray-900",
        tertiary:
          "bg-white text-gray-800 hover:bg-gray-200 hover:text-gray-900",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  },
);

export const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button
      className={classes({ ...otherProps, className })}
      style={{ borderRadius: "50px" }}
      type={otherProps.type || "button"}
    >
      {children}
    </button>
  );
};
