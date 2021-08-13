import Section from 'components/section/section';
import { Text, Button } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
import useStyles from './aboutMeSectionStyles';
import { SectionProps } from './type';

const {
  aboutMe,
} = myInfo;

function AboutMeSection(props: SectionProps) {
  const { sectionId } = props;
  const {
    root, imgContainer, textContainer,
  } = useStyles();

  return (
    <Section
      styledClass={root}
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
      isSecondaryBg
    >
      <div className={imgContainer} />
      <div className={textContainer}>
        <Text
          tagName="h3"
          size={40}
          colorFromPallete="accents.tertiary"
        >
          about me
        </Text>
        {aboutMe.map(({ area, text }) => (
          <Text colorFromPallete="accents.secondary" key={area} size={25}>
            {text}
          </Text>
        ))}
        <Button styleType="secondary">CONTACT ME</Button>
      </div>
    </Section>
  );
}

export default AboutMeSection;
