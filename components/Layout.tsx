import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Menu } from 'components/Menu/Menu'
import { MobileHeader } from 'components/Menu/MobileHeader'
import { MAX_CONTENT_WIDTH } from 'constants/theme'

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

interface LayoutProps {
  children: ReactNode
  metaTitle?: string
  metaDescription?: string
}

export const Layout: FC<LayoutProps> = ({
  children,
  metaTitle = 'TeamPage',
  metaDescription = 'Awesome Team',
}) => (
  <>
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <MobileHeader />
      <Menu />
    </PageWrapper>
  </>
)
