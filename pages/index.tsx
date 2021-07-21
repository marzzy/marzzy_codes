import Head from 'next/head';
import { siteMeta, myInfo } from 'components/constants';
import Section from 'components/section';

const {
  title, description, logo, favicon,
} = siteMeta;
const {
  name, photo, jobTitle, aboutMe, sideProjects, articles, constactPoints,
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
          <Section>
            <img
              src={photo}
              alt={name}
            />
            <h1>{name}</h1>
            <h2>{jobTitle}</h2>
          </Section>
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
          <footer>
            <h4>
              You can reach Marzzy at
            </h4>

            <address>
              {constactPoints.map((contactPoint) => {
                const { href, label, iconName } = contactPoint;

                return (
                  // eslint-disable-next-line react/jsx-no-target-blank
                  <a href={href} target="_blank" title={label}>
                    <i className={`icon-${iconName}`}>
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </a>
                );
              })}
            </address>

          </footer>
        </main>
      </body>
    </div>
  );
}
