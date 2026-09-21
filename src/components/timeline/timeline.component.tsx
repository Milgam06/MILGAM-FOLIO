import { ITimelineItem, TTimelinePeriod } from '@/constants';
import { Flex, MantineStyleProp, rem, Text } from '@mantine/core';
import { memo } from 'react';

type ITimeline = {
  items: ITimelineItem[];
};

export const Timeline = memo<ITimeline>(({ items }) => {
  const formatPeriod = (period: TTimelinePeriod): string => {
    switch (period.type) {
      case 'single':
        return `${period.date} ${period.label}`;
      case 'range':
        return `${period.start} – ${period.end}`;
      case 'ongoing':
        return `${period.start} – PRESENT`;
    }
  };

  const periodStyle: MantineStyleProp = {
    fontFamily: 'var(--mantine-font-family)',
    fontVariantNumeric: 'tabular-nums',
    whiteSpace: 'nowrap',
  };

  const lastItemIndex = items.length - 1;

  return (
    <Flex direction="column" justify="center" w="100%">
      {items.map((item, index) => (
        <Flex key={index} w="100%">
          <Flex visibleFrom="sm" w={rem(176)} pr={rem(24)} pt={rem(1)} style={{ flexShrink: 0 }}>
            <Text fz={rem(13)} fw={500} lh={1.5} c="dark.5" style={periodStyle}>
              {formatPeriod(item.period)}
            </Text>
          </Flex>
          <Flex direction="column" align="center" w={rem(28)} py={rem(3)} gap={rem(6)} style={{ flexShrink: 0 }}>
            <Flex w={rem(12)} h={rem(12)} bg="brand.5" bdrs="50%" pos="relative" style={{ flexShrink: 0, zIndex: 1 }} />
            {index < lastItemIndex && <Flex w={rem(1)} bg="dark.2" style={{ flex: 1 }} />}
          </Flex>
          <Flex
            flex={1}
            miw={0}
            direction="column"
            gap={rem(12)}
            pl={{ base: rem(16), sm: rem(20) }}
            pb={index < lastItemIndex ? rem(64) : 0}>
            <Text hiddenFrom="sm" fz={rem(13)} fw={500} lh={1.5} c="dark.5" style={periodStyle}>
              {formatPeriod(item.period)}
            </Text>
            <Flex direction="column" gap={rem(10)}>
              <Text fz={rem(14)} c="brand.5" fw={600} lts={2}>
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
