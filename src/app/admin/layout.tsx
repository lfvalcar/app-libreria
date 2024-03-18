import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IChildren } from "../../interfaces/IChildren";
import { ILink } from "../../interfaces/ILinks";
import AsideAdmin from "../../components/admin/AsideAdmin";

export default function AdminLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'DashBoard', href: '/admin'},
    { name: 'Libros', href: '/admin/libros'},
    { name: 'Categorias', href: '/admin/categorias'},
    { name: 'Autores', href: '/admin/autores'},
    { name: 'Editoriales', href: '/admin/editoriales'},
    { name: 'Usuarios', href: '/admin/usuarios'},
    { name: 'Sign Out', href: '/public'}
  ]
  return (
    <>
      <main>
        <AsideAdmin links={links}/>
        {children}
      </main>
    </>
  );
}