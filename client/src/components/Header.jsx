import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
function Header() {
  return (
    <div className="bg-background flex border-b border-border shadow justify-between items-center fixed  top-0 z-40 w-full px-6 lg:px-15 ">
      <div className="flex pb-[0.9px]  justify-center items-center">
        <Link to="/">
          <div
            className=" w-24 h-16 bg-foreground ring-2 
               [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]
               [-webkit-mask-image:url('/logo.png')] "
            aria-label="logo-debug"
          ></div>
        </Link>
      </div>
      <div className="flex gap-2  md:hidden">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-10 p-0">
              <img
                width="24"
                height="5"
                src="https://img.icons8.com/ios-glyphs/90/menu-2.png"
                alt="menu--v1"
                className="dark:invert dark"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-fit mx-8" align="start">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Products</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link to="/audio">
                    <DropdownMenuItem>Audio System</DropdownMenuItem>
                  </Link>
                  <Link to="/securityCameras">
                    <DropdownMenuItem>Security Camera</DropdownMenuItem>
                  </Link>
                  <Link to="/desktop">
                    <DropdownMenuItem>Desktop</DropdownMenuItem>
                  </Link>
                  <Link to="/laptop">
                    <DropdownMenuItem>Laptop</DropdownMenuItem>
                  </Link>
                  <Link to="/monitor">
                    <DropdownMenuItem>Monitor</DropdownMenuItem>
                  </Link>
                  <Link to="/tv">
                    <DropdownMenuItem>LCD/LED TV</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <Link to="/requestService">
              <DropdownMenuItem>Request Service</DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link to="/aboutUs">
                    <DropdownMenuItem>About Us</DropdownMenuItem>
                  </Link>
                  <Link to="/privacyPolicy">
                    <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <Link to="/contact">
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden md:flex \ h-17 justify-center items-center gap-x-4 ">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="font-medium">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-underline text-[16px] text-foreground hover:text-primary data-[state=open]:text-primary bg-transparent hover:bg-transparent focus:bg-transparent h-17">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px]  gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/audio">Audio</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/securityCameras">CCTV</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/desktop">Desktop</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/laptop">Laptop</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/monitor">Monitor</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/tv">LCD / LED TV</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="nav-underline text-[16px] text-foreground hover:text-primary bg-transparent hover:bg-transparent h-17 flex justify-center items-center"
              >
                <Link to="/requestService">Request Service</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-underline text-[16px] text-foreground hover:text-primary data-[state=open]:text-primary bg-background h-17">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[150px] gap-4 ">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/aboutUs">About Us</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/privacyPolicy">Privacy Policy</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="nav-underline text-[16px] text-foreground hover:text-primary bg-transparent hover:bg-transparent h-17 flex justify-center items-center "
              >
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
