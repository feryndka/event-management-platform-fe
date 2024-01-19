import { Button, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <div className="relative w-full bg-gray-400">
        <Image
          alt="banner"
          src="/banner.png"
          h='60vh'
          w='100%'
        />
        <div className="absolute bottom-5 left-20">
          <Button colorScheme="orange" p='5'>Find your next event</Button>
        </div>
      </div>
    </>
  )
}