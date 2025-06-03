import { ReactNode } from 'react';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

function AnimatedGroup({
  children,
  className,
  as: Component = 'div',
  asChild: ChildComponent = 'div',
}: AnimatedGroupProps) {
  return (
    <Component className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
          <ChildComponent key={index}>{child}</ChildComponent>
        ))
        : <ChildComponent>{children}</ChildComponent>
      }
    </Component>
  );
}

export { AnimatedGroup };
