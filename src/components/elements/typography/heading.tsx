import { cn } from "@/lib/utils";

type TypographyProps = {
  className?: string;
  children: React.ReactNode;
};

export const H1 = ({ className, children }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};
