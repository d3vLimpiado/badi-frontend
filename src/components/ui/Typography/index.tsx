import { cn } from "@/lib/utils";
import { HTMLProps, PropsWithChildren } from "react";

export function H1({ children, className }: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
}

export function H2({ children, className }: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) {
  return <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>
}

export function H3({ children, className }: PropsWithChildren<HTMLProps<HTMLHeadingElement>>) {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>
}

export function Paragraph({ children, className }: PropsWithChildren<HTMLProps<HTMLParagraphElement>>) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>
  )
}


export function Blockquote({ children, className }: PropsWithChildren<HTMLProps<HTMLQuoteElement>>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  )
}


export default {
  H1,
  H2,
  H3,
  Paragraph,
  Blockquote
}