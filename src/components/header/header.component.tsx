'use client';

import { Box, rem, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { memo } from 'react';

type INavSection = {
  title: string;
  onClick: () => void;
};

const NavSection = memo<INavSection>(({ title, onClick }) => {
  const { hovered, ref } = useHover();
  return (
    <Text
      ref={ref}
      c={hovered ? 'dark.7' : 'dark.4'}
      size={rem(16)}
      fw={400}
      style={{ cursor: 'pointer' }}
      onClick={onClick}>
      {title}
    </Text>
  );
});

export const Header = memo(() => {
  return (
    <Box
      display="flex"
      w="100%"
      pos="sticky"
      top={0}
      bg="#080706"
      px={{ base: 'sm', md: rem(20), lg: rem(40) }}
      py={{ base: rem(16), xs: rem(4), sm: rem(10), md: rem(12), lg: rem(16) }}
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1f1b19',
      }}>
      <Box w="fit-content" h="fit-content" style={{ cursor: 'pointer' }}>
        <Text c="dark.7" size={rem(20)} fw={500} style={{ letterSpacing: '0.4rem' }}>
          MILGAM
        </Text>
      </Box>
      <Box
        visibleFrom="sm"
        w="fit-content"
        h="fit-content"
        display="flex"
        style={{ justifyContent: 'center', alignItems: 'center', gap: rem(16) }}>
        <NavSection title="TIMELINE" onClick={() => {}} />
        <NavSection title="PROJECTS" onClick={() => {}} />
        <NavSection title="TECHSTACK" onClick={() => {}} />
        <NavSection title="CONTACT" onClick={() => {}} />
      </Box>
    </Box>
  );
});
