'use client'
import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-3 px-5 shadow-xl fixed top-0 right-0 left-0 bg-white z-10">
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
      <div className="flex items-center text-base">
        <Link href="/" className="py-1 px-5 hover:bg-gray-100 hover:rounded-full">Find Events</Link>
        <Link href="/" className="py-1 px-5 hover:bg-gray-100 hover:rounded-full">Create Events</Link>
        <Link href="/login" className="py-1 px-5 hover:bg-gray-100 hover:rounded-full">Log In</Link>
        <Link href="/" className="py-1 px-5 hover:bg-gray-100 hover:rounded-full">Sign Up</Link>
      </div>
    </nav>
  )
}