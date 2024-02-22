import { IChildren } from "../interfaces/IChildren";
import { Menu } from "@/app/components/commons/Menu";
import { ILink } from "../interfaces/ILinks";

export default function PublicLayout({ children }: IChildren,) {
  const links:ILink[] = [
    { name: 'Libros', href: '/public/libros' },
    { name: 'Generos', href: '/public/generos' },
    { name: 'Editoriales', href: '/public/editoriales' },
    { name: 'Nuestras Tiendas', href: '/public/tiendas' }
  ]

  return (
    <>
      <header>
        <Menu links = {links}/>
      </header>
      <main>
        { children }
      </main>
    </>
  );
}