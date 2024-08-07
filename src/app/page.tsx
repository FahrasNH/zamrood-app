"use client"

import { Box, Flex, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
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

export default function Home() {
  const pathname = usePathname()

  return (
    <Box width="100%" px="120px" py="6" className="bg-slate-500">
      <Flex align="center" justify="between" gap="5">
        <Box className="cursor-pointer">
          <Image src="/images/logo.png" width={140} height={90} alt="logo" />
        </Box>

        <Flex align="center" justify="between" gap="6">
          {navigation.map((nav, idx) => (
            <Box key={idx} px="6" py="4" className={`${pathname === nav.url && "border-b-2 border-b-[#FAF9F5]"} cursor-pointer hover:border-b-2 hover:border-b-[#FAF9F5]`}>
              <Text className="text-[#FAF9F5] font-bold text-base">{nav.title}</Text>
            </Box>
          ))}
          <Box px="6" py="4" className="border border-[#FAF9F5] rounded-full cursor-pointer">
            <Text className="text-[#FAF9F5] font-bold text-base">Need Assistance?</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
