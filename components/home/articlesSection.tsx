/* eslint-disable @next/next/no-img-element */
import Section from 'components/section/section';
import { Text } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
import { SectionProps } from './type';

const {
  articles,
} = myInfo;

function ArticlesSection(props: SectionProps) {
  const { sectionId } = props;

  return (
    <Section
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
      isSecondaryBg
    >
      <Text
        tagName="h3"
        size={40}
        colorFromPallete="accents.tertiary"
      >
        My articles
      </Text>
      <ul>
        {articles.map((article) => {
          const {
            metaName, title: articleTitle, coverImage, link, summary,
          } = article;

          return (
            <li key={metaName}>
              <a href={link}>
                <article>
                  <img src={coverImage} alt={metaName} />
                  <Text colorFromPallete="accents.secondary">
                    {summary}
                  </Text>
                  <h5>
                    {articleTitle}
                  </h5>
                </article>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default ArticlesSection;
