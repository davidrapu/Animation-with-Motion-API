import React from "react";
import { cn } from "./lib/util";

type LayerProps = React.ComponentPropsWithoutRef<"div">;

const Layer = React.forwardRef<HTMLDivElement, LayerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "container bg-[#C8AAAA] w-full py-10 rounded-xl text-[#574964] flex justify-center text-xl font-semibold",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Layer.displayName = "Layer";
export default Layer;
