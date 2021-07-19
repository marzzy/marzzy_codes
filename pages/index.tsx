import Head from 'next/head';
import { siteMeta, myInfo } from 'components/constants';

const {
  title, description, logo, favicon,
} = siteMeta;
const {
  name, photo, jobTitle, aboutMe, sideProjects, articles,
} = myInfo;

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:image"
          content={logo}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={logo} />
        <title>{title}</title>
      </Head>
      <body>
        <main>
          <section>
            <img
              src={photo}
              // className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1>{name}</h1>
            <h2>{jobTitle}</h2>
          </section>
          <section>
            <h3>about me</h3>
            {aboutMe.map(({ area, text }) => (
              <p key={area}>
                {text}
              </p>
            ))}
            <button type="button">CONTACT ME</button>
          </section>
          <section>
            <h4>My side projects</h4>
            <span>there are some of my side projects, that I work on them in my free times</span>
            <ul>
              {sideProjects.map((project) => {
                const {
                  metaName, name: projectName, coverImage, link,
                } = project;

                return (
                  <a href={link}>
                    <li key={metaName}>
                      {projectName}
                      <img src={coverImage} alt={metaName} />
                    </li>
                  </a>
                );
              })}
            </ul>
          </section>
          <section>
            <h4>My articles</h4>
            <ul>
              {articles.map((article) => {
                const {
                  metaName, title: articleTitle, coverImage, link, summary,
                } = article;

                return (
                  <a href={link}>
                    <li key={metaName}>
                      <article>
                        <img src={coverImage} alt={metaName} />
                        <p>
                          {summary}
                        </p>
                        <h5>
                          {articleTitle}
                        </h5>
                      </article>
                    </li>
                  </a>
                );
              })}
            </ul>
          </section>
          <section>
            contanct me

            {/* <address>
              <a href="mailto:marzzy.m@gmail.com">marzzy.m@gmail.com</a><br>
            </address> */}

          </section>
        </main>
      </body>
    </div>
  );
}
