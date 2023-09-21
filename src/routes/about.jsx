import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          <p>
            This is a HTML/CSS landing page designed and developed by&nbsp;
            <a href="https://github.com/gun-hash" style={{ textDecoration: 'none', color: 'inherit' }}>Gun-Hash</a>.
          </p>
          <p>
            This landing page is suitable for all kind of startups and it's easily
            customizable.
          </p>
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
