import { CopyrightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      text: 'Figma',
      link: 'https://www.figma.com/file/UTOl8oetak4Z1FdCEqC7ji/aleysha---PetShop?type=design&node-id=0%3A1&mode=design&t=G5daU6W3gzDyqqYu-1',
    },
    {
      text: 'Github',
      link: 'https://github.com/iarlen-reis/Aleysha-petshop',
    },
  ]
  return (
    <footer className="w-full px-2 py-4">
      <div className="container mx-auto w-full flex items-center justify-between">
        <ul className="flex flex-col gap-3 font-ruluko md:text-lg">
          {footerLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.link}
                rel="noreferrer"
                target="_blank"
                className="hover:border-b hover:border-b-background-rose transition-all duration-200"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="flex gap-2 items-center font-ruluko md:text-lg">
          <CopyrightIcon size={16} /> 2023 Aleysha Petshop
        </p>
      </div>
    </footer>
  )
}

export default Footer
