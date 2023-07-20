'use client'
import React from 'react'
import { Menu, Button, Text } from "@mantine/core";
import Link from 'next/link';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconMenu2,
  IconHome,
} from "@tabler/icons-react";
import MenuItem from './components/MenuItem';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='h-20 w-full mx-auto container '>
      <div className='h-full w-full mx-auto container px-20 flex flex-row gap-10 items-center justify-between '>
        <div className='flex flex-row items-center gap-2'>
          <Image
            alt='Natnael Engeda Logo'
            src='/logo/logo-512x512.png' width={50} height={50} />
          <h1 className='text-3xl font-bold'>Natnael Engeda</h1>
        </div>
        <div>
          {/* Menu For Mobile and PC */}
          <div className='h-full'>

            {/* For Desktop */}
            <div className="hidden md:flex items-center h-14 px-5 rounded-xl bg-[#416165] ">
              <ul className="flex flex-row gap-10 font-semibold">
                <MenuItem link={"/"} name={"Home"} />
                <MenuItem link={"/about"} name={"About"} />
                <MenuItem link={"/portfolilo"} name={"Portfolio"} />
                <MenuItem link={"/blog"} name={"Blog"} />
                <MenuItem link={"/contact"} name={"Contact"} />
              </ul>
            </div>

            {/* For Mobile */}
            <div className="md:hidden block">
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button className="bg-violet-500 active:bg-violet-600 p-0 w-12 h-10">
                    <IconMenu2 size={25} />
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item className="active:bg-gray-300" component={Link} to="/">
                    Home
                  </Menu.Item>
                  <Menu.Item
                    className="active:bg-gray-300"
                    component={Link}
                    to="/about"
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    className="active:bg-gray-300"
                    component={Link}
                    to="/contact"
                  >
                    Contact
                  </Menu.Item>
                  <Menu.Item
                    className="active:bg-gray-300"
                    component={Link}
                    to="/portfolio"
                  >
                    Portfolio
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

          </div>

        </div>
      </div>
      <hr />
    </div>
  )
}
