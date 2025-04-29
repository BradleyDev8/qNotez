import { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
    return <main className={twMerge('flex flex-row h-screen', className)} {...props}>
        {children}
    </main>
}

export const Sidebar = ({ className, children }: ComponentProps<'aside'>) => {
    return <aside className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-y-auto', className)}>
        {children}
    </aside>
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ children, className }, ref) => {
    return <div ref={ref} className={twMerge('flex-1 overflow-auto', className)}>
        {children}
    </div>
})

Content.displayName = 'Content'


