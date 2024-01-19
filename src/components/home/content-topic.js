import { Image, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Topic() {
  return (
    <>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-2">
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/mic-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Music</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/nightlife-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Nightlife</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/visualArts-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Performing & Visual Arts</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/hollidays-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Hollidays</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/health-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Health</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/hobbies-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Hobbies</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/business-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Business</h2>
              </div>
            </div>
          </Link>
          <Link class="p-2 lg:w-1/4 md:w-1/2 w-full" href='/'>
            <div class="h-full flex items-center border-blue-500 border p-4 rounded-lg hover:bg-blue-100">
              <div class="w-16 h-16 border-blue-500 border object-cover object-center flex-shrink-0 rounded-full mr-4">
                <Center h='full' w='full'>
                  <Image
                    alt="banner"
                    src="/food-icon.png"
                    h='30px'
                    w='30px'
                  />
                </Center>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Food & Drink</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}