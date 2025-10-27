import { Box, Heading, Text, Link, List, ListItem, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Section } from 'components/section'
import { PageTransition } from 'components/motion/page-transition'
import { BackgroundGradient } from 'components/gradients/background-gradient'

const PrivacyPolicy: NextPage = () => {
  return (
    <Section height="auto" innerWidth="container.lg" py={16}>
      <BackgroundGradient zIndex="-1" />
      <PageTransition>
        <Box bg="whiteAlpha.900" p={{ base: 6, md: 10 }} borderRadius="2xl" boxShadow="xl">
          <Heading as="h1" size="xl" mb={2}>
            Privacy Policy
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={6}>
            Last updated: <b>October 27, 2025</b>
          </Text>

          <Text mb={6}>
            Welcome to <b>HoxFitness.in</b>, a gym management software platform designed to help gym
            owners manage memberships, payments, reminders, and communication efficiently. Your
            privacy is important to us.
          </Text>

          {/* 1. Information We Collect */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            1. Information We Collect
          </Heading>
          <Text mb={3}>We collect the following types of information to provide and improve our services:</Text>
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontWeight="bold">User Information</Text>
              <List styleType="disc" pl={5}>
                <ListItem>Full Name</ListItem>
                <ListItem>Email Address</ListItem>
                <ListItem>Contact Number</ListItem>
                <ListItem>Gym/Business Name</ListItem>
                <ListItem>UPI or Payment Details (voluntary for payment reminders)</ListItem>
              </List>
            </Box>

            <Box>
              <Text fontWeight="bold">Member Information (added by gym owners)</Text>
              <List styleType="disc" pl={5}>
                <ListItem>Name, Contact Number, Membership Type, Payment Status</ListItem>
                <ListItem>Exercise plans or schedules (if uploaded)</ListItem>
              </List>
            </Box>

            <Box>
              <Text fontWeight="bold">System Information</Text>
              <List styleType="disc" pl={5}>
                <ListItem>Browser type, device type, operating system</ListItem>
                <ListItem>IP address and login timestamps for security</ListItem>
              </List>
            </Box>

            <Box>
              <Text fontWeight="bold">Communication Data</Text>
              <Text>
                Messages or notifications sent via WhatsApp Cloud API or OneSignal Web Push (only when users give
                permission).
              </Text>
            </Box>
          </VStack>

          {/* 2. How We Use */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            2. How We Use the Collected Information
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>Register gym owners and members into the HoxFitness system.</ListItem>
            <ListItem>Manage gym membership records and payment histories.</ListItem>
            <ListItem>Send payment reminders and fitness notifications.</ListItem>
            <ListItem>Improve platform performance and provide technical support.</ListItem>
            <ListItem>Communicate via email, WhatsApp API, or push notifications after consent.</ListItem>
          </List>

          {/* 3. Data Sharing */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            3. Data Sharing & Third Parties
          </Heading>
          <Text mb={3}>
            We <b>do not sell or rent</b> your personal data. We may share limited data only with:
          </Text>
          <List styleType="disc" pl={5}>
            <ListItem>
              <b>Meta Platforms, Inc.</b> – for sending messages via the WhatsApp Business Cloud API.
            </ListItem>
            <ListItem>
              <b>OneSignal</b> – for browser-based web push notifications.
            </ListItem>
            <ListItem>
              <b>Payment Gateways</b> (e.g., UPI, Razorpay, PhonePe) – when verifying payment screenshots.
            </ListItem>
          </List>

          {/* 4. Security */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            4. Data Storage and Security
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>
              All data stored securely in <b>MongoDB Atlas (Free Tier)</b> with encrypted access.
            </ListItem>
            <ListItem>Access limited to authorized administrators only.</ListItem>
            <ListItem>HTTPS used for all transmissions.</ListItem>
            <ListItem>No sensitive payment data (e.g., card numbers) stored on servers.</ListItem>
          </List>

          {/* 5. User Rights */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            5. User Rights
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>Access or correct your information.</ListItem>
            <ListItem>Request data deletion or account removal.</ListItem>
            <ListItem>Withdraw permissions (e.g., WhatsApp or Push Notifications).</ListItem>
          </List>
          <Text mt={2}>
            To exercise your rights, email us at{' '}
            <Link color="blue.500" href="mailto:support@hoxfitness.in">
              support@hoxfitness.in
            </Link>
            .
          </Text>

          {/* 6–9 Shortened */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            6. Cookies & Tracking
          </Heading>
          <Text mb={3}>
            HoxFitness.in uses cookies to maintain login sessions, remember preferences, and improve analytics.
          </Text>

          <Heading as="h2" size="md" mt={8} mb={3}>
            7. Children’s Privacy
          </Heading>
          <Text>Our services are intended for users aged 18 and above. We do not knowingly collect data from children.</Text>

          <Heading as="h2" size="md" mt={8} mb={3}>
            8. Policy Updates
          </Heading>
          <Text>
            We may update this policy from time to time. Updated versions will always be posted on this page with a
            revised date.
          </Text>

          <Heading as="h2" size="md" mt={8} mb={3}>
            9. Contact Us
          </Heading>
          <Text>
            Email:{' '}
            <Link color="blue.500" href="mailto:support@hoxfitness.in">
              support@hoxfitness.in
            </Link>{' '}
            | Website:{' '}
            <Link color="blue.500" href="https://hoxfitness.in" target="_blank">
              hoxfitness.in
            </Link>
          </Text>

          {/* Meta Compliance */}
          <Heading as="h2" size="md" mt={8} mb={3}>
            Meta Verification Declaration
          </Heading>
          <List styleType="disc" pl={5}>
            <ListItem>All message communications are user-consented.</ListItem>
            <ListItem>We never share user data with third parties for marketing.</ListItem>
            <ListItem>Data deletion and privacy requests are honored promptly.</ListItem>
          </List>

          <Text mt={8} fontSize="sm" color="gray.600">
            This policy was prepared for Meta verification and can be updated to meet local legal requirements.
          </Text>
        </Box>
      </PageTransition>
    </Section>
  )
}

export default PrivacyPolicy
