'use client';

import { Flex, FlexProps } from '@mantine/core';
import { motion } from 'motion/react';
import { Ref } from 'react';

type IMotionFlexBase = FlexProps & {
  ref?: Ref<HTMLDivElement>;
};

const MotionFlexBase = (props: IMotionFlexBase) => <Flex {...props} />;

export const MotionFlex = motion.create(MotionFlexBase);
