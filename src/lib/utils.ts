import { clsx, type ClassValue } from "clsx"
import { Montserrat } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

// export const scrollToSection = (id: string) => {
//   if (typeof window === 'undefined') return; // SSR guard

//   const element = document.getElementById(id);
//   if (!element) return;

//   const lenis = (window as any).lenis;

//   if (lenis) {
//     lenis.scrollTo(element, { offset: -80, duration: 1.5 });
//   } else {
//     // Fallback — manual smooth scroll (works everywhere)
//     const top = element.getBoundingClientRect().top + window.scrollY - 80;
//     window.scrollTo({ top, behavior: 'smooth' });
//   }
// };
export const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
};