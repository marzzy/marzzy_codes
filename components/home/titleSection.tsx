import Section from 'components/section/section';
import { myInfo, homeSectionsIds } from 'components/constants';
import { Text } from 'components/shared';
import useStyles from './titleSectionStyles';
import { SectionProps } from './type';

const {
  fname, sname, photo, jobTitle,
} = myInfo;

// TODO: use nextjs img
function TitleSection(props: SectionProps) {
  const { sectionId } = props;
  const {
    root, infoContainer, heroImgContainer,
  } = useStyles();

  return (
    <Section
      sectionTag="header"
      styledClass={root}
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
    >
      <div className={infoContainer}>
        <Text
          tagName="h1"
          size={60}
        >
          {fname}
          <br />
          {sname}
        </Text>
        <Text
          tagName="h2"
          size={30}
          colorFromPallete="main.tertiary"
        >
          {jobTitle}
        </Text>
      </div>
      <div className={heroImgContainer}>
        <img
          src={photo}
          alt={`${fname} ${sname}`}
        />
      </div>
    </Section>
  );
}

export default TitleSection;
