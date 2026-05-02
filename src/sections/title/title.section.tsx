import { Box, Text } from '@mantine/core';
import { memo } from 'react';

export const TitleSection = memo(() => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      bd="1px solid red"
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text size="lg">milgamfolio</Text>
    </Box>
  );
});
