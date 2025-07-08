"use client";

import * as React from "react";
import { Settings, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export type NavigationItem = "Home" | "Dashboard" | "Approval";
export interface HeaderNavigationProps {
  logoText?: string;
  activeItem?: NavigationItem;
  onNavItemClick?: (item: NavigationItem) => void;
  onSettingsClick?: () => void;
  onAvatarClick?: () => void;
  mpid?: string;
}
export default function HeaderNavigation({
  logoText = "Infinity",
  activeItem = "Home",
  onNavItemClick,
  onSettingsClick,
  onAvatarClick
}: HeaderNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navItems: NavigationItem[] = ["Home", "Dashboard", "Approval"];
  const handleNavClick = (item: NavigationItem) => {
    onNavItemClick?.(item);
    setMobileMenuOpen(false);
  };
  const NavItems = ({
    mobile = false
  }: {
    mobile?: boolean;
  }) => <nav className={cn("flex", mobile ? "flex-col space-y-4" : "hidden md:flex items-center space-x-8")} role="navigation" aria-label="Main navigation" data-magicpath-id="0" data-magicpath-path="HeaderNavigation.tsx">
      {navItems.map(item => <button key={item} onClick={() => handleNavClick(item)} className={cn("relative px-3 py-2 text-sm font-medium transition-all duration-200", "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md", activeItem === item ? "text-primary" : "text-muted-foreground hover:text-foreground", mobile && "text-left justify-start w-full")} aria-current={activeItem === item ? "page" : undefined} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="1" data-magicpath-path="HeaderNavigation.tsx">
          {item}
          {activeItem === item && !mobile && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="2" data-magicpath-path="HeaderNavigation.tsx" />}
        </button>)}
    </nav>;
  return <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-magicpath-id="3" data-magicpath-path="HeaderNavigation.tsx">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-magicpath-id="4" data-magicpath-path="HeaderNavigation.tsx">
        <div className="flex h-16 items-center justify-between" data-magicpath-id="5" data-magicpath-path="HeaderNavigation.tsx">
          {/* Logo Section */}
          <div className="flex-shrink-0" data-magicpath-id="6" data-magicpath-path="HeaderNavigation.tsx">
            <h1 className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200 cursor-pointer" onClick={() => handleNavClick("Home")} data-magicpath-id="7" data-magicpath-path="HeaderNavigation.tsx">
              {logoText}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center" data-magicpath-id="8" data-magicpath-path="HeaderNavigation.tsx">
            <NavItems data-magicpath-id="9" data-magicpath-path="HeaderNavigation.tsx" />
          </div>

          {/* Right Section - Avatar and Settings */}
          <div className="flex items-center space-x-3 sm:space-x-4" data-magicpath-id="10" data-magicpath-path="HeaderNavigation.tsx">
            {/* User Avatar */}
            <Button variant="ghost" size="sm" className="relative h-10 w-10 rounded-full p-0 hover:bg-accent focus:bg-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200" onClick={onAvatarClick} aria-label="User profile" data-magicpath-id="11" data-magicpath-path="HeaderNavigation.tsx">
              <Avatar className="h-8 w-8" data-magicpath-id="12" data-magicpath-path="HeaderNavigation.tsx">
                <AvatarImage src="" alt="User avatar" data-magicpath-id="13" data-magicpath-path="HeaderNavigation.tsx" />
                <AvatarFallback className="bg-muted text-muted-foreground" data-magicpath-id="14" data-magicpath-path="HeaderNavigation.tsx">
                  <User className="h-4 w-4" data-magicpath-id="15" data-magicpath-path="HeaderNavigation.tsx" />
                </AvatarFallback>
              </Avatar>
            </Button>

            {/* Settings Icon */}
            <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0 hover:bg-accent focus:bg-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200" onClick={onSettingsClick} aria-label="Settings" data-magicpath-id="16" data-magicpath-path="HeaderNavigation.tsx">
              <Settings className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors duration-200" data-magicpath-id="17" data-magicpath-path="HeaderNavigation.tsx" />
            </Button>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} data-magicpath-id="18" data-magicpath-path="HeaderNavigation.tsx">
              <SheetTrigger asChild data-magicpath-id="19" data-magicpath-path="HeaderNavigation.tsx">
                <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0 md:hidden hover:bg-accent focus:bg-accent focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200" aria-label="Open menu" data-magicpath-id="20" data-magicpath-path="HeaderNavigation.tsx">
                  <Menu className="h-5 w-5 text-muted-foreground" data-magicpath-id="21" data-magicpath-path="HeaderNavigation.tsx" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]" data-magicpath-id="22" data-magicpath-path="HeaderNavigation.tsx">
                <nav className="flex flex-col space-y-4 mt-6" data-magicpath-id="23" data-magicpath-path="HeaderNavigation.tsx">
                  <NavItems mobile data-magicpath-id="24" data-magicpath-path="HeaderNavigation.tsx" />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
}