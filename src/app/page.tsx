"use client"

import { CardExperience, Footer, Header } from "@/components/molecules";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { cardExperiences, luxuryFootages } from "@/constants/staticConst";
import { indFormatter, useWindowDimensions } from "@/lib/utility";
import { PublicLayout } from "@/components/templates";
import { IcArrow, IcMore } from "@/assets/icons";
import { Products } from "@/types/productTypes";
import Button from "@/components/atoms/Button";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from "next/link";
import useArticels from "@/hooks/useArticels";
import { Articles } from "@/types/articleTypes";

export default function Home() {
  //** Hooks */
  const { width } = useWindowDimensions();
  const { data: dataProducts, isLoading: isLoadingProduct } = useProducts(true)
  const { data: dataArticels, isLoading: isLoadingArticel } = useArticels()

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
          <Button variant="secondary" className="mt-6 max-w-max">
            Take me there
          </Button>
        </Flex>
      </Box>

      <Box className="mt-20 allMobile:mt-10 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Box className="mb-16 allMobile:mb-4">
          <Text as="div" className="text-[#0B7373] text-[84px] allMobile:text-[54px] text-center font-thesignature !leading-[0.3] whitespace-nowrap">Beyond Premium</Text>
          <Text as="div" className="text-[#004040] text-[32px] allMobile:text-[22px] text-center font-unbounded font-bold">Elevate Your Experience</Text>
        </Box>

        <Flex className="flex-row allMobile:flex-col gap-6 allMobile:gap-4">
          {cardExperiences.map((experience, index) => (
            <CardExperience
              key={index}
              title={experience.title}
              desc={experience.desc}
              className={width <= 768 ? "w-full" : "w-2/6"}
              icon={<experience.icon />}
            />
          ))}
        </Flex>
      </Box>

      <Box id="discover-tailored-experiences" className="mt-40 allMobile:mt-20 allMobile:px-4 md:px-10 xl:px-28 w-full scroll-mt-28">
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

      <Box className="mt-20 allMobile:mt-10 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Flex className="allMobile:flex-col justify-start allMobile:justify-start items-center allMobile:items-start gap-6 allMobile:gap-4">
          <Text as="div" className="text-[#004040] text-4xl allMobile:text-[22px] font-unbounded font-bold">Destinations</Text>
          <Flex className="gap-4 justify-start items-center">
            <IcMore height={width <= 767 ? 40 : 44} width={width <= 767 ? 40 : 44} />
            <Text className="text-base font-normal allMobile:font-bold">Explore more</Text>
          </Flex>
        </Flex>

        <Box className="my-20 allMobile:my-10">
          {!isLoadingProduct && dataProducts?.data.map((product: Products, idx: number) => (
            <Flex key={product.itinerary_id} className="allMobile:flex-col md:flex-col lg:flex-row items-center gap-6 allMobile:gap-4 mb-28 allMobile:mb-8 lg:even:flex-row-reverse">
              <Swiper
                spaceBetween={30}
                effect={'fade'}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="max-h-[390px] allMobile:h-[270px] w-1/2 allMobile:w-full md:w-full"
              >
                {product.related_galleries.map(gallery => (
                  <SwiperSlide key={gallery.gallery_id}>
                    <Image
                      src={gallery.src}
                      alt="img"
                      width="0"
                      height="0"
                      sizes="100"
                      className="w-full h-[390px] allMobile:h-[270px] object-cover object-center"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Box className="w-1/2 allMobile:w-full md:w-full">
                <Box className="mb-10">
                  <Text as="p" className="text-[#004040] text-base allMobile:text-xs mb-2 allMobile:mb-1">{`${product.itinerary_day} DAYS ${product.itinerary_day - 1} NIGHTS`}</Text>
                  <Text as="p" className="text-[#0B7373] text-4xl allMobile:text-base mb-2 font-bold font-unbounded overflow-hidden text-ellipsis whitespace-normal line-clamp-2">{product.itinerary_name}</Text>
                  <Text as="p" className="text-[#004040] text-base allMobile:text-xs mb-2 font-bold">Organized by Pandooin</Text>
                  <Text as="p" className="text-[#004040] text-base allMobile:text-xs font-normal">{product.itinerary_short_description}</Text>
                </Box>

                <Flex justify="between" align="center">
                  <Box>
                    <Text as="p" className="text-[#004040] text-base allMobile:text-xs">Start from</Text>
                    <Text as="p" className="text-[#0B7373] text-[28px] allMobile:text-[18px] font-medium font-unbounded">{indFormatter(Number(product.related_variant.itinerary_variant_pub_price))}</Text>
                  </Box>
                  <Button className="px-4 py-5 !flex items-center max-h-5">See Details</Button>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>

      <Box className="mt-40 allMobile:mt-20 py-20 allMobile:py-9 allMobile:px-4 md:px-10 xl:px-28 w-full bg-[#D6B66B]">
        <Text className="text-[#004040] font-normal text-[84px] allMobile:text-[54px] font-thesignature mb-8">Luxury Footages</Text>

        {width <= 1023 ? (
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="max-h-[390px] allMobile:h-[270px] w-1/2 allMobile:w-full md:w-full"
          >
            {luxuryFootages.map((luxuryFootage, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={luxuryFootage.imgUrl}
                  alt="img"
                  width="0"
                  height="0"
                  sizes="100"
                  className="w-full h-[390px] allMobile:h-[270px] object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Box className="relative">
            <Flex justify="center" align="center" gap="6">
              {luxuryFootages.slice(0, 3).map((footage, index) => (
                <Box
                  key={index}
                  className="relative w-full aspect-[356/256] cursor-pointer">
                  <Image
                    src={footage.imgUrl}
                    alt={`footage-${index}`}
                    className="w-full h-full object-cover center"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </Box>
              ))}
            </Flex>

            <Image
              src="/images/sparator-white.png"
              alt="img"
              width="0"
              height="0"
              sizes="100"
              className="w-full my-6 allMobile:hidden" />

            <Flex justify="center" align="center" gap="6">
              {luxuryFootages.slice(3, 6).map((footage, index) => (
                <Box
                  key={index}
                  className="relative w-full aspect-[356/256] cursor-pointer">
                  <Image
                    src={footage.imgUrl}
                    alt={`footage-${index + 3}`}
                    className="w-full h-full object-cover center"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        )}
      </Box>

      <Box className="mt-20 allMobile:mt-10 allMobile:px-4 md:px-10 xl:px-28 w-full">
        <Box
          className="w-full p-6 flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/images/img-experience.jpeg')`
          }}
        >
          <Image src="/images/logo.png" width={140} height={90} alt="logo" />

          <Box className="flex flex-col space-y-2 lg:space-y-0 justify-center lg:justify-end text-center lg:text-right">
            <Text as="p" className="text-white text-base">
              Want to see other destinations? Check us out at our website
            </Text>

            <Link target="_blank" href="https://pandooin.com" className="text-white inline-flex items-center justify-center lg:justify-end gap-2">
              <Text as="span" className="text-xl font-bold underline mb-2">pandooin.com</Text>
              <IcArrow />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box id="article" className="my-20 allMobile:my-10 allMobile:px-4 md:px-10 xl:px-28 w-full scroll-mt-28">
        <Text as="p" className="text-[#0B7373] text-4xl allMobile:text-[22px] font-bold font-unbounded mb-2">Articles</Text>
        <Text as="p" className="text-[#0B7373] text-2xl allMobile:text-base mb-6">Our curated writings, offering something for every reader.</Text>

        <Grid className="allMobile:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <Box>
            {!isLoadingArticel && (
              <Link href={`https://pandooin.com/blog/article/${dataArticels?.data[0].slug}`} className="relative">
                <Image
                  src={dataArticels?.data[0].featured_image}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[700px] allMobile:h-[350px] object-cover center grayscale hover:grayscale-0 ease-in-out duration-300"
                />
                <Text className="absolute bottom-0 text-[#FAF9F5] text-base font-bold p-4 allMobile:p-6 bg-[#0B7373] w-full">{dataArticels?.data[0].title}</Text>
              </Link>
            )}
          </Box>
          <Grid className="allMobile:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {!isLoadingArticel && dataArticels?.data.slice(1, 5).map((article: Articles, idx: number) => (
              <Link key={idx} href={`https://pandooin.com/blog/article/${article.slug}`} className="relative">
                <Image
                  src={article.featured_image}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full allMobile:h-[350px] object-cover center grayscale hover:grayscale-0 ease-in-out duration-300"
                />
                <Box className="p-4 allMobile:p-6 absolute bottom-0 bg-[#0B7373] w-full">
                  <Text
                    className="text-[#FAF9F5] text-base font-bold overflow-hidden text-ellipsis whitespace-normal line-clamp-2"
                    title={article.title}
                  >
                    {article.title}
                  </Text>
                </Box>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
    </PublicLayout>
  );
}
