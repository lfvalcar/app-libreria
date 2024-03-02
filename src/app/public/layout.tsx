import { IChildren } from "../interfaces/IChildren";
import { Menu } from "@/app/components/commons/Menu";
import { ILink } from "../interfaces/ILinks";
import HeaderPublic from "../components/public/HeaderPublic";
import FooterPublic from "../components/public/FooterPublic";

export default function PublicLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'Libros', href: '/public/libros' },
    { name: 'Generos', href: '/public/generos' },
    { name: 'Editoriales', href: '/public/editoriales' },
    { name: 'Nuestras Tiendas', href: '/public/tiendas' }
  ]

  return (
    <>
      <HeaderPublic/>
      <Menu links = {links}/>
      <main>
        { children }
      </main>
      <FooterPublic />
    </>
  );
}