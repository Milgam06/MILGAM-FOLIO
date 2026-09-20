'use client';

import { Header, THeaderSection } from '@/components';
import {
  TitleSection,
  WhoamiSection,
  TimelineSection,
  ProjectSection,
  TechStackSection,
  ContactSection,
} from '@/sections';
import { Stack } from '@mantine/core';
import { useCallback, useMemo, useRef } from 'react';

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const whoamiRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(
    () => ({
      title: titleRef,
      whoami: whoamiRef,
      timeline: timelineRef,
      projects: projectRef,
      techstack: techStackRef,
      contact: contactRef,
    }),
    [],
  );

  const handleNavigate = useCallback(
    (section: THeaderSection) => {
      const element = sectionRefs[section].current;
      if (!element) {
        return;
      }

      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
      const top = window.scrollY + element.getBoundingClientRect().top - headerHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    },
    [sectionRefs],
  );

  return (
    <>
      <Header ref={headerRef} onNavigate={handleNavigate} />
      <Stack w="100%" h="100%" gap={0}>
        <TitleSection ref={titleRef} />
        <WhoamiSection ref={whoamiRef} />
        <TimelineSection ref={timelineRef} />
        <ProjectSection ref={projectRef} />
        <TechStackSection ref={techStackRef} />
        <ContactSection ref={contactRef} />
      </Stack>
    </>
  );
}
