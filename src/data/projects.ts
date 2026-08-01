import helpkitCover from '../assets/projects/helpkit/cover.jpg';
import redreachCover from '../assets/projects/redreach/cover.jpg';
import juicyCover from '../assets/projects/juicy/cover.png';
import filmtypesCover from '../assets/projects/filmtypes/cover.jpg';
import nomadkitCover from '../assets/projects/nomadkit/cover.jpg';
import productVideoExamplesCover from '../assets/projects/product-video-examples/cover.jpg';
import storePreviewerCover from '../assets/projects/storepreviewer/cover.jpg';
import productFlairCover from '../assets/projects/productflair/cover.jpg';
import caseToolsCover from '../assets/projects/casetools/cover.jpg';

export const projects = [
  {
    name: 'HelpKit',
    description: 'The no-code tool that turns Notion pages into a professional help center and documentation site.',
    founded: '2021',
    type: 'SaaS',
    url: 'https://www.helpkit.so/',
    cover: helpkitCover,
    alt: 'HelpKit documentation product interface',
  },
  {
    name: 'Redreach',
    description: 'Leading marketing tool for finding customers via inbound marketing and outbound outreach on Reddit.',
    founded: '2024',
    type: 'SaaS',
    url: 'https://redreach.ai/',
    cover: redreachCover,
    alt: 'Redreach Reddit marketing product interface',
  },
  {
    name: 'Juicy',
    description: 'A Mac menu bar app that allows you to set beautiful custom battery alerts.',
    founded: '2025',
    type: 'Mac App',
    url: 'https://getjuicy.app/',
    cover: juicyCover,
    alt: 'Juicy custom battery alert screens for macOS',
  },
  {
    name: 'Filmtypes',
    description: 'World’s largest analog film wiki that educates about the variety of analog film stocks and cameras.',
    founded: '2019',
    type: 'Directory',
    url: 'https://www.filmtypes.com/',
    cover: filmtypesCover,
    alt: 'Filmtypes analog film stock directory',
  },
  {
    name: 'NomadKit',
    description: 'My personal handwritten city guides made for busy digital nomads (Bangkok).',
    founded: '2024',
    type: 'Digital Guide',
    url: 'https://nomadkit.co/bkk',
    cover: nomadkitCover,
    alt: 'NomadKit Bangkok city guide',
  },
  {
    name: 'Product Video Examples',
    description: 'A hand-curated library of the best product video examples on the internet.',
    founded: '2023',
    type: 'Directory · Acquired',
    url: 'https://www.productvideoexamples.com/',
    cover: productVideoExamplesCover,
    alt: 'Product Video Examples curated video library',
  },
  {
    name: 'StorePreviewer',
    description: 'A design tool that helps to preview and optimize your app’s App Store presence.',
    founded: '2020',
    type: 'SaaS',
    url: 'https://www.storepreviewer.com/',
    cover: storePreviewerCover,
    alt: 'StorePreviewer App Store listing design tool',
  },
  {
    name: 'ProductFlair',
    description: 'Hand-curated Product Hunt launch examples categorized into images, videos and thumbnails.',
    founded: '2021',
    type: 'Directory',
    url: 'https://productflair.io/',
    cover: productFlairCover,
    alt: 'ProductFlair Product Hunt launch example library',
  },
  {
    name: 'CaseTools',
    description: 'An app that helps you to prepare for your upcoming management consulting job interview.',
    founded: '2018',
    type: 'Mobile App',
    url: 'https://www.casetools.app/',
    cover: caseToolsCover,
    alt: 'CaseTools management consulting interview app',
  },
] as const;
