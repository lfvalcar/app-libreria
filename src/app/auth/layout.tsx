import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IChildren } from "../../interfaces/IChildren";
import { ILink } from "../../interfaces/ILinks";
import MenuPublic from "../../components/public/MenuPublic";

export default function AuthLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'Home', href: '/public'},
    { name: 'Libros', href: '/public/libros'},
    { name: 'Categorias', href: '/public/categorias'},
    { name: 'Autores', href: '/public/autores'},
    { name: 'Editoriales', href: '/public/editoriales'},
  ]
  return (
    <>
      <main>
        <MenuPublic links={links}/>
        {children}
      </main>
    </>
  );
}