"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link 
          href="/" 
          className="group text-xl font-semibold tracking-tight relative"
        >
          <span className="relative z-10">Joshi Karan.K</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm text-foreground/70 md:flex">
          <Link 
            href="/#about" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </Link>
          <div 
            className="relative"
            onMouseLeave={() => setIsExperienceDropdownOpen(false)}
          >
            <div
              className="group transition relative py-2 cursor-pointer"
              onMouseEnter={() => setIsExperienceDropdownOpen(true)}
            >
              <Link 
                href="/#experience" 
                className="flex items-center gap-1"
              >
                <span className="relative z-10">Experience</span>
                <ChevronDown className="w-3 h-3 relative z-10 transition-transform group-hover:rotate-180" />
                <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
              </Link>
            </div>

            {/* Dropdown Menu */}
            {isExperienceDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-1 w-64 bg-background/95 dark:bg-background/98 backdrop-blur-xl border border-border/70 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsExperienceDropdownOpen(true)}
                onMouseLeave={() => setIsExperienceDropdownOpen(false)}
              >
                <Link
                  href="/#experience"
                  className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                  onClick={() => setIsExperienceDropdownOpen(false)}
                >
                  <div className="font-medium">View All Experience</div>
                  <div className="text-xs text-muted-foreground">Scroll to experience section</div>
                </Link>
                <div className="border-t border-border/50 my-1"></div>
                <Link
                  href="/partmatters"
                  className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                  onClick={() => setIsExperienceDropdownOpen(false)}
                >
                  <div className="font-medium">Part Matters</div>
                  <div className="text-xs text-muted-foreground">Full-stack Developer</div>
                </Link>
                <Link
                  href="/locobuzz"
                  className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                  onClick={() => setIsExperienceDropdownOpen(false)}
                >
                  <div className="font-medium">Locobuzz Solutions</div>
                  <div className="text-xs text-muted-foreground">Python Developer Intern</div>
                </Link>
              </div>
            )}
          </div>
          <Link 
            href="/#skills" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Skills</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </Link>
          <Link 
            href="/#projects" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Projects</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </Link>
          <Link 
            href="/#education" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Education</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </Link>
          <Link 
            href="/#contact" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/70 md:hidden">
            <nav className="flex flex-col items-center gap-4 py-6 px-6 text-sm text-foreground/70">
              <Link 
                href="/#about" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#experience" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <div className="w-full border-t border-border/30 my-2"></div>
              <Link
                href="/partmatters"
                className="w-full text-center py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                └ Part Matters
              </Link>
              <Link
                href="/locobuzz"
                className="w-full text-center py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                └ Locobuzz Solutions
              </Link>
              <Link 
                href="/#skills" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="/#projects" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/#education" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                href="/#contact" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
