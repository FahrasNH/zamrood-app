"use client"

import { Fragment } from "react";
import { CardExperience, Footer, Header } from "@/components/molecules";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { cardExperiences } from "@/constants/staticConst";
import { useWindowDimensions } from "@/lib/utility";

export default function Home() {
  //** Hooks */
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      <Box className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/jumbotron.png"
          alt="img"
          width="0"
          height="0"
          sizes="100"
          className="w-full h-full object-cover object-center top-0 -z-10 absolute" />

        <Flex direction="column" className="!justify-center allMobile:px-4 md:px-10 xl:px-28 allMobile:items-center h-full w-full">
          <Text className="allMobile:text-center text-[#D6B66B] font-normal text-9xl allMobile:text-[86px] !leading-[0.3] whitespace-nowrap font-thesignature">Premium Travel</Text>
          <Text className="allMobile:text-center text-[#FAF9F5] font-bold text-[54px] allMobile:text-2xl mb-2 font-unbounded">Beyond Expectation</Text>
          <Text className="allMobile:text-center text-[#FAF9F5] font-normal text-2xl allMobile:text-base max-w-[650px]">Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way</Text>
          <Box className="text-[#FAF9F5] text-base font-semibold px-6 py-4 border-2 border-[#FAF9F5] hover:border-[#D6B66B] hover:bg-[#D6B66B] transition delay-100 ease-in-out mt-6 rounded-full max-w-max cursor-pointer">
            Take me there
          </Box>
        </Flex>
      </Box>

      <Box className="my-20 allMobile:my-10 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Box className="mb-16 allMobile:mb-4">
          <Text as="div" className="text-[#0B7373] text-[84px] allMobile:text-[54px] text-center font-thesignature !leading-[0.3] whitespace-nowrap">Beyond Premium</Text>
          <Text as="div" className="text-[#004040] text-[32px] allMobile:text-[22px] text-center font-unbounded font-bold">Elevate Your Experience</Text>
        </Box>

        <Flex className="flex-row allMobile:flex-col gap-6 allMobile:gap-4">
          {cardExperiences.map((experience, idx) => (
            <CardExperience
              key={idx}
              title={experience.title}
              desc={experience.desc}
              className={width <= 768 ? "w-full" : "w-2/6"}
              icon={<experience.icon />}
            />
          ))}
        </Flex>
      </Box>
    </Fragment>
  );
}
