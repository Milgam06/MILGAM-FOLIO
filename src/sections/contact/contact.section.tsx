'use client';

import { SectionLayout } from '@/components';
import { YEOJUN_CONSTANT } from '@/constants';
import { Anchor, Flex, rem, Text } from '@mantine/core';
import { memo } from 'react';
import { useHover, useMediaQuery, useReducedMotion } from '@mantine/hooks';

type IContactBox = {
  label: string;
  value: string;
  href: string;
};

const ContactBox = memo<IContactBox>(({ label, value, href }) => {
  const { hovered, ref } = useHover<HTMLAnchorElement>();
  const canHover = useMediaQuery('(hover: hover)');
  const reducedMotion = useReducedMotion();
  const isHovered = canHover && hovered;
  const isExternal = href.startsWith('https://');
  return (
    <Anchor
      ref={ref}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      underline="never"
      c="dark.0"
      bdrs={rem(20)}>
      <Flex
        align="center"
        justify="space-between"
        gap={rem(16)}
        px={rem(18)}
        py={rem(16)}
        bg={isHovered ? 'rgba(8, 7, 6, 0.05)' : 'transparent'}
        bd={isHovered ? '1px solid dark.5' : '1px solid dark.6'}
        bdrs={rem(20)}
        style={{
          transition: reducedMotion
            ? 'none'
            : 'background-color 180ms ease, border-color 180ms ease,transform 180ms ease',
          transform: isHovered && !reducedMotion ? 'translateY(-4px)' : 'none',
        }}>
        <Flex direction="column" gap={rem(6)} miw={0}>
          <Text fz={rem(12)} fw={500} c="dark.4" lts="0.12em">
            {label}
          </Text>
          <Text fz={rem(20)} fw={500} lh={1.2} style={{ overflowWrap: 'anywhere' }}>
            {value}
          </Text>
        </Flex>
        <Text fz={rem(24)} aria-hidden="true" style={{ flexShrink: 0 }}>
          ↗
        </Text>
      </Flex>
    </Anchor>
  );
});

export const ContactSection = memo(() => {
  return (
    <SectionLayout isFullHeight={false} isContentCentered px={rem(14)} py={rem(60)} bg="dark.0">
      <Flex
        direction="column"
        w="100%"
        maw={rem(960)}
        p={{ base: rem(24), sm: rem(32) }}
        bdrs={rem(40)}
        bg="dark.7"
        mb={{ base: rem(60), md: rem(100) }}
        gap={{ base: rem(24), sm: rem(36) }}>
        <Flex direction="column" gap={rem(20)}>
          <Flex direction="column" gap={rem(12)}>
            <Text fz={rem(14)} c="brand.5" fw={500} lts="0.18em">
              GET IN TOUCH
            </Text>
            <Text fz={rem(48)} fw={600} c="dark.0" lts="-0.05em">
              Let’s build anything together.
            </Text>
          </Flex>
          <Text fz={rem(18)} c="dark.4" lh={1.5} style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
            프로젝트 협업 / 커피챗은 언제든 열려 있습니다.
          </Text>
        </Flex>
        <Flex direction="column" gap={rem(14)}>
          <ContactBox label="MAIL" value={YEOJUN_CONSTANT.email} href={`mailto:${YEOJUN_CONSTANT.email}`} />
          <ContactBox label="LINKEDIN" value="View profile" href={YEOJUN_CONSTANT.linkedin} />
        </Flex>
      </Flex>
    </SectionLayout>
  );
});
