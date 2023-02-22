import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Sobre">
          <p>
            Holly é uma página de destino HTML/CSS gratuita projetada e desenvolvida por
            @pacovitiello e @DavidePacilio!
          </p>
          <p>
            Holly é adequado para todos os tipos de startups, é facilmente
            personalizável e pode ser baixado para uso pessoal e comercial.
          </p>
          <p>Este modelo é distribuído sob a licença MIT.</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="https://picsum.photos/420/640?grayscale"
            alt="Lorem Picsum"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
