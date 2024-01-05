import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { SEO } from 'components/seo/seo'

import { FallInPlace } from 'components/motion/fall-in-place'
import { Hero } from 'components/hero'
import { Link, Br } from '@saas-ui/react'
import { Em } from 'components/typography'
import { NextjsLogo, ChakraLogo } from 'components/logos'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCodesandbox,
  FiCopy,
  FiDatabase,
  FiFacebook,
  FiFlag,
  FiGrid,
  FiInstagram,
  FiLock,
  FiMessageCircle,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Faq } from 'components/faq'
import { Pricing } from 'components/pricing/pricing'

import { ButtonLink } from 'components/button-link/button-link'
import { Testimonial, Testimonials } from 'components/testimonials'

import faq from 'data/faq'
import testimonials from 'data/testimonials'
import pricing from 'data/pricing'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from 'components/highlights'

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="ChipMonkey"
        description="ChipMonkey Ai"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <Text >   Where Ai
                <Br /> automation meets 
                your business<br/></Text>
             
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Empower your business growth effortlessly <Br/>with <Em>ChipMonkey&apos;s AI automation – </Em>
                <Br /> innovation that accelerates success seamlessly. <Br/>
               
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://app.chipmonkey.cloud/">
                  Dashboard
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/signup"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                 Call Us
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/dashboard-newblack.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Welcome to ChipMonkey.cloud"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Aichat',
            icon: FiSmile,
            description: 'Friendly AI chat, effortlessly capturing data for personalized insights. Transform conversations into valuable information with Aichat intuitive interface',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Where creativity meets functionality. Personalize every aspect of your AI experience with our customizable themes, creating a truly tailored automation solution.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'DataBase',
            icon: FiDatabase,
            description:
              'Unleash the power of data. Support for up to 4.5M user records in the starter pack. Robust, scalable, and efficient for your growing business needs.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Whatsapp',
            icon: FiMessageCircle,
            description:
              'Revolutionize your communication with ChipMonkey WhatsApp integration. From user-friendly chats to bulk messaging, we redefine how you connect with your audience.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Instagram',
            icon: FiInstagram,
            description:
              'Elevate your Instagram presence with ChipMonkey. Engage automation for likes, comments, and automatic messaging. Effortless post scheduling for a seamless social media strategy.',
            iconPosition: 'left',
            delay: 1.2,
          },
          {
            title: 'Ai modules',
            icon: FiCode,
            description:
              'Tailor your AI experience with ChipMonkey personalized AI modules. Work with precision on your specific data for unparalleled automation crafted just for your business needs.',
            iconPosition: 'left',
            delay: 1.3,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
           At the core of ChipMonkey&apos;s innovation is a trifecta: the robust DataBase with starter pack <Em> support for 45lacks records,</Em>.
           Ai modules personalized for your data intricacies, and WhatsApp&apos;s user-friendly interaction seamlessly capturing leads – a powerful synergy propelling your business growth effortlessly.
          </Text>

          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
        <Em>Built on Stability:</Em> At ChipMonkey, we value the power of established tools. Our AI automation foundation leverages reliable components for a robust and efficient platform, ensuring your seamless journey towards innovation.
        </Text>
      </HighlightsItem>
      {/* <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))} */}
        {/* </Wrap> */}
      {/* </HighlightsItem> */}
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          How we 
          <Br /> Really work?!
        </Heading>
      }
      description={
        <>
          
          
          As your dedicated AI automation SaaS partner,<Br /> we customize backend processes, craft user-friendly interfaces, and capture leads for future business growth.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Web Application Control:',
          icon: FiCode,
          description:
            'Effortlessly monitor and manage customer data through our intuitive web application.',
          variant: 'inline',
        },
        {
          title: 'Instagram:',
          icon: FiInstagram,
          description:
            'Seamlessly interact with customers, even when you are offline, with our integrated Instagram solution.',
          variant: 'inline',
        },
        {
          title: 'Resturant:',
          icon: FiCheck,
          description:
            'Our top hot most selling product! Elevate your restaurant business with a remarkable 12% growth within the first 3 months of use.',
          variant: 'inline',
        },
        {
          title: 'Customer Engagement:',
          icon: FiUserPlus,
          description:
            'Connect with customers directly through their pre-installed social media software.',
          variant: 'inline',
        },
        {
          title: 'Delivery Partner (Coming Soon)',
          icon: FiBox,
          description:
            " Soon introducing WhatsApp Delivery Partner for small restaurants, grocery businesses, and more.",
          variant: 'inline',
        },
        {
          title: 'Hospital Excellence:',
          icon: FiCheck,
          description:
            'Currently serving over 10 hospitals, offering tokenized systems. Upcoming features include an AI patient report reader and guides for patients. ',
          variant: 'inline',
        },
        {
          title: 'Themed Personalization:',
          icon: FiToggleLeft,
          description:
            'Tailor your business with personalized themes and AI QR art for enhanced interaction.',
          variant: 'inline',
        },
        {
          title: 'WhatsApp Integration ',
          icon: FiMessageCircle,
          description:
            ' Capture leads, ensure customer satisfaction, and conduct bulk messaging seamlessly.',
          variant: 'inline',
        },
        {
          title: 'School Modules (Coming Soon):',
          icon: FiCodesandbox,
          description: ' Specialized AI modules trained on school books and teacher notes, providing a smooth learning experience for students.'
           
          ,
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []]
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, ]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
    
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home


