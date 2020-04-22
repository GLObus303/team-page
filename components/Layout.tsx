import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Menu } from 'components/Menu/Menu'
import { MobileHeader } from 'components/MobileHeader'

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
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
      <MobileHeader />
      <Menu />
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  </>
)
