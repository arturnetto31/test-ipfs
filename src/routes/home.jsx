import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Um simples template"
        content="Esse site é muito importante para conseguir aumentar seus contatos para a venda, já que consegue capturar o email de seus clientes para um possível contato futuro."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
