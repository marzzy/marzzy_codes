import Section from 'components/section/section';
import { myInfo, homeSectionsIds } from 'components/constants';
import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';

const {
  fname, sname, photo, jobTitle,
} = myInfo;

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    '&::before': {
      backgroundImage: "url('images/wireframe-polygonal-mesh-bg-01.png')",
      transform: 'rotate(180deg)',
      height: '100vh',
      display: 'block',
      width: '100%',
      content: '""',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      position: 'absolute',
      top: '-45vh',
      left: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },
  infoContainer: {
    flexGrow: 2,
    minWidth: '400px',
    padding: '0 30px',
  },
  heroImgContainer: {
    alignSelf: 'start',
    [theme.breakpoints.down('md')]: {
      alignSelf: 'center',
    },
  },
}));

// TODO: add a index.ts file and export all of the section from there
// TODO: use nextjs img
function TitleSection(props: {sectionId: string}) {
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
        <h1>
          {fname}
          <br />
          {sname}
        </h1>
        <h2>{jobTitle}</h2>
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
