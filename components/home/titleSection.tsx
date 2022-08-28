/* eslint-disable @next/next/no-img-element */
import Section from 'components/section/section';
import { Text, Button } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
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
          {fname}{' '}{sname}
        </Text>
        <Text
          tagName="h2"
          size={30}
          colorFromPallete="main.tertiary"
        >
          {jobTitle}
        </Text>
        <br />
        <Button styleType="primary" to="#aboutMe">Get to know me</Button>
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
