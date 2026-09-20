'use client';

import { useFadeIn } from '@/hooks';
import { SectionLayout, Timeline, ITimelineItem, SectionHeader, MotionFlex } from '@/components';
import { rem } from '@mantine/core';
import { memo, Ref } from 'react';

const TIMELINE_ITEMS: ITimelineItem[] = [
  {
    period: [2022, 2024],
    category: 'EDUCATION',
    title: 'Hansei Cyber Security High School',
    description:
      '네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.네트워크, 시스템 보안, 웹 취약점 기초를 학습하며 보안 관점의 문제 해결 방식을 익혔습니다.',
  },
  {
    period: [2024, 2025],
    category: 'INTERNSHIP',
    title: 'Frontend Intern · 2 Companies',
    description: '총 7개월 동안 관리자 페이지, 사내 도구, 사용자-facing 화면 개발에 참여했습니다.',
  },
  {
    period: [2025, 'Present'],
    category: 'UNIVERSITY',
    title: 'Korea Cyber University · Information Security',
    description: '정보보안 전공을 이어가며 React 기반 프론트엔드 개발과 제품 UI 구현에 집중하고 있습니다.',
  },
];

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
