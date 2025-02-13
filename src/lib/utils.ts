import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateMailToLink(emailAddress?: string) {
  const email = "udaykumardhokia@gmail.com";
  const subject = encodeURIComponent("Collaboration Inquiry");
  const body = encodeURIComponent(
    `Hello Udaykumar,\n\nI came across your portfolio and I am interested in collaborating with you. Let's discuss potential opportunities!\n\nBest Regards,\n[Your Name]\n${emailAddress??""}`
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}
