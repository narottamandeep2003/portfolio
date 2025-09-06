"use client";
import { useState, useEffect } from "react";
import { Home, BookOpen, Code, Mail, Menu, X,Briefcase } from "lucide-react";

const sections = [
    { id: "home", icon: <Home size={22} />, label: "Home" },
    { id: "Experience", icon: <Briefcase size={22} />, label: "Experience" },
    { id: "skills", icon: <Code size={22} />, label: "Skills" },
    { id: "contact", icon: <Mail size={22} />, label: "Contact" },
];

export default function Navbar({ active }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-6 bg-gray-800 p-4 rounded-full shadow-lg">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`p-3 rounded-full transition-colors ${active === section.id
                            ? "bg-gradient-to-tr from-orange-500 to-red-500 text-white"
                            : "text-gray-400 hover:text-orange-400"
                            }`}
                    >
                        {section.icon}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-4 z-50  md:hidden">
                {/* Logo */}
                <div className="font-bold text-lg"><img src="/girlLogo.png" alt="" className=" rounded-full w-10" /></div>

                {/* Hamburger (mobile only) */}
                <div className="md:hidden relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 rounded-md bg-gray-800 text-white"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-gray-900 text-white rounded-lg shadow-lg p-4 space-y-3">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${active === section.id
                                            ? "bg-orange-500 text-white"
                                            : "hover:bg-gray-700"
                                        }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {section.icon}
                                    <span>{section.label}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>


        </>
    );
}
