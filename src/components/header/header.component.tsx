import { Box } from '@mantine/core';
import { memo } from 'react';

export const Header = memo(() => {
  return (
    <Box
      display="flex"
      w="100%"
      h={{ base: '50px', md: '70px', lg: '90px' }}
      pos="sticky"
      top={0}
      bg="#080706"
      px={{ base: 'sm', md: 'md', lg: 'lg' }}
      py={{ base: 'sm', md: 'md', lg: 'lg' }}
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}></Box>
  );
});
