import * as React from "react";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const baseClasses = [
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer",
  "rounded-md font-medium",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-border bg-transparent text-foreground hover:bg-muted",
  secondary: "bg-primary/10 text-primary hover:bg-primary/20",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  link: "bg-transparent text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3",
  sm: "px-4 text-sm py-2",
  lg: "px-8 text-lg py-4",
  icon: "h-9 w-9 p-1",
};

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      type = "button",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    if (asChild && React.isValidElement(children)) {
      // Clone the single child and merge our classes/props
      const child = children as React.ReactElement<any>;
      const childProps: Record<string, any> = { ...props };
      // Avoid passing a type attribute to non-button elements
      delete (childProps as any).type;

      return React.cloneElement(child, {
        className: cn(child.props.className, classes),
        ref: ref as unknown as React.Ref<any>,
        ...childProps,
      });
    }

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
