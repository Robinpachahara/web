import { Button } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';
import { NextSeoProps } from 'next-seo';
import { FaDiscord, FaGithub, FaPhone, FaTwitter } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';
const siteConfig = {
// Replace with the correct path to your image
  seo: {
    title: 'ChipMonkey',
    
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'How we work?!',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Hire Us',
        href: '/signup',
      },
      {
        label: 'Dashboard',
        href: 'https://app.chipmonkey.cloud/',
        variant: 'primary',
      },
    ],
  },
  footer: {

    links: [
      {
        href: 'mailto:contact@chipmonkey.cloud',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/saas_js',
        label: < FaDiscord size="14" />,
      },
      {
        href:"tel:+91 7454011577",
        label: < FaPhone size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start With ChipMonkey!',
    features: [
      {
        icon: FiCheck,
        title: 'DataBase',
        description: 'Power your growth with Database robust support for 4.5M records. Efficient, scalable, and tailored for your expanding business.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Infuse creativity into your AI journey! Personalize with Themable customizable themes, tailoring automation for your unique brand experience.',
      },
      {
        icon: FiCheck,
        title: 'Whatsapp',
        description:
          'Connect like never before with ChipMonkey WhatsApp integration. Redefine communication with user-friendly chats, bulk messaging, and audience engagement.',
      },
      {
        icon: FiCheck,
        title: 'Aichat',
        description:
          'Unlock insights effortlessly with Aichat friendly AI chat. Transform conversations into gold with our intuitive interface.',
      },
    ],
  },
};

export default siteConfig;
