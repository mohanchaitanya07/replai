import { ReplyIcon } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <ReplyIcon className="h-5 w-5 text-primary" />
      <span className="text-xl font-bold tracking-tight">
        <span className="text-foreground">Repl</span>
        <span className="text-primary">ai</span>
      </span>
    </span>
  );
}
