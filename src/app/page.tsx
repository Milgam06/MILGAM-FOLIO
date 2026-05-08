import { TitleSection } from '@/sections';
import { Box, Stack, Text } from '@mantine/core';

export default function Home() {
  return (
    <Stack w="100%" h="100%" align="stretch" gap={0}>
      <TitleSection />
    </Stack>
  );
}
