import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IChildren } from "../interfaces/IChildren";
import HeaderAuth from "../components/auth/HeaderAuth";
import Footer from "../components/commons/Footer";
import { ILink } from "../interfaces/ILinks";
import MenuPublic from "../components/public/MenuPublic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'Libros', href: '/public/libros'},
    { name: 'Generos', href: '/public/generos'},
    { name: 'Editoriales', href: '/public/editoriales'}
  ]
  return (
    <>
      <HeaderAuth/>
      <MenuPublic links={links}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}