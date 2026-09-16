import { TitleSection, TimelineSection, ProjectSection, TechStackSection, ContactSection } from '@/sections';
import { Stack } from '@mantine/core';

export default function Home() {
  return (
    <Stack w="100%" h="100%" gap={0}>
      <TitleSection />
      <TimelineSection />
      <ProjectSection />
      <TechStackSection />
      <ContactSection />
    </Stack>
  );
}
