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
        colorFromPallete="main.tertiary"
      >
        My articles
      </Text>
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
    </Section>
  );
}

export default ArticlesSection;
