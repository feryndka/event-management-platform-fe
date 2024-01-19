import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="bg-[#1d0b3d] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <div className="flex gap-6 pb-5">
              <Image
                className=""
                alt="Logo"
                src="/logo-eventbrite.png"
                width={300}
                height={300}
              />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Use Eventbrite</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Plan Events</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Find Events</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Connect With Us</p>
            <Link href="/" className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-1 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">© 2024 Eventbrite</h1>
      </div>
    </>
  )
}