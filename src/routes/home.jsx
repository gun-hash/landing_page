import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Landing Page for startup"
        content="This landing page works for all the devices, so you only have to setup it once, and get beautiful results forever."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
