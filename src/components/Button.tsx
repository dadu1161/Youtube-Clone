import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
 
export const buttonStyles=cva(["transition-colors", "font-medium"], {
    variants:{
        variant:{
            default:["bg-secondary", "hover:bg-secondary-hover", "text-gray-700"],
            ghost:["hover:bg-gray-200", "text-gray-700"],
            dark:["bg-gray-800", "hover:bg-gray-700", "text-white"],
            primary:["bg-blue-600", "hover:bg-blue-700", "text-white"],
            success:["bg-green-600", "hover:bg-green-700", "text-white"],
            danger:["bg-red-600", "hover:bg-red-700", "text-white"],
            warning:["bg-yellow-500", "hover:bg-yellow-600", "text-white"],
        },
        size:{
            default: ["px-4", "py-2", "text-sm"],
            sm: ["px-3", "py-1", "text-xs"],
            lg: ["px-6", "py-3", "text-base"],
            icon: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ]
        }
    },
    defaultVariants:{
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant ,size, className, ...props}: ButtonProps){
    return <button 
                {...props} 
        className={twMerge(buttonStyles({variant, size}), className)} 
        />
} 
