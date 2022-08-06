import Head from 'next/head';
import { siteMeta, homeSectionsIds } from 'components/constants';
import {
  TitleSection, AboutMeSection, SideProjectsSection, ArticlesSection, ContactSection,
} from 'components/home';

const {
  title, description, logoLight, favicon,
} = siteMeta;

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:image"
          content={logoLight}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={logoLight} />
        <title>{title}</title>
      </Head>
      <div className="the-body-class">
        <main>
          <TitleSection sectionId={homeSectionsIds[0]} />
          <AboutMeSection sectionId={homeSectionsIds[1]} />
          {/* <SideProjectsSection sectionId={homeSectionsIds[2]} /> */}
          {/* <ArticlesSection sectionId={homeSectionsIds[3]} /> */}
          <ContactSection sectionId={homeSectionsIds[2]} />
        </main>
      </div>
    </>
  );
}
