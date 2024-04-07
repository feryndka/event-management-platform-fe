'use client'

import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement, Hide, Show, Flex, Button } from "@chakra-ui/react"

import Image from "next/image"
import Link from "next/link"

import { menu } from "../../data/menu.js"
import NavbarButton from "./NavbarButton.jsx"

import "./style.css"

export default function Navbar() {
  return (
    <nav className="sticky -top-0.5 w-full shadow-md bg-white z-10">
      <div className="w-[90vw] mx-auto flex justify-between items-center py-3">
        <Flex align={"center"}>
          <Show above="md">
            <Link href={"/"}>
              <Image
                className=""
                alt="Logo"
                src="/logo-eventbrite.png"
                width={150}
                height={100}
              />
            </Link>
          </Show>
          <Show below="md">
            <Link href={"/"}>
              <Image
                className=""
                alt="Logo"
                src="/logo-e.png"
                width={30}
                height={30}
              />
            </Link>
          </Show>
        </Flex>

        <Flex w="50%" boxShadow='base'>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='gray.800' />
            </InputLeftElement>
            <Input type='search' placeholder='Search event...' />
          </InputGroup>
        </Flex>

        <Hide below="md">
          <Flex>
            {menu?.map((data, index) => {
              return (
                <Link href={data.url} key="index">
                  <Button
                    variant="ghost"
                    aria-label={data.label}
                    className="w-full"
                  >
                    {data.label}
                  </Button>
                </Link>
              );
            })}
          </Flex>
        </Hide>

        <NavbarButton />
      </div>
    </nav >
  )
}