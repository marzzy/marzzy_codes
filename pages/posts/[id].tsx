/* eslint-disable react/no-danger */
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Layout from 'components/layout/layout';
import { getAllPostIds, getPostData } from 'lib/posts';
import Date from 'components/postCards/date';
import utilStyles from 'styles/utils.module.css';

export default function Post({
  postData,
}: {
  postData: {
    title: string,
    date: string,
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="robots" content="noarchive" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  { params: { id } }: { params: { id: string }},
) => {
  const postData = await getPostData(id);

  return {
    props: {
      postData,
    },
  };
};
