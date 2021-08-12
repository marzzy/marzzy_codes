import Section from 'components/section/section';
import { Text } from 'components/shared';
import { myInfo, homeSectionsIds } from 'components/constants';
import { SectionProps } from './type';

const {
  constactPoints,
} = myInfo;

function ContactSection(props: SectionProps) {
  const { sectionId } = props;

  return (
    <Section
      sectionTag="footer"
      sectionId={sectionId}
      pageSectionIds={homeSectionsIds}
    >
      <Text
        tagName="h4"
        size={40}
        colorFromPallete="main.tertiary"
      >
        You can reach Marzzy at
      </Text>
      {/* TODO: add a embed link to https://www.instagram.com/p/CDJ-HEIhGSo/?utm_source=ig_web_copy_link */}
      <address>
        {constactPoints.map((contactPoint) => {
          const { href, label, iconName } = contactPoint;

          return (
          // eslint-disable-next-line react/jsx-no-target-blank
            <a href={href} target="_blank" title={label} key={label}>
              <i className={`icon-${iconName}`}>
                <span className="path1" />
                <span className="path2" />
              </i>
            </a>
          );
        })}
      </address>
    </Section>
  );
}

export default ContactSection;
