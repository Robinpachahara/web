import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff');

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" xmlSpace="preserve" version="1.1" viewBox="0 0 500 500">

      {/* Paste your provided SVG code here */}
       <image width="500" height="500" xlinkHref="data:image/png;base64,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"/>
      {/* <path fill={color} d="M10 10H490V490H10z" /> */}
           {/* Text element added to the right of the SVG */}
        
    </svg>
  );
};
