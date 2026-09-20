'use client';

import { Flex, rem, Text, UnstyledButton } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { memo, Ref } from 'react';

export type THeaderSection = 'title' | 'whoami' | 'timeline' | 'projects' | 'techstack' | 'contact';

type IHeader = {
  ref?: Ref<HTMLDivElement>;
  onNavigate: (section: THeaderSection) => void;
};

type INavSection = {
  title: string;
  onClick: () => void;
};

const NavSection = memo<INavSection>(({ title, onClick }) => {
  const { hovered, ref } = useHover<HTMLButtonElement>();
  return (
    <UnstyledButton ref={ref} onClick={onClick}>
      <Text c={hovered ? 'dark.7' : 'dark.4'} size={rem(16)} fw={400}>
        {title}
      </Text>
    </UnstyledButton>
  );
});

export const Header = memo<IHeader>(({ ref, onNavigate }) => {
  return (
    <Flex
      ref={ref}
      w="100%"
      pos="sticky"
      top={0}
      style={{
        zIndex: 100,
        borderBottom: '1px solid #1f1b19',
      }}
      bg="#080706"
      justify="space-between"
      align="center"
      px={{ base: 'sm', md: rem(20), lg: rem(40) }}
      py={{ base: rem(16), xs: rem(4), sm: rem(10), md: rem(12), lg: rem(16) }}>
      <UnstyledButton onClick={() => onNavigate('title')}>
        <Text c="dark.7" size={rem(20)} fw={500} lts="0.4rem">
          MILGAM
        </Text>
      </UnstyledButton>
      <Flex visibleFrom="sm" w="fit-content" h="fit-content" justify="center" align="center" gap={rem(16)}>
        <NavSection title="WHO AM I" onClick={() => onNavigate('whoami')} />
        <NavSection title="TIMELINE" onClick={() => onNavigate('timeline')} />
        <NavSection title="PROJECTS" onClick={() => onNavigate('projects')} />
        <NavSection title="TECHSTACK" onClick={() => onNavigate('techstack')} />
        <NavSection title="CONTACT" onClick={() => onNavigate('contact')} />
      </Flex>
    </Flex>
  );
});
