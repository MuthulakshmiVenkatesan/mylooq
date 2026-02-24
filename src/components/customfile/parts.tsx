
import  { type ReactNode, type HTMLAttributes, type InputHTMLAttributes } from "react";
 
interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}
 
export function TitleLg({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <h1 className={`m-[0px] font-[Bold] text-[#000000] text-[28px] ${className}`} {...props}>
      {children}
    </h1>
  );
}
 
export function TitleMd({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <h2 className={`text-3xl font-[Medium] ${className}`} {...props}>
      {children}
    </h2>
  );
}
 
export function TitleSm({
  children,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <h3 className={`text-2xl font-[SemiBold] ${className}`} {...props}>
      {children}
    </h3>
  );
}
 
 
export function Body({ children, className = "", ...props }: TypographyProps) {
  return (
    <p className={`font-[Regular] text-[#000000] text-[14px] m-[0px] ${className}`} {...props}>
      {children}
    </p>
  );
}

export function BodySm({ children, className = "", ...props }: TypographyProps) {
  return (
    <p className={`font-[Regular] text-[#000000] text-[12px] m-[0px] ${className}`} {...props}>
      {children}
    </p>
  );
}

 

export function Input({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`text-base font-[Regular] ${className}`} {...props} />
  );
}