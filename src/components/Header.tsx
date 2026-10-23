"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-primary relative flex justify-evenly items-center font-oswald text-shadow-lg w-full">
      <Image src="/images/logo.ico" alt="Logo" width={80} height={80}></Image>
      <nav className="hidden md:flex gap-4 text-secondary font-bold">
        <a href="#information">INFORMAÇÕES</a>
        <a href="#contact">CONTATOS</a>
        <a href="#hourly">HORÁRIOS</a>
      </nav>

      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="absolute top-full left-0 z-50 flex w-full flex-col bg-primary px-6 py-5 shadow-md gap-4"
        >
          <li>
            <a href="#information">INFORMAÇÕES</a>
          </li>
          <li>
            <a href="#contact">CONTATOS</a>
          </li>
          <li>
            <a href="#hourly">HORÁRIOS</a>
          </li>
        </ul>
      )}
    </header>
  );
};
