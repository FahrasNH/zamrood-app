import { FC } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { IcEmail, IcFacebook, IcInstagram } from "@/assets/icons";

const Footer: FC = () => {
  return (
    <Box width="100%" py="4" className="allMobile:px-4 md:px-8 lg:px-[80px] bg-slate-500 relative w-full bottom-0">
      <Flex align="center" justify="between" gap="5" className="allMobile:flex-col allMobile:gap-4">
        <Text className="text-[#FAF9F5] font-light text-base allMobile:text-sm allMobile:text-center">© 2023 Zamrood by PT Teknologi Pandu Wisata</Text>

        <Flex align="center" justify="between" gap="6">
          <IcFacebook />
          <IcInstagram />
          <IcEmail />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;