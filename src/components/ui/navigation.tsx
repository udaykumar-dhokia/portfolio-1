"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Applications",
    href: "/portfolio/applications",
    description:
      "A collection of applications I've built, showcasing functionality, performance, and user experience.",
  },
  {
    title: "UI Designs",
    href: "/portfolio/ui-designs",
    description:
      "A curated selection of UI designs that focus on aesthetics, usability, and intuitive interactions.",
  },
  {
    title: "Websites",
    href: "/portfolio/websites",
    description:
      "A portfolio of websites I've designed and developed, featuring responsive layouts and seamless user experiences.",
  },
];

const serviceComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Android Application",
    href: "/portfolio/applications",
    description:
      "Create your own Android application with Flutter and Dart.",
  },
  {
    title: "UI Designs",
    href: "/portfolio/ui-designs",
    description:
      "Create UI designs that focus on aesthetics, usability, and intuitive interactions.",
  },
  {
    title: "Responsive Website",
    href: "/portfolio/websites",
    description:
      "Give your idea a digital presence using a responsive website.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  asChild
                  style={{
                    background:
                      "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcreator%2F&psig=AOvVaw2KKfXc_uikwuyYkGSabXl-&ust=1739342080087000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiKoLKAu4sDFQAAAAAdAAAAABAE)",
                  }}
                >
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/30 to-muted/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      udthedeveloper
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Flutter Developer & Frontend Web Developer
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="About">
                Learn more about me and my work.
              </ListItem>
              <ListItem href="/" title="Contact">
                Get in touch for collaborations or inquiries.
              </ListItem>
              <ListItem href="/" title="Feedback">
                Share your thoughts or suggestions with me.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Workspace</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href="/"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {serviceComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href="/"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Achievements
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
