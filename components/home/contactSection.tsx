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
    root, imgContainer, textContainer, iconStyle, headerStyle, socialWrapper, socialLinks,
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
          classStyles={headerStyle}
        >
          Get in touch with me
        </Text>
        <address className={socialWrapper}>
          {constactPoints.map((contactPoint) => {
            const { href, label, iconName } = contactPoint;

            return (
            // eslint-disable-next-line react/jsx-no-target-blank
              <a
                className={socialLinks}
                href={href}
                target="_blank"
                title={label}
                key={label}
              >
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
