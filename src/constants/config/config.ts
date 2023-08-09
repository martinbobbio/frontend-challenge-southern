// Assets
import {
  curiosityDefault,
  logoMBDark,
  logoMBLight,
  logoNASA,
  opportunityDefault,
  spiritDefault,
} from '@/assets';
// Constants
import { SupportedPages } from '@/constants';
import {
  faCircleExclamation,
  faRocket,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
// Libreries
import dayjs from 'dayjs';

const BRANDING = {
  header: {
    logo: logoNASA,
  },
  footer: {
    light: logoMBLight,
    dark: logoMBDark,
  },
};
const CARDS = [
  {
    title: 'Curiosity',
    redirect: SupportedPages.Curiosity,
    image: curiosityDefault,
    description:
      'We delve into uncharted realms, quenching the thirst for discovery with each pixel captured by NASAs cosmic lens.',
  },
  {
    title: 'Opportunity',
    redirect: SupportedPages.Opportunity,
    image: opportunityDefault,
    description:
      'The orbital camera captures celestial moments, showcasing boundless opportunities in the expanse of space.',
  },
  {
    title: 'Spirit',
    redirect: SupportedPages.Spirit,
    image: spiritDefault,
    description:
      'NASAs images mirror the human spirit of courage and relentless quest for the unknown in the cosmos.',
  },
];

const BASIC_COLORS = {
  white: {
    main: '#ffffff',
  },
  black: {
    main: '#0b0c18',
  },
  gray: {
    main: '#6b7688',
  },
};

const FONT_SIZES = {
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '24px',
  xxl: '30px',
  xxxl: '64px',
};

const LINE_HEIGHTS = {
  sm: '20px',
  md: '22px',
  lg: '26px',
  xl: '32px',
  xxl: '38px',
  xxxl: '70px',
};

const FONT_WEIGHTS = {
  low: 400,
  medium: 700,
  high: 1000,
};

const BOX_SHADOWS = {
  low: '0 2px 4px rgba(0, 0, 0, 0.2)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
  high: '0 8px 10px rgba(0, 0, 0, 0.4)',
};

const BASIC_PROPS = {
  fontSize: FONT_SIZES,
  lineHeight: LINE_HEIGHTS,
  fontWeight: FONT_WEIGHTS,
  boxShadow: BOX_SHADOWS,
};

const OPTIONS_FILTER_CAMERAS = {
  curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
  opportunity: ['FHAZ', 'RHAZ', 'PANCAM', 'MINITES', 'NAVCAM'],
  spirit: ['FHAZ', 'RHAZ', 'PANCAM', 'MINITES', 'NAVCAM'],
};

const SITES = {
  react: 'https://legacy.reactjs.org/',
  vite: 'https://vitejs.dev/',
  githubVersion:
    'https://github.com/martinbobbio/frontend-challenge-southern/tree/',
};

const EMPTY_STATES = {
  favorites: {
    icon: faStarHalfStroke,
    title: 'You have no favorites',
    description:
      'To add a photo to favorites, click on the add to favorites button in the list',
  },
  rover: {
    icon: faRocket,
    title: 'No photos found',
    description: 'Check the filters and try again',
  },
  error: {
    icon: faCircleExclamation,
    title: 'Error',
    description: 'An error has occurred, please try again in a moment.',
  },
};

export default {
  branding: BRANDING,
  cards: CARDS,
  sites: SITES,
  emptyStates: EMPTY_STATES,
  forms: {
    cameras: OPTIONS_FILTER_CAMERAS,
    defaultFilters: {
      date: dayjs(),
      sol: 1000,
    },
  },
  theme: {
    fontSize: FONT_SIZES,
    lineHeight: LINE_HEIGHTS,
    fontWeight: FONT_WEIGHTS,
    boxShadow: BOX_SHADOWS,
    light: {
      ...BASIC_PROPS,
      palette: {
        ...BASIC_COLORS,
        primary: {
          main: '#5c6bc0',
        },
        default: {
          main: '#030303',
          background1: '#edf2f8',
          background2: '#ffffff',
        },
        elements: {
          header: {
            main: 'hsla(0,0%,100%,.25)',
            border: 'hsla(0,0%,100%,.18)',
          },
        },
      },
    },
    dark: {
      ...BASIC_PROPS,
      palette: {
        ...BASIC_COLORS,
        primary: {
          main: '#3949ab',
        },
        default: {
          main: '#edf2f8',
          background1: '#191624',
          background2: '#0b0c18',
        },
        elements: {
          header: {
            main: 'rgba(0, 0, 0, 0.25)',
            border: 'hsla(0, 0%, 5%, 0.18)',
          },
        },
      },
    },
  },
};
