"use client"
import logo from "@/assets/logo.png";
import { Button, Navbar } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const navbarCustom: CustomFlowbiteTheme["navbar"] = {
    link: {
        active: {
            on: "bg-green-700 text-white dark:text-white md:bg-transparent md:text-green-600",
            off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
        }
    }
};


export default function HeaderPartial() {
    return (
        <header>
            <Navbar rounded theme={navbarCustom}>
                <Navbar.Brand href="/">
                    <img src={logo.src} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button color="success">Contact me</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>Resume</Navbar.Link>
                    <Navbar.Link href="#">Projects</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
