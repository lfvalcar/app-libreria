import { IChildren } from "../interfaces/IChildren";
import { MenuPublic } from "@/app/components/public/MenuPublic";
import { ILink } from "../interfaces/ILinks";
import HeaderPublic from "../components/public/HeaderPublic";
import Footer from "../components/commons/Footer";

export default function PublicLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'HomePage', href: '/public', svg: ''},
    { name: 'Libros', href: '/public/libros', svg: ''},
    { name: 'Generos', href: '/public/generos', svg: ''},
    { name: 'Editoriales', href: '/public/editoriales', svg: ''}
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