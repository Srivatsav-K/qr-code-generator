import { PropsWithChildren } from "react";

export function MutedText({ children }: PropsWithChildren) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
