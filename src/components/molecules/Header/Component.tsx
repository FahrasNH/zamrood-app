"use client"

import { FC, useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { useScrollChange, useWindowDimensions } from "@/lib/utility";
import { IcBars, IcClose } from "@/assets/icons";
import { motion } from "framer-motion"
import Image from "next/image";

const navigation = [{
  title: "Homepage",
  url: "/"
}, {
  title: "Customize Your Trip",
  url: "/#discover-tailored-experiences"
}, {
  title: "Destination",
  url: "/destination"
}, {
  title: "Article",
  url: "/#article"
}]

const Header: FC = () => {
  //** Hooks */
  const { width } = useWindowDimensions()
  const { color, bgColor, scroll: isScroll } = useScrollChange()
  const pathname = usePathname()

  //** States */
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  return (
    <Box className="fixed w-full z-50 overflow-hidden">
      {width <= 1023 && isOpenDrawer && (<Box onClick={() => setIsOpenDrawer(!isOpenDrawer)} className="w-full h-screen bg-[#1E1E1E] opacity-80 absolute z-40" />)}

      <Box width="100%" py="4" className={`allMobile:px-4 md:px-10 xl:px-28 w-full mx-auto bg-[${bgColor}]`}>
        <Flex justify="between" gap="5">
          <Box className="cursor-pointer">
            <Image src={`${isScroll ? "/images/logo-act.png" : "/images/logo.png"}`} width={140} height={90} alt="logo" />
          </Box>

          {width <= 1023 ? (
            <Box className={`z-50 ${isOpenDrawer ? "h-screen" : "h-auto"}`}>
              <Flex
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                justify="center" align="center" className="cursor-pointer bg-[#FAF9F5] rounded-full">
                <IcBars />
              </Flex>

              {isOpenDrawer && (
                <Box className="absolute bg-[#FAF9F5] p-6 rounded-l-md right-0 top-0  h-full">
                  <Flex
                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                    justify="end" align="center" className="cursor-pointer bg-[#FAF9F5] rounded-full">
                    <IcClose />
                  </Flex>
                  <Flex justify="start" gap="3" className="flex-col max-w-max">
                    {navigation.map((nav, idx) => (
                      <Box key={idx} py="4" className={`${pathname === nav.url && "border-b-2 border-b-[#0B7373]"} hover:pl-3 transition-all cursor-pointer`}>
                        <Text className="text-[#0B7373] font-bold text-base">{nav.title}</Text>
                      </Box>
                    ))}
                    <Box px="6" py="3" className="border border-[#0B7373] group hover:bg-[#0B7373] transition delay-100 ease-in-out rounded-full cursor-pointer">
                      <Text className="text-[#0B7373] group-hover:text-[#FAF9F5] font-bold text-base transition delay-100 ease-in-out">Need Assistance?</Text>
                    </Box>
                  </Flex>
                </Box>
              )}
            </Box>


          ) : (
            <Flex align="center" justify="between" gap="5">
              {navigation.map((nav, idx) => (
                <Box key={idx} px="6" py="4" className={`${pathname === nav.url && `border-b-2 border-b-[${color}]`} cursor-pointer hover:border-b-2 hover:border-b-[${color}]`}>
                  <Text className={`text-[${color}] font-bold text-base`}>{nav.title}</Text>
                </Box>
              ))}
              <Box px="6" py="3" className={`group border-2 border-[${color}] hover:bg-[#0B7373] hover:border-[#0B7373] transition delay-100 ease-in-out rounded-full cursor-pointer`}>
                <Text className={`text-[${isScroll ? "#0B7373" : "#FAF9F5"}] group-hover:text-[#FAF9F5] font-bold text-base transition delay-100 ease-in-out`}>Need Assistance?</Text>
              </Box>
            </Flex>
          )}

        </Flex>
      </Box>
    </Box>
  );
}

export default Header;