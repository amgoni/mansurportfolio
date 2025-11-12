import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type SkillCardProps = {
  name: string;
  Icon?: LucideIcon; // prefer lucide icon when available
  className?: string;
};

export function SkillCard({ name, Icon, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "border-border bg-card text-foreground inline-flex w-full min-w-[180px] items-center gap-3 rounded-xl border px-6 py-4",
        className,
      )}
      role="listitem"
    >
      {Icon && <Icon className="text-primary h-5 w-5" aria-hidden />}
      <span className="text-base font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export default SkillCard;
