"use client"

// React
import { FC, useState } from "react";

// Next.js
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Radix UI
import { Box, Flex, Text } from "@radix-ui/themes";

// Custom Hooks
import { useScrollChange, useWindowDimensions } from "@/lib/utility";

// Assets & Icons
import { IcBars, IcClose } from "@/assets/icons";

// Components
import { Button } from "@/components/atoms";

const navigation = [{
  title: "Homepage",
  url: "/"
}, {
  title: "Customize Your Trip",
  url: "#discover-tailored-experiences"
}, {
  title: "Destination",
  url: "/destination"
}, {
  title: "Article",
  url: "#article"
}]

const Header: FC = () => {
  //** Hooks */
  const { width } = useWindowDimensions()
  const { color, bgColor, scroll: isScroll } = useScrollChange()
  const pathname = usePathname()

  //** States */
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  return (
    <Box className={`fixed w-full z-50 overflow-hidden ${isScroll ? 'lg:shadow-lg' : 'lg:shadow-none'}`}>
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
                      <Link href={nav.url} key={idx} className={`${pathname === nav.url && "border-b-2 border-b-[#0B7373]"} hover:pl-3 py-4 transition-all`}>
                        <Text className="text-[#0B7373] font-bold text-base">{nav.title}</Text>
                      </Link>
                    ))}
                    <Button>
                      <Link target="_blank" href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0">
                        Need Assistance?
                      </Link>
                    </Button>
                  </Flex>
                </Box>
              )}
            </Box>
          ) : (
            <Flex align="center" justify="between" gap="5">
              {navigation.map((nav, idx) => (
                <Link href={nav.url} key={idx} className={`${pathname === nav.url && `border-b-2 border-b-[${color}]`} px-6 py-4 cursor-pointer hover:border-b-2 hover:border-b-[${color}]`}>
                  <Text className={`text-[${color}] font-bold text-base`}>{nav.title}</Text>
                </Link>
              ))}
              <Button className={`border-[${color}] hover:border-[${!isScroll ? "#0B7373" : "#FAF9F5"}] text-[${isScroll ? "#0B7373" : "#FAF9F5"}]`}>
                <Link target="_blank" href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0">
                  Need Assistance?
                </Link>
              </Button>
            </Flex>
          )}

        </Flex>
      </Box>
    </Box>
  );
}

export default Header;