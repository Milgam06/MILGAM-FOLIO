'use client';

import { YEOJUN_CONSTANT } from '@/constants';
import { Flex, rem, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useSpring } from 'motion/react';
import { MotionFlex } from '../motionFlex';
import Image from 'next/image';
import { memo, PointerEvent, useCallback, useEffect } from 'react';

type ITiltingCard = {
  cardImgSrc: string;
  alt: string;
};

export const TiltingCard = memo<ITiltingCard>(({ cardImgSrc, alt }) => {
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const rotateX = useSpring(0, { stiffness: 220, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 30 });
  const scale = useSpring(1, { stiffness: 220, damping: 30 });

  const resetRotation = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }, [rotateX, rotateY, scale]);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const isTiltDisabled = !canHover || event.pointerType === 'touch';
      if (isTiltDisabled) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const isEmptyBounds = !rect.width || !rect.height;
      if (isEmptyBounds) {
        return;
      }

      const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      rotateX.set(-y * 8);
      rotateY.set(x * 8);
      scale.set(1.02);
    },
    [canHover, rotateX, rotateY, scale],
  );

  useEffect(() => {
    if (!canHover) {
      resetRotation();
    }
  }, [canHover, resetRotation]);
  return (
    <Flex
      w="100%"
      maw={rem(420)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetRotation}
      onPointerCancel={resetRotation}
      style={{ perspective: '1000px' }}>
      <MotionFlex
        pos="relative"
        w="100%"
        bdrs={rem(32)}
        bg="dark.1"
        bd="1px solid dark.2"
        style={{
          aspectRatio: '4 / 5',
          overflow: 'hidden',
          rotateX,
          rotateY,
          scale,
        }}>
        <Image
          src={cardImgSrc}
          alt={alt}
          fill
          sizes="(max-width: 479px) calc(100vw - 40px), 420px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <Flex
          pos="absolute"
          inset={0}
          p={rem(24)}
          direction="column"
          justify="flex-end"
          gap={rem(8)}
          style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(8, 7, 6, 0.95) 100%)' }}>
          <Text fz={rem(10)} c="dark.6" lts="0.14em">
            {YEOJUN_CONSTANT.role[0].toUpperCase()}
          </Text>
          <Text fz={rem(22)} c="dark.7" fw={600}>
            {YEOJUN_CONSTANT.en_name}
          </Text>
        </Flex>
      </MotionFlex>
    </Flex>
  );
});
