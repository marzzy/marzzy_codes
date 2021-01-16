import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from 'components/layout/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import PostCards from 'components/postCards/postCards'
import { MinimalPostsData } from 'types/post'

export default function Home({
  allPostsData
}: {allPostsData: MinimalPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Experienced JavaScript Front-end web Developer.
          <br/>
          Skilled in Responsive Web Design, JavaScript, React.js, Webpack, and SASS.
          <br/>
          Strong engineering professional with a Bachelor of Science - BS focused in Computer Software Engineering. 
          <br/>
          Wildly enthusiastic about having the opportunity for advancement and learning more. 
        </p>
      </section>
      <PostCards allPostsData={allPostsData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
