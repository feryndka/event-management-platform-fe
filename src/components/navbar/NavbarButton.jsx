"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  Hide,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { menu } from "@/data/menu";

export default function NavbarButton() {
  return (
    <>
      <Hide above="md">
        <Content />
      </Hide>
    </>
  );
}

const Content = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={handleOpen}
      />
      <Drawer
        isOpen={open}
        placement="right"
        onClose={handleOpen}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href={"/"}>
              <Image
                className=""
                alt="Logo"
                src="/logo-eventbrite.png"
                width={100}
                height={100}
              />
            </Link>
          </DrawerHeader>

          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
