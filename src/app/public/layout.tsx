import { IChildren } from "../interfaces/IChildren";
import { MenuPublic } from "@/app/components/public/MenuPublic";
import { ILink } from "../interfaces/ILinks";
import HeaderPublic from "../components/public/HeaderPublic";
import Footer from "../components/commons/Footer";

export default function PublicLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'Libros', href: '/public/libros'},
    { name: 'Generos', href: '/public/generos'},
    { name: 'Editoriales', href: '/public/editoriales'}
  ]

  return (
    <>
      <HeaderPublic/>
      <MenuPublic links={links}/>
      <main>
        { children }
      </main>
      <Footer/>
    </>
  );
}