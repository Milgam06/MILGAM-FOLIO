'use client';

import { useFadeIn } from '@/hooks';
import { SectionHeader, SectionLayout, TiltingCard, WhoamiDescriptionBox, MotionFlex } from '@/components';
import { WHOAMI_DESCRIPTION_CONSTANT } from '@/constants';
import { Flex, rem, Text } from '@mantine/core';
import { memo, Ref } from 'react';

export const WhoamiSection = memo<{ ref?: Ref<HTMLDivElement> }>(({ ref }) => {
  const fadeInRef = useFadeIn();
  return (
    <SectionLayout ref={ref} bg="dark.0">
      <MotionFlex
        ref={fadeInRef}
        w="100%"
        direction="column"
        px={{ base: rem(20), sm: rem(40), md: rem(50), lg: rem(140) }}
        py={{ base: rem(60), md: rem(80) }}
        gap={{ base: rem(40), md: rem(56) }}>
        <SectionHeader label="WHO AM I" title="Design with reason. Build with care." />
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: rem(40), md: rem(56), xl: rem(80) }}>
          <Flex w={{ base: '100%', lg: '34%' }} justify="center" style={{ flexShrink: 0 }}>
            <TiltingCard cardImgSrc="/images/profile.jpg" alt="프론트엔드 개발자 박여준의 프로필 사진" />
          </Flex>
          <Flex direction="column" flex={1} miw={0} w="100%" gap={rem(32)}>
            <Text
              fz={{ base: rem(24), sm: rem(30), xl: rem(34) }}
              c="dark.7"
              lh={1.5}
              style={{ wordBreak: 'keep-all' }}>
              보기 좋은 화면보다, <span style={{ color: 'var(--mantine-color-brand-5)' }}>이유 있는 경험</span>을 만드는
              <br />
              프론트엔드 개발자입니다.
            </Text>
            <Text maw={rem(640)} fz={{ base: rem(14), sm: rem(16) }} c="dark.5" lh={1.7}>
              UI를 사용자 흐름과 코드 구조까지 연결해 생각합니다. 정보보안 배경을 바탕으로 신뢰할 수 있는 웹을 만드는 데
              관심이 있습니다.
            </Text>
            <Flex direction={{ base: 'column', sm: 'row' }} gap={rem(16)}>
              {WHOAMI_DESCRIPTION_CONSTANT.map((item) => (
                <WhoamiDescriptionBox key={item.number} {...item} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </MotionFlex>
    </SectionLayout>
  );
});
