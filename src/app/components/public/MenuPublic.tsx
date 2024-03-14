'use client'
import { FC} from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AcmeLogo } from '@/app/components/commons/Icons/AcmeLogo'
import { ILink } from '@/app/interfaces/ILinks'
import { Button } from '@nextui-org/react'
import InputDefault from '@/app/components/commons/InputDefault'
import Link from 'next/link'

interface Props {
  links: ILink[]
}

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MenuPublic:FC<Props> = ({links}) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <AcmeLogo/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {links.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          // 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                          // 'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <InputDefault/>
                <Link href={'/auth/login'}>
                <Button color="primary" href="/auth/login" variant="flat" className="hidden md:flex">
                  Sign In
                </Button>
                </Link>
                <Link href={'/auth/register'}>
                <Button color="primary" href="/auth/register" variant="flat" className="hidden md:flex">
                  Sign Up
                </Button>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button
                  key='login'
                  as="a"
                  href='/auth/login'
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  Sign In
                </Disclosure.Button>
                <Disclosure.Button
                  key='register'
                  as="a"
                  href='/auth/register'
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  Sign Up
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default MenuPublic