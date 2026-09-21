'use client';

import { useFadeIn } from '@/hooks';
import { SectionLayout, Timeline, SectionHeader, MotionFlex } from '@/components';
import { rem } from '@mantine/core';
import { memo, Ref } from 'react';
import { TIMELINE_ITEMS } from '@/constants';

export const TimelineSection = memo<{ ref?: Ref<HTMLDivElement> }>(({ ref }) => {
  const fadeInRef = useFadeIn();
  return (
    <SectionLayout ref={ref} bg="dark.0">
      <MotionFlex
        ref={fadeInRef}
        w="100%"
        direction="column"
        justify="center"
        align="flex-start"
        px={{ base: rem(40), md: rem(50), lg: rem(140) }}
        py={{ base: rem(60), md: rem(80) }}
        gap={rem(80)}>
        <SectionHeader
          label="TIMELINE"
          title="Experience & Education"
          description="보안 특성화 교육부터 실무 인턴십, 현재의 정보보안 전공까지 이어지는 성장 기록입니다."
        />
        <Timeline items={TIMELINE_ITEMS} />
      </MotionFlex>
    </SectionLayout>
  );
});
