import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function SupportPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Support">
          <p>Add your support content here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
