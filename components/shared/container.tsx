import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function Container({
  children,
  className,
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "container mx-auto px-4 md:px-6",
        className
      )}
    >
      {children}
    </Component>
  );
}