'use client'
import { headerLinks } from "@/constants"; // Import headerLinks array from a constants file
import Link from "next/link"; // Import Link component from Next.js
import { usePathname } from "next/navigation"; // Import usePathname hook from Next.js

const NavItems = () => {
    const pathname = usePathname(); // Get the current pathname using usePathname hook

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row"> {/* Flexbox container */}
            {headerLinks.map((link) => { // Map over headerLinks array
                const isActive = pathname === link.route; // Determine if the link is active by comparing the pathname with the link's route

                return (
                    <li
                        key={link.route} // Set a unique key for each list item
                        className={`flex-center p-medium-16 whitespace-nowrap ${isActive ? 'text-primary-500' : ''}`} // Add text-primary-500 class if the link is active
                    >
                        <Link href={link.route}>
                            {link.label} {/* Render the link label */}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavItems; // Export the NavItems component