import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
          <p>You can contact me at binitme449@gmail.com</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://images.pexels.com/photos/14979218/pexels-photo-14979218/free-photo-of-young-woman-in-sunglasses-talking-on-modern-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
