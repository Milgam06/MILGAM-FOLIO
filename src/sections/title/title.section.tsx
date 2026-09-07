import { SectionLayout } from '@/components';
import { YEOJUN_CONSTANT } from '@/constants';
import { Flex, rem, Text } from '@mantine/core';
import { memo, useMemo } from 'react';

const ProfileBox = memo(() => {
  const age = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(YEOJUN_CONSTANT.birth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const isBirthdayPassed = monthDiff > 0 || (monthDiff === 0 && today.getDate() >= birthDate.getDate());
    return isBirthdayPassed ? age : age - 1;
  }, []);
  const enNameUpper = YEOJUN_CONSTANT.en_name.toUpperCase();
  return (
    <Flex
      pos="relative"
      w="100%"
      px={{ base: rem(20), md: rem(40) }}
      py={rem(60)}
      direction={{ base: 'column', sm: 'column', md: 'row' }}
      justify={{ base: 'center', sm: 'center', md: 'space-between' }}
      align="center"
      gap={{ base: rem(80), sm: rem(80), md: rem(20) }}
      style={{ zIndex: 1, cursor: 'default' }}>
      <Flex direction="column" justify="center" style={{ gap: rem(30) }}>
        <Text fz={rem(18)} c="#868686">
          {enNameUpper} · {YEOJUN_CONSTANT.alias}
        </Text>
        <Flex direction="column" justify="center" style={{ gap: rem(10) }}>
          <Text fz={{ base: rem(32), xs: rem(56), sm: rem(64), md: rem(64), xl: rem(80) }} fw={600} c="#fff">
            YEAH IT&apos;S ME,
          </Text>
          <Text
            fz={{ base: rem(68), xs: rem(76), sm: rem(84), md: rem(96), xl: rem(120) }}
            fw={900}
            variant="gradient"
            gradient={{ from: '#f35b4d', to: '#fff' }}>
            {enNameUpper}
          </Text>
        </Flex>
        <Text fz={{ base: rem(16), xs: rem(18), sm: rem(20), md: rem(22) }} c="#a4a4a4">
          보안 배경을 가진 프론트엔드 개발자 박여준입니다.
        </Text>
      </Flex>
      <Flex
        pos="relative"
        w="100%"
        maw={{ base: rem(500), xs: rem(500), sm: rem(600), md: rem(400), lg: rem(440), xl: rem(540) }}
        px={rem(20)}
        py={rem(24)}
        bg="rgba(255, 255, 255, 0.06)"
        bd="1px solid #2d2d2d"
        style={{
          overflow: 'hidden',
          borderRadius: rem(32),
          backdropFilter: 'blur(8px)',
        }}>
        <Flex
          pos="absolute"
          inset={0}
          style={{
            pointerEvents: 'none',
            background: `
               radial-gradient(
          circle at 0% 0%,
          rgba(184, 74, 63, 0.14),
          transparent 20%
        )`,
          }}
        />
        <Flex
          w="100%"
          pos="relative"
          direction="column"
          justify="center"
          align="center"
          style={{
            zIndex: 1,
            gap: rem(30),
          }}>
          <Flex w="100%" justify="space-between" align="center">
            <Text fz={rem(20)} fw={300} c="#868686">
              PROFILE
            </Text>
            <Text fz={rem(20)} fw={300} c="#868686">
              SEOUL · KR
            </Text>
          </Flex>
          <Flex w="100%" direction="column" justify="center" style={{ gap: rem(20) }}>
            <Flex w="100%" direction="column" justify="center" style={{ gap: rem(10) }}>
              <Text fz={rem(16)} c="#868686">
                Name
              </Text>
              <Text fz={rem(30)} fw={900} c="#fff">
                {YEOJUN_CONSTANT.name} / {enNameUpper}
              </Text>
            </Flex>
            <Flex w="100%" direction="column" justify="center" style={{ gap: rem(10) }}>
              <Text fz={rem(16)} c="#868686">
                Alias
              </Text>
              <Text fz={rem(30)} fw={900} c="#fff">
                {YEOJUN_CONSTANT.alias}
              </Text>
            </Flex>
            <Flex w="100%" direction="column" justify="center" style={{ gap: rem(10) }}>
              <Text fz={rem(16)} c="#868686">
                Role
              </Text>
              <Text fz={rem(30)} fw={900} c="#fff">
                {YEOJUN_CONSTANT.role[0]}
              </Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            pt={rem(16)}
            style={{ borderTop: '1px solid #868686', justifyContent: 'space-between', alignItems: 'center' }}>
            <Flex flex={1} direction="column" justify="center" style={{ gap: rem(10) }}>
              <Text fz={rem(14)} c="#868686">
                Age
              </Text>
              <Text fz={rem(28)} fw={900} c="#fff">
                {age}
              </Text>
            </Flex>
            <Flex flex={1} direction="column" justify="center" style={{ gap: rem(10) }}>
              <Text fz={rem(14)} c="#868686">
                INTERNSHIP
              </Text>
              <Text fz={rem(28)} fw={900} c="#fff">
                7 mo
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});

export const TitleSection = memo(() => {
  return (
    <SectionLayout isContentCentered pos="relative" bg="dark.0" style={{ overflow: 'hidden' }}>
      <ProfileBox />
      <Flex
        pos="absolute"
        inset={0}
        style={{
          background: `
            radial-gradient(
              circle at 50% 15%,
              rgba(184, 74, 63, 0.18),
              transparent 34%
            )
          `,
        }}
      />
      <Flex
        pos="absolute"
        inset={0}
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.03),
              transparent 35%
            )
          `,
        }}
      />
    </SectionLayout>
  );
});
