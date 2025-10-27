import { Box, Heading, Text, Link, List, ListItem } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Section } from 'components/section'
import { PageTransition } from 'components/motion/page-transition'
import { BackgroundGradient } from 'components/gradients/background-gradient'

const TermsOfService: NextPage = () => {
  return (
    <Section height="auto" innerWidth="container.lg" py={16}>
      <BackgroundGradient zIndex="-1" />
      <PageTransition>
        <Box bg="whiteAlpha.900" p={{ base: 6, md: 10 }} borderRadius="2xl" boxShadow="xl">
          <Heading as="h1" size="xl" mb={2}>
            Terms of Service
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={6}>
            Last updated: <b>October 27, 2025</b>
          </Text>

          <Text mb={6}>
            Welcome to <b>HoxFitness.in</b>. These Terms of Service (&quot;Terms&quot;) govern your
            access and use of our gym management software platform, including all related tools,
            dashboards, and communication services. By using HoxFitness.in, you agree to these
            Terms.
          </Text>

          {/* 1. Use of Service */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            1. Use of the Service
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>
              HoxFitness provides tools for gym owners to manage members, payments, and communication.
            </ListItem>
            <ListItem>
              You agree to use the service only for lawful gym or fitness business purposes.
            </ListItem>
            <ListItem>Unauthorized use, data scraping, or reverse engineering is strictly prohibited.</ListItem>
          </List>

          {/* 2. Account Responsibilities */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            2. Account Responsibilities
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>You are responsible for maintaining the confidentiality of your login credentials.</ListItem>
            <ListItem>All data added to your account (members, payments, etc.) must be accurate and lawful.</ListItem>
            <ListItem>Notify us immediately if you suspect any unauthorized activity.</ListItem>
          </List>

          {/* 3. Payment & Subscriptions */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            3. Payments &amp; Subscriptions
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>Some HoxFitness features may require a paid subscription.</ListItem>
            <ListItem>Fees, if applicable, will be clearly displayed before you subscribe.</ListItem>
            <ListItem>Payments are handled securely via third-party gateways (UPI, Razorpay, etc.).</ListItem>
          </List>

          {/* 4. Communication */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            4. Communication Consent
          </Heading>
          <Text mb={3}>
            By using HoxFitness, you consent to receive notifications, payment reminders, and updates via:
          </Text>
          <List styleType="disc" pl={5}>
            <ListItem>WhatsApp Business Cloud API (Meta)</ListItem>
            <ListItem>Browser Push Notifications (OneSignal)</ListItem>
            <ListItem>
              Email alerts from <b>support@hoxfitness.in</b>
            </ListItem>
          </List>
          <Text mt={2}>
            You may opt out of these communications at any time from your dashboard settings.
          </Text>

          {/* 5. Data Privacy */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            5. Data Privacy
          </Heading>
          <Text>
            Your privacy is protected under our{' '}
            <Link color="blue.500" href="/privacy-policy">
              Privacy Policy
            </Link>
            . We do not sell or share personal data for marketing purposes.
          </Text>

          {/* 6. Termination */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            6. Termination of Account
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>We may suspend or terminate accounts found violating these Terms.</ListItem>
            <ListItem>
              Users may request account deletion by emailing <b>support@hoxfitness.in</b>.
            </ListItem>
          </List>

          {/* 7. Limitation of Liability */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            7. Limitation of Liability
          </Heading>
          <Text>
            HoxFitness is provided on an &quot;as-is&quot; basis. We are not responsible for losses due
            to system downtime, incorrect data entry, or third-party service issues.
          </Text>

          {/* 8. Modifications */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            8. Modifications to Terms
          </Heading>
          <Text>
            We may update these Terms periodically. Any updates will be posted on this page with the
            new effective date. Continued use of the platform means you accept the updated Terms.
          </Text>

          {/* 9. Contact */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            9. Contact Us
          </Heading>
          <Text>
            For any questions about these Terms, contact us at{' '}
            <Link color="blue.500" href="mailto:support@hoxfitness.in">
              support@hoxfitness.in
            </Link>{' '}
            or visit{' '}
            <Link color="blue.500" href="https://hoxfitness.in" target="_blank">
              hoxfitness.in
            </Link>
            .
          </Text>

          {/* Meta Compliance Note */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            Meta Verification Declaration
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>We only send messages to users who have opted in.</ListItem>
            <ListItem>Our services comply with Meta’s platform policies.</ListItem>
            <ListItem>Data deletion requests are honored promptly upon user request.</ListItem>
          </List>

          <Text mt={8} fontSize="sm" color="gray.600">
            These Terms are drafted for compliance with Meta and general digital service standards in
            India.
          </Text>
        </Box>
      </PageTransition>
    </Section>
  )
}

export default TermsOfService
