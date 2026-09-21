'use client';

import { ITechStackConstant } from '@/constants';
import { Badge, Flex, rem, Text } from '@mantine/core';
import { memo } from 'react';
import { useHover, useMediaQuery } from '@mantine/hooks';

type ITechStackBox = {
  techStack: ITechStackConstant;
};

export const TechStackBox = memo<ITechStackBox>(({ techStack }) => {
  const { hovered, ref } = useHover<HTMLElement>();
  const canHover = useMediaQuery('(hover: hover)');
  const isHovered = canHover && hovered;

  return (
    <Flex
      ref={ref}
      direction="column"
      gap={rem(24)}
      p={rem(24)}
      bdrs={rem(28)}
      bg="#0e0c0a"
      bd={isHovered ? '1px solid brand.5' : '1px solid dark.2'}
      style={{
        cursor: 'default',
        transition: 'border-color 180ms ease, transform 180ms ease',
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}>
      <Flex w={rem(56)} h={rem(56)} justify="center" align="center" bg="dark.1" bd="1px solid dark.2" bdrs={rem(18)}>
        {techStack.icon}
      </Flex>
      <Flex align="center" justify="space-between" gap={rem(12)}>
        <Flex direction="column" justify="center">
          <Text fz={rem(24)} fw={600} c="dark.7" lh={1.3} style={{ overflowWrap: 'anywhere' }}>
            {techStack.name}
          </Text>
          <Text fz={rem(12)} c="dark.5" tt="uppercase" lts="0.12em" lh={1.5} mt={rem(6)}>
            {techStack.kind}
          </Text>
        </Flex>
        <Badge
          variant="outline"
          color="brand.5"
          c="#f1b5aa"
          radius="xl"
          size="sm"
          bg="rgba(184, 74, 63, 0.1)"
          style={{ flexShrink: 0, letterSpacing: '0.1em' }}>
          {techStack.tier}
        </Badge>
      </Flex>
    </Flex>
  );
});
