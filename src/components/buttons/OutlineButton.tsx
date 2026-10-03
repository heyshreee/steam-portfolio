import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const OutlineButton: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        `relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] 
        border-white px-4 py-2 font-medium text-sm
        text-white transition-all duration-300
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-white
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:text-zinc-950
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95 cursor-pointer select-none`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const PrimaryButton: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        `relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] 
        px-4 py-2 font-medium text-sm transition-all duration-300
        
        before:absolute before:inset-0 before:-z-10 
        before:translate-x-[150%] before:translate-y-[150%] 
        before:scale-[2.5] before:rounded-[100%] 
        before:transition-transform before:duration-1000 
        before:content-[""] 
        
        hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
        active:scale-95 cursor-pointer select-none
        before:bg-indigo-700 hover:text-white hover:border-indigo-700 
        bg-indigo-500 text-zinc-100 border-indigo-500 shadow-lg shadow-indigo-500/20`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
