import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    main?: boolean;
    className?: string;
}

export function NavLink({ href, children, main, className }: NavLinkProps) {
    return (
        <Link
            scroll={false}
            href={href}
            className={`
            md:text-base hover:text-white-100 ease-in-out duration-200 
            ${main ? 'text-white-100' : 'text-white-200'} ${className}`}
        >
            {children}
        </Link>
    )
}
