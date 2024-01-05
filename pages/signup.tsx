import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Center, Stack, Text } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Section } from 'components/section'
import siteConfig from 'data/config'
import { PageTransition } from 'components/motion/page-transition'
import { FiSmartphone, FiMessageSquare, FiMail } from 'react-icons/fi'

const Login: NextPage = () => {
  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          spacing="20"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box pe="20">
            {/* <NextLink href="/">
              <Box
                as={siteConfig.logo}
                width="160px"
                ms="4"
                mb={{ base: 0, lg: 16 }}
              />
            </NextLink> */}
            <Features
              display={{ base: 'none', lg: 'flex' }}
              columns={1}
              iconSize={4}
              flex="1"
              py="0"
              ps="0"
              maxW={{ base: '100%', xl: '80%' }}
              features={siteConfig.signup.features.map((feature) => ({
                iconPosition: 'left',
                variant: 'left-icon',

                ...feature,
              }))}
            />
          </Box>
          <Center height="100%" flex="1">
            <Box width="container.sm" pt="8" px="8">
              <Text color="white" fontSize="4xl" fontWeight="bold">
                Welcome to ChipMonkey
              </Text>
              <Text color="white" mt="4" fontSize="lg">
                Connect with us through different channels.
              </Text>
              <Stack spacing="4" mt="8">
                <Link href="tel:+91 7454011577" variant="unstyled">
                  <Box display="flex" alignItems="center">
                    <FiSmartphone size={20} color="#fff" />
                    <Text ml="2">Call Us</Text>
                  </Box>
                </Link>
                <Link
                  href="https://wa.me/+917454011577"
                  target="_blank"
                  variant="unstyled"
                >
                  <Box display="flex" alignItems="center">
                    <FiMessageSquare size={20} color="#fff" />
                    <Text ml="2">WhatsApp</Text>
                  </Box>
                </Link>
                <Link
                  href="mailto:register@chipmonkey.cloud" // Replace with your email
                  variant="unstyled"
                >
                  <Box display="flex" alignItems="center">
                    <FiMail size={20} color="#fff" />
                    <Text ml="2">Email Us</Text>
                  </Box>
                </Link>
              </Stack>
              <Text color="white" mt="8" fontSize="lg">
                Continue with{' '}
                <NextLink href="https://app.chipmonkey.cloud/">
                  <Link variant="underline">Dashboard</Link>
                </NextLink>
              </Text>
            </Box>
          </Center>
        </Stack>
      </PageTransition>
    </Section>
  )
}

export default Login

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        borderTopWidth: '1px',
      },
    },
  }
}
