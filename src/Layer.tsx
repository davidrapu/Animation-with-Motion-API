import { cn } from "./lib/util";

export default function Layer({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={cn("bg-[#C8AAAA] w-full py-10 rounded-xl text-[#574964] flex justify-center text-2xl font-semibold", className)}>
      {children}
    </div>
  );
}
