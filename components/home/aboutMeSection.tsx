import Section from 'components/section/section';
import { Text } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
import useStyles from './aboutMeSectionStyles';
import { SectionProps } from './type';

const {
  aboutMe,
} = myInfo;

// TODO: style button in share components
// TODO: set background img instead of img if you can
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
      <div className={imgContainer}>
        img
      </div>
      <div className={textContainer}>
        <Text
          tagName="h3"
          size={40}
          colorFromPallete="main.tertiary"
        >
          about me
        </Text>
        {aboutMe.map(({ area, text }) => (
          <Text colorFromPallete="main.primary" key={area} size={25}>
            {text}
          </Text>
        ))}
        <button type="button">CONTACT ME</button>
      </div>
    </Section>
  );
}

export default AboutMeSection;
