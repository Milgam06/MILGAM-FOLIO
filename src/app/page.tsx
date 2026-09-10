import { TitleSection, TimelineSection, ProjectSection } from '@/sections';
import { Stack } from '@mantine/core';

export default function Home() {
  return (
    <Stack w="100%" h="100%" gap={0}>
      <TitleSection />
      <TimelineSection />
      <ProjectSection />
    </Stack>
  );
}
