import { FC } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { CardExperienceProps } from "./interface";

const CardExperience: FC<CardExperienceProps> = ({ title, icon, desc, className }) => {
  return (
    <Box className={`text-center ${className}`}>
      <Flex justify="center" align="center" className="mb-7 allMobile:mb-0">{icon}</Flex>
      <Text as="p" className="text-[#0B7373] text-2xl allMobile:text-base font-bold mb-2">{title}</Text>
      <Text as="p" className="text-black text-base allMobile:text-sm font-normal">{desc}</Text>
    </Box>
  );
}

export default CardExperience;