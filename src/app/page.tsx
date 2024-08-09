"use client"

import { CardExperience, Footer, Header } from "@/components/molecules";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { cardExperiences } from "@/constants/staticConst";
import { useWindowDimensions } from "@/lib/utility";
import { PublicLayout } from "@/components/templates";
import Button from "@/components/atoms/Button";

export default function Home() {
  //** Hooks */
  const { width } = useWindowDimensions();

  return (
    <PublicLayout>
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

      <Box className="mt-20 allMobile:mt-10 allMobile:px-4 md:px-10 xl:px-28 w-full">
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

      <Box className="mt-40 allMobile:mt-20 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Flex className="allMobile:flex-col justify-center items-center max-w-[952px] mx-auto gap-6 allMobile:gap-4">
          <Image
            src="/images/img-discover-experience.png"
            alt="img"
            width="0"
            height="0"
            sizes="100"
            className="w-[329px] allMobile:w-4/6 h-[302px] allMobile:h-auto" />
          <Box className="allMobile:text-center">
            <Text as="div" className="text-[#004040] text-[32px] allMobile:text-[22px] font-unbounded font-bold mb-4 allMobile:mb-2">Discover Tailored Experiences</Text>
            <Text as="p" className="text-black text-base allMobile:text-sm font-normal mb-4 allMobile:mb-6">Create your own journey, personalized to suit your preferences and interests, ensuring a once-in-a-lifetime adventure awaits.</Text>
            <Button variant="dark" className="max-w-max allMobile:mx-auto">
              Customize Your Trip
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box className="my-20 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Image
          src="/images/sparator-colorfull.png"
          alt="img"
          width="0"
          height="0"
          sizes="100"
          className="w-full" />
      </Box>
    </PublicLayout>
  );
}
