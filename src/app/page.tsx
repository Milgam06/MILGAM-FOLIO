import { TitleSection, TimelineSection } from '@/sections';
import { Stack } from '@mantine/core';

export default function Home() {
  return (
    <Stack w="100%" h="100%" align="stretch" gap={0}>
      <TitleSection />
      <TimelineSection />
    </Stack>
  );
}
