"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link 
          href="#" 
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
          <a 
            href="#about" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
          <a 
            href="#experience" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Experience</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
          <a 
            href="#skills" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Skills</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
          <a 
            href="#projects" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Projects</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
          <a 
            href="#education" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Education</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
          <a 
            href="#contact" 
            className="group transition relative py-2"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-primary/10 blur rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            <span className="absolute h-px w-0 bg-primary group-hover:w-full transition-all duration-300 bottom-0 left-0" />
          </a>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/70 md:hidden">
            <nav className="flex flex-col items-center gap-4 py-6 px-6 text-sm text-foreground/70">
              <a 
                href="#about" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#skills" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#education" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
              <a 
                href="#contact" 
                className="w-full text-center py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
