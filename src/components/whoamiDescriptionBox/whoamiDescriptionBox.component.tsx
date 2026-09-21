'use client';

import { IWhoamiDescription } from '@/constants';
import { Flex, rem, Text } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { memo } from 'react';

export const WhoamiDescriptionBox = memo<IWhoamiDescription>(({ number, category, title, description }) => {
  const { hovered, ref } = useHover<HTMLDivElement>();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');

  const isHovered = canHover && hovered;

  return (
    <Flex
      ref={ref}
      direction="column"
      flex={1}
      miw={0}
      gap={rem(28)}
      p={{ base: rem(20), xl: rem(24) }}
      bdrs={rem(24)}
      bg="#0e0c0a"
      bd={isHovered ? '1px solid brand.5' : '1px solid dark.2'}
      style={{
        cursor: 'default',
        transition: 'border-color 180ms ease, transform 180ms ease',
        transform: isHovered ? 'translateY(-3px)' : 'none',
      }}>
      <Text fz={rem(12)} c="dark.4">
        {number}
      </Text>
      <Flex direction="column" gap={rem(12)}>
        <Text fz={rem(11)} c="brand.5" fw={600} lts="0.12em">
          {category}
        </Text>
        <Text fz={rem(18)} c="dark.7" fw={600} lh={1.4}>
          {title}
        </Text>
        <Text fz={rem(14)} c="dark.5" lh={1.6} style={{ wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
});
