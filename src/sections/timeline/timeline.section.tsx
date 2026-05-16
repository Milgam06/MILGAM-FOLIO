import { SectionLayout, Timeline, ITimelineItem } from '@/components';
import { Flex, rem, Text } from '@mantine/core';
import { memo } from 'react';

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

export const TimelineSection = memo(() => {
  return (
    <SectionLayout bg="dark.0">
      <Flex
        w="100%"
        direction="column"
        justify="center"
        align="flex-start"
        px={{ base: rem(40), md: rem(50), lg: rem(140) }}
        py={{ base: rem(60), md: rem(80) }}
        gap={rem(80)}>
        <Flex direction="column" justify="center" gap={rem(20)}>
          <Text fz={rem(16)} c="brand.5" fw={500} style={{ letterSpacing: '0.12em' }}>
            TIMELINE
          </Text>
          <Text fz={{ base: rem(32), sm: rem(44), md: rem(52) }} fw={700} c="dark.7" style={{ lineHeight: 1.1 }}>
            Experience & Education
          </Text>
          <Text fz={{ base: rem(14), md: rem(16) }} c="dark.4" maw={rem(560)} style={{ lineHeight: 1.7 }}>
            보안 특성화 교육부터 실무 인턴십, 현재의 정보보안 전공까지 이어지는 성장 기록입니다.
          </Text>
        </Flex>
        <Timeline items={TIMELINE_ITEMS} />
      </Flex>
    </SectionLayout>
  );
});
