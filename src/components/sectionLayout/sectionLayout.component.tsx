'use client';

import { Flex, FlexProps } from '@mantine/core';
import { memo, ReactNode, Ref } from 'react';

type ISectionLayout = {
  ref?: Ref<HTMLDivElement>;
  isContentCentered?: boolean;
  isFullHeight?: boolean;
  children: ReactNode;
} & FlexProps;

export const SectionLayout = memo<ISectionLayout>(
  ({ isContentCentered, isFullHeight = true, children, style, ...rest }) => {
    return (
      <Flex
        w="100%"
        mih={isFullHeight ? '100vh' : 'auto'}
        justify={isContentCentered ? 'center' : 'flex-start'}
        align={isContentCentered ? 'center' : 'flex-start'}
        style={style}
        {...rest}>
        {children}
      </Flex>
    );
  },
);
