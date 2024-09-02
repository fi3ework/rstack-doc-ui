import {
  containerStyle,
  innerContainerStyle,
} from '@rstack-dev/doc-ui/section-style';
import { type Feature, WhyRspack } from '@rstack-dev/doc-ui/why-rspack';
import './index.scss';
import CompatibleJson from './why-rspack-assets/Compatible.json';
import Compatible from './why-rspack-assets/Compatible.svg';
import FrameCheckJson from './why-rspack-assets/FrameCheck.json';
import FrameCheck from './why-rspack-assets/FrameCheck.svg';
import LightningJson from './why-rspack-assets/Lightning.json';
import Lightning from './why-rspack-assets/Lightning.svg';
import SpeedometerJson from './why-rspack-assets/Speedometer.json';
import Speedometer from './why-rspack-assets/Speedometer.svg';

const features: Feature[] = [
  {
    img: Speedometer,
    url: '/guide/start/introduction',
    title: 'FastStartup',
    description: 'FastStartupDesc',
    lottieJsonData: SpeedometerJson,
  },
  {
    img: Lightning,
    url: '/guide/start/introduction',
    title: 'LightningHMR',
    description: 'LightningHMRDesc',
    lottieJsonData: LightningJson,
  },
  {
    img: FrameCheck,
    url: '/guide/tech/react',
    title: 'FrameworkAgnostic',
    description: 'FrameworkAgnosticDesc',
    lottieJsonData: FrameCheckJson,
  },
  {
    img: Compatible,
    url: '/guide/compatibility/plugin',
    title: 'WebpackCompatible',
    description: 'WebpackCompatibleDesc',
    lottieJsonData: CompatibleJson,
  },
];

const title = 'Why Rspack?';
const description =
  'Rspack is a high performance JavaScript bundler written in Rust. It offers strong compatibility with the webpack ecosystem, allowing for seamless replacement of webpack, and provides lightning fast build speeds.';

export const WhyRspackStory = () => {
  return (
    <section className={containerStyle} key={title}>
      <div className={innerContainerStyle}>
        <WhyRspack
          features={features}
          title={title}
          description={description}
        />
      </div>
    </section>
  );
};

// TODO: img
const rsbuildFeatures = [
  {
    img: '🚀',
    url: '', // 由于您没有提供每个特性的 URL，这里先留空
    title: 'Rspack-based',
    description:
      'Using Rspack to bring you the ultimate development experience.',
  },
  {
    img: '🦄',
    url: '',
    title: 'Batteries Included',
    description:
      'Out-of-the-box integration with the most practical building features in the ecosystem.',
  },
  {
    img: '🎯',
    url: '',
    title: 'Framework Agnostic',
    description: 'Supports React, Vue, Svelte, and more frameworks.',
  },
  {
    img: '🛠️',
    url: '',
    title: 'Deep Optimization',
    description:
      'Automatically optimize static assets to maximizing production performance.',
  },
  {
    img: '🎨',
    url: '',
    title: 'Highly Pluggable',
    description:
      'Comes with a lightweight plugin system and a set of high quality plugins.',
  },
  {
    img: '🍭',
    url: '',
    title: 'Easy to Configure',
    description:
      'Start with zero configuration and everything is configurable.',
  },
];

export const WhyRspackStoryWithoutFirstCardAndLottie = () => {
  return (
    <section className={containerStyle} key={title}>
      <div className={innerContainerStyle}>
        <WhyRspack features={rsbuildFeatures} />
      </div>
    </section>
  );
};

export default {
  title: 'WhyRspack',
};
