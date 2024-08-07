import { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
}

export function H2({ children }: PropsWithChildren) {
  return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
}

export function H3({ children }: PropsWithChildren) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
}

export function Paragraph({ children }: PropsWithChildren) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  )
}


export function Blockquote({ children }: PropsWithChildren) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
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