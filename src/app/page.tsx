import { Fragment } from "react";
import { Footer, Header } from "@/components/molecules";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <Box className="relative h-screen w-full overflow-hidden">
        <Header />
        <Image
          src="/images/jumbotron.png"
          alt="img"
          width="0"
          height="0"
          sizes="100"
          className="w-full h-full object-cover object-center top-0 -z-10 absolute" />

        <Flex direction="column" className="!justify-center px-0 allMobile:px-4 md:px-10 allMobile:items-center h-5/6 w-full max-w-7xl mx-auto relative">
          <Text className="allMobile:text-center text-[#D6B66B] font-normal text-9xl allMobile:text-[86px] !leading-[0.3] whitespace-nowrap font-thesignature">Premium Travel</Text>
          <Text className="allMobile:text-center text-[#FAF9F5] font-bold text-[54px] allMobile:text-2xl mb-2 font-unbounded">Beyond Expectation</Text>
          <Text className="allMobile:text-center text-[#FAF9F5] font-normal text-2xl allMobile:text-base max-w-[650px]">Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way</Text>
          <Box className="text-[#FAF9F5] text-base px-6 py-4 border-2 border-[#FAF9F5] mt-6 font-normal rounded-full max-w-max">
            Take me there
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Fragment>
  );
}
