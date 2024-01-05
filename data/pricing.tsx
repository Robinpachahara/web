import { HStack, Text, AbsoluteCenter } from '@chakra-ui/react'

export default {
  title: 'Pricing for every business owner',
  description:
    'Empower your business with potent AI automation at owner-friendly rates. Unleash innovation without breaking the bank!.',
  plans: [
    {
      id: 'oss',
      title: 'ChipMonkey Plan',
      description: 'Business friendly charges,One call! Our team develop and installs AI automation to meet your business needs seamlessly.',
      price: '$7.75 | ₹646/only ',
      isRecommended: true,
      features: [
        {
          title: 'Unlimited Users',
        },
        {
          title: 'Support 4.5M User Data Storage & Local Storage',
        },
        {
          title: 'Backend Automation',
        },
        {
          title: 'Self Trained Data Models',
        },
        {
          title: 'Easy Guide/Installation',
        },
        {
          title: 'Data Transparency',
        },
        {
          title: 'Privacy End-to-End',
        },
        {
          title: 'Total Control Over Data',
        },
        {
          title: 'Email + Call Support 24x7',
        },
        {
          title: 'New Private discord community',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Others Plans(Chatgpt,Make,Manychat&Zapier e.g)',
      description: 'Low-code platform are not for everyone',
      price: '$20-49 | ₹1700-3800/month',
    
      features: [
        {
          title: 'Limited Users(1000)',
        },
        {
          title: 'Limited Storage(10GB-20GB) & Do not Support Local Storage',
        },
        {
          title: 'Low-Code Automation',
        },
        {
          title: 'Token Based Charges',
        },
        {
          title: 'Api Limit',
        },
        {
          title: 'Large Language Models, not comptabile for small business',
        },

      ],
      action: {
        href: './signup',
      },
    },

  ],
}
