import { IChildren } from "../../interfaces/IChildren";
import { MenuPublic } from "@/components/public/MenuPublic";
import { ILink } from "../../interfaces/ILinks";

export default function PublicLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'HomePage', href: '/public'},
    { name: 'Libros', href: '/public/libros'},
    { name: 'Categorias', href: '/public/categorias'},
    { name: 'Autores', href: '/public/autores'},
    { name: 'Editoriales', href: '/public/editoriales'},
  ]

  return (
    <>
      <main>
        <MenuPublic links={links}/>
        { children }
      </main>
    </>
  );
}