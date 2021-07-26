import Section from 'components/section/section';
import { myInfo, homeSectionsIds } from 'components/constants';
import { Text } from 'components/shared';
import useStyles, { Li } from './sideProjectsSectionStyles';

const {
  sideProjects,
} = myInfo;

// TODO: set background img instead of img if you can
function SideProjectsSection(props: {sectionId: string}) {
  const { sectionId } = props;
  const {
    root, descriptionContainer, liContainer, header, contentcContainer, liStyle,
  } = useStyles();

  return (
    <Section
      styledClass={root}
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
    >
      <Text
        tagName="h3"
        size={40}
        colorFromPallete="main.tertiary"
        classStyles={header}
      >
        My Sides Projects
      </Text>
      <div className={contentcContainer}>
        <div className={descriptionContainer}>
          <Text
            tagName="span"
            size={15}
            colorFromPallete="main.secondary"
          >
            there are some of my side projects, that I work on them in my free times
          </Text>
        </div>
        <ul className={liContainer}>
          {sideProjects.map((project) => {
            const {
              metaName, name: projectName, coverImage, link,
            } = project;

            return (
              <Li className={liStyle} key={metaName}>
                <a href={link}>
                  <Text colorFromPallete="main.secondary" size={25}>
                    {projectName}
                  </Text>
                  <img src={coverImage} alt={metaName} />
                </a>
              </Li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default SideProjectsSection;
