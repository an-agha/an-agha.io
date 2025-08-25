"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { X } from "lucide-react"
import { motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation"
import * as React from "react"

interface NavItem {
    href: string
    label: string
    external?: boolean
}

interface MobileMenuProps {
    className?: string
    navItems?: NavItem[]
    logo?: React.ReactNode
    footer?: React.ReactNode
    onItemClick?: (item: NavItem) => void
}


const defaultNavItems: NavItem[] = [
  {
    label: "Modules",
    href: "/#modules"
  },
  {
    label: "Technology",
    href: "/#technology"
  }, 
  {
    label: "Benefits",
    href: "/#benefits"
  },
  {
    label: "Metrics",
    href: "/#metrics"
  },
  {
    label: "Vision",
    href: "/#vision"
  },
];

export function MobileMenu({ className, navItems = defaultNavItems, logo, onItemClick }: MobileMenuProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const menuRef = React.useRef<HTMLDivElement>(null)
    const closeButtonRef = React.useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const router = useRouter();


    const openMenu = React.useCallback(() => {
        setIsOpen(true)
        setIsAnimating(true)
        // Focus the close button when menu opens
        setTimeout(() => {
            closeButtonRef.current?.focus()
        }, 100)
    }, [])

    const closeMenu = React.useCallback(() => {
        setIsAnimating(false)
        setTimeout(() => {
            setIsOpen(false)
        }, 300) // Match animation duration
    }, [])

    const handleLinkClick = React.useCallback(
        (item: NavItem) => {
            onItemClick?.(item)
            closeMenu()
        },
        [onItemClick, closeMenu],
    )

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                closeMenu()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, closeMenu])

    // Focus trap
    React.useEffect(() => {
        if (!isOpen) return

        const focusableElements = menuRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )

        if (!focusableElements?.length) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus()
                    e.preventDefault()
                }
            }
        }

        document.addEventListener("keydown", handleTabKey)
        return () => document.removeEventListener("keydown", handleTabKey)
    }, [isOpen]);

    const handleBookConsultation = () => {
        router.push("/book-consultation");
    };

    return (
        <>
            {/* Menu Toggle Button - Only visible on mobile/tablet */}
            <div className={cn("lg:hidden", className)}>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={openMenu}
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    className="relative z-50  hover:bg-accent"
                >
                    <Icon icon="line-md:menu" className="size-6   text-primary sm:text-primary md:text-white" />
                </Button>
            </div>

            {/* Fullscreen Menu Overlay */}
            {isOpen && (
                <div
                    ref={menuRef}
                    className={cn(
                        "lg:hidden fixed inset-0 z-50",
                        "bg-gradient-to-br from-background via-background/95 to-muted/50",
                        "backdrop-blur-xl",
                        "transition-all duration-300 ease-out",
                        isAnimating ? "opacity-100" : "opacity-0",
                    )}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >

                    {/* Header with logo and close button */}
                    <div className="relative flex items-center justify-between p-6 border-b border-border/50 backdrop-blur-sm">
                        <div className="flex items-center space-x-3">
                            {logo || (
                                <>
                                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                        <span className="text-primary-foreground font-bold text-sm">M</span>
                                    </div>
                                    <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                        Menu
                                    </span>
                                </>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <Button className='self-center z-10 px-6 py-2 rounded-full text-white font-medium shadow-lg
                                    bg-gradient-to-r from-secondary to-primary
                                    hover:from-secondary-hover hover:to-primary-hover
                                    transition-all duration-300'
                                onClick={handleBookConsultation} >
                                Contact
                            </Button>
                            <Button
                                ref={closeButtonRef}
                                variant="ghost"
                                size="icon"
                                onClick={closeMenu}
                                aria-label="Close navigation menu"
                                className="hover:bg-accent hover:rotate-90 p-6 rounded-full text-white font-medium shadow-lg
                                    bg-gradient-to-r from-secondary to-primary
                                    hover:from-secondary-hover hover:to-primary-hover
                                    transition-all duration-300"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 overflow-y-auto">
                        <div className="p-6 space-y-2">
                            {navItems.map((item, index) => {
                                const isActive = (pathname === item.href);
                                return (
                                    <div
                                        key={item.href}
                                        className={cn(
                                            "transform transition-all duration-300 ease-out",
                                            isAnimating ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                                        )}
                                        style={{
                                            transitionDelay: isAnimating ? `${index * 50}ms` : "0ms",
                                        }}
                                    >
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => handleLinkClick(item)}
                                                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-accent/50 active:bg-accent transition-all duration-200 text-lg group border border-transparent hover:border-border/20"
                                            >
                                                <span className="font-medium">{item.label}</span>
                                            </a>
                                        ) : (
                                            <a
                                                href={item.href}
                                                onClick={() => handleLinkClick(item)}
                                                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-accent/50 active:bg-accent transition-all duration-200 text-lg group border border-transparent hover:border-border/20"
                                            >
                                                <span className="font-medium">{item.label}</span>
                                            </a>
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId="underline"
                                                id="underline"
                                                className="absolute left-0 bottom-0 bg-warning rounded-tl-full rounded-bl-full h-full w-2" />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </nav>

                </div>
            )}

            {/* Backdrop */}
            {isOpen && (
                <div
                    className={cn(
                        "lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm",
                        "transition-opacity duration-300",
                        isAnimating ? "opacity-100" : "opacity-0",
                    )}
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </>
    )
}
