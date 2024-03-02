import React, { FC } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { AcmeLogo } from '../public/AcmeLogo'
import Link from 'next/link';
import { ILink } from '@/app/interfaces/ILinks';

interface Props {
  links: ILink[]
}

export const Menu:FC<Props> = ({links}) => {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ((link) => (
            <NavbarItem key={link.href}>
              <Link color="foreground" href={ link.href}>
                { link.name }
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/auth/login">
            <Button color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/auth/register">
            <Button color="primary" href="#" variant="flat">
              Sign In
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Menu