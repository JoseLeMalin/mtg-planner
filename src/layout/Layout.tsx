import type { ComponentPropsWithoutRef } from "react";

export const Layout = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} className={props.className} />;
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...props}
      // className={cn(
      //   "flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]",
      //   props.className,
      // )}
    />
  );
};

export const LayoutTitle = (props: ComponentPropsWithoutRef<"h1">) => {
  //  return <Typography {...props} variant="h2" className={cn(props.className)} />;
};

export const LayoutDescription = (props: ComponentPropsWithoutRef<"p">) => {
  // return <Typography {...props} className={cn(props.className)} />;
};

export const LayoutActions = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} />;
};

export const LayoutContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} />;
};
