import { Flex, rem, Text } from '@mantine/core';
import { memo } from 'react';

export type ITimelineItem = {
  period: [number, number | string] | number;
  category: string;
  title: string;
  description: string;
};

type ITimeline = {
  items: ITimelineItem[];
};

export const Timeline = memo<ITimeline>(({ items }) => {
  const lastItemIndex = items.length - 1;
  return (
    <Flex direction="column" justify="center" w="100%">
      {items.map((item, index) => (
        <Flex key={index} w="100%">
          <Flex visibleFrom="sm" w={rem(140)} style={{ flexShrink: 0 }}>
            <Text fz={rem(16)} c="dark.3" lts={0.6}>
              {Array.isArray(item.period) ? `${item.period[0]} — ${item.period[1]}` : item.period}
            </Text>
          </Flex>
          <Flex direction="column" align="center" w={rem(28)} py={rem(3)} gap={rem(6)} style={{ flexShrink: 0 }}>
            <Flex w={rem(12)} h={rem(12)} bg="brand.5" bdrs="50%" pos="relative" style={{ flexShrink: 0, zIndex: 1 }} />
            {index < lastItemIndex && <Flex w={rem(1)} bg="dark.2" style={{ flex: 1 }} />}
          </Flex>
          <Flex flex={1} direction="column" gap={rem(12)} pl={rem(24)} pb={index < lastItemIndex ? rem(64) : 0}>
            <Flex direction="column" gap={rem(8)}>
              <Text fz={rem(14)} c="brand.5" fw={600} lts={2.2}>
                {item.category}
              </Text>
              <Text fz={{ base: rem(20), md: rem(24) }} fw={700} c="dark.7">
                {item.title}
              </Text>
            </Flex>
            <Text fz={{ base: rem(14), md: rem(15) }} c="dark.4" lh={1.7}>
              {item.description}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
});
