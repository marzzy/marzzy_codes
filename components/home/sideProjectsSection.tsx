import Section from 'components/section/section';
import { myInfo, homeSectionsIds } from 'components/constants';
import { Text } from 'components/shared';
import useStyles, { Li } from './sideProjectsSectionStyles';
import { SectionProps } from './type';

const {
  sideProjects,
} = myInfo;

// TODO: make 'ul li' slider > https://betterprogramming.pub/build-an-image-slider-with-react-es6-264368de68e4
function SideProjectsSection(props: SectionProps) {
  const { sectionId } = props;
  const {
    root, descriptionContainer, liContainer, header, contentcContainer,
  } = useStyles();

  return (
    <Section
      styledClass={root}
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
    >
      <Text
        tagName="h3"
        size={35}
        colorFromPallete="main.tertiary"
        classStyles={header}
        verticallyCenterilize
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
              <Li key={metaName} imgSrc={coverImage}>
                <a href={link}>
                  <Text colorFromPallete="main.secondary" size={30}>
                    {projectName}
                  </Text>
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
