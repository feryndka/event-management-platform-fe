'use client'
import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { menu } from "../../data/menu.js"
import { Flex, Button } from '@chakra-ui/react'

import "./style.css"

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full flex justify-between items-center py-3 px-5 shadow-md bg-white z-10">
      <div className="flex items-center space-x-5">
        <Image
          className=""
          alt="Logo"
          src="/logo-eventbrite.png"
          width={150}
          height={100}
        />
      </div>

      <div className="w-[500px] bg-gray-100 hover:shadow-md">
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.800' />
          </InputLeftElement>
          <Input type='search' placeholder='Search event' />
        </InputGroup>
      </div>

      <Flex className="md:flex">
        {menu?.map((data, index) => {
          return (
            <Link key="index" href={data.url}>
              <Button variant='ghost' aria-label={data.label}>
                {data.label}
              </Button>
            </Link>
          )
        })}
      </Flex>
      {/* <div className="menu flex items-center text-base">
        {menu?.map((data, index) => {
          return (
            <Link key={index} href={data.url} className="py-1 px-5 hover:bg-gray-100 hover:rounded-full">
              {data.label}
            </Link>
          )
        })}
      </div> */}
    </nav>
  )
}