import Section from 'components/section/section';
import { Text } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
import { SectionProps } from './type';
import useStyles from './contactSectionStyles';

const {
  constactPoints,
} = myInfo;

function ContactSection(props: SectionProps) {
  const { sectionId } = props;
  const {
    root, imgContainer, textContainer, iconStyle, headerStyle,
  } = useStyles();

  return (
    <Section
      sectionTag="footer"
      styledClass={root}
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
    >
      <div className={imgContainer} />
      <div className={textContainer}>
        <Text
          tagName="h4"
          size={40}
          colorFromPallete="main.secondary"
          // tertiary
          classStyles={headerStyle}
        >
          You can reach Marzzy at
        </Text>
        <address>
          {constactPoints.map((contactPoint) => {
            const { href, label, iconName } = contactPoint;

            return (
            // eslint-disable-next-line react/jsx-no-target-blank
              <a href={href} target="_blank" title={label} key={label}>
                <i className={`i-${iconName} ${iconStyle}`} />
              </a>
            );
          })}
        </address>
      </div>
    </Section>
  );
}

export default ContactSection;
