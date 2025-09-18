import { useLanguage } from "./LanguageProvider";
import PoolContainer from "./PoolContainer";
import { Link } from "react-router-dom";

import Image from '../assets/home-excavation-1200.jpg';

import One from '../assets/mova/8x10.webp';
import OnePDF from '../assets/mova/8x10.pdf';

import TwoPDF from '../assets/mova/8x16.pdf';

import Three from '../assets/mova/9x24.webp';
import ThreePDF from '../assets/mova/9x24.pdf';

import Four from '../assets/mova/9x24-a.webp';
import FourPDF from '../assets/mova/9x24-a.pdf';

import Five from '../assets/mova/9x28.webp';
import FivePDF from '../assets/mova/9x28.pdf';

import Six from '../assets/mova/10x20.webp';
import SixPDF from '../assets/mova/10x20.pdf';

import Seven from '../assets/mova/11x19.webp';
import SevenPDF from '../assets/mova/11x19.pdf';

import Eight from '../assets/mova/11x23.webp';
import EightPDF from '../assets/mova/11x23.pdf';

import Nine from '../assets/mova/11x25.webp';
import NinePDF from '../assets/mova/11x25.pdf';

import TenPDF from '../assets/mova/wading.pdf';

import Eleven from '../assets/mova/12x20.webp';
import ElevenPDF from '../assets/mova/12x20.pdf';

import Twelve from '../assets/mova/12x22.webp';
import TwelvePDF from '../assets/mova/12x22.pdf';

import Thirteen from '../assets/mova/12x24.webp';
import ThirteenPDF from '../assets/mova/12x24.pdf';

import Fourteen from '../assets/mova/12x24-a.webp';
import FourteenPDF from '../assets/mova/12x24-a.pdf';

import Fifteen from '../assets/mova/12x26.webp';
import FifteenPDF from '../assets/mova/12x26.pdf';

import Sixteen from '../assets/mova/12x28.webp';
import SixteenPDF from '../assets/mova/12x28.pdf';

import Seventeen from '../assets/mova/12x30.webp';
import SeventeenPDF from '../assets/mova/12x30.pdf';

// import Eighteen from '../assets/mova/12x33.webp';
import EighteenPDF from '../assets/mova/12x33.pdf';

import Nineteen from '../assets/mova/12x34.webp';
import NineteenPDF from '../assets/mova/12x34.pdf';

// import Twenty from '../assets/mova/12x26.webp';
import TwentyPDF from '../assets/mova/12x37.pdf';

// import TwentyOne from '../assets/mova/13x27.webp';
import TwentyOnePDF from '../assets/mova/13x27.pdf';

import TwentyTwo from '../assets/mova/14x28.webp';
import TwentyTwoPDF from '../assets/mova/14x28.pdf';

const Mova = () => {
  const { langNum } = useLanguage();

  const pools = [
    {
      title: ['8x10', '8x10'],
      desc: [
        'Cette piscine creusée en fibre de verre est idéale pour les espaces plus intimes, offrant un bassin de détente de type « spa » parfaitement adapté à vos besoins de relaxation. Mesurant seulement 8 pieds par 10 pieds, elle est aussi offerte en version spa froid avec jets, et spa chaud avec jets et chauffe-eau.',
        'This in-ground fiberglass pool is ideal for more intimate spaces, offering a “spa-like” relaxation pool perfectly suited to your relaxation needs. Measuring just 8 feet by 10 feet, it\'s also available as a cold spa with jets, and a hot spa with jets and water heater.'
      ],
      image: One,
      pdf: OnePDF,
      dimensions: [['3\'9"', '8\'x10\'']],
    },
    {
      title: ['8x16', '8x16'],
      desc: [
        'Découvrez le plaisir d\'une baignade rafraîchissante avec notre piscine creusée en fibre de verre de format 8x16. Parfaite pour les petits terrains, elle transforme chaque été en une oasis de fraîcheur, même lors des journées les plus chaudes.',
        'Discover the pleasure of a refreshing swim with our 8x16 fiberglass in-ground pool. Perfect for small lots, it turns every summer into a cool oasis, even on the hottest days.'
      ],
      image: Image,
      pdf: TwoPDF,
      dimensions: [['4\'9"', '8\'x16\'']],
    },
    {
      title: ['9x24', '9x24'],
      desc: [
        'Plongez dans le confort et le style avec notre piscine creusée en fibre de verre de format 9x24. Idéale pour créer un espace de baignade élégant et fonctionnel, elle offre une expérience rafraîchissante et luxueuse tout en optimisant votre espace extérieur.',
        'Immerse yourself in comfort and style with our 9x24 fiberglass in-ground pool. Ideal for creating an elegant, functional bathing space, it offers a refreshing, luxurious experience while optimizing your outdoor space.'
      ],
      image: Three,
      pdf: ThreePDF,
      dimensions: [['4\'10"', '9\'x24\'']],
    },
    {
      title: ['9x24 - Couloir athlétique', '9x24 - Athletic lap pool'],
      desc: [
        'Le couloir athlétique en fibre de verre de Mova est conçu pour vous permettre de vous entraîner dans l\'eau. Le Badu®Jet Turbo transformera votre couloir de nage 9\' x 24\' en véritable centre d\'entraînement aquatique grâce à son jet puissant, mais extrêmement silencieux, et sa vitesse variable. Ce système unique de propulsion d\'eau autonome fournira un jet d\'eau constant qui vous permettra non seulement de nager sur place, mais aussi de vous entraîner contre une résistance ou de marcher sur place dans l\'eau. De plus, un tapis Aquacove au visuel conçu sur mesure est installé au fond du couloir pour aider le nageur à rester bien positionné lors de la nage.',
        'This unique self-contained water propulsion system will provide a constant jet of water that will allow you to swim in place, to train against resistance or walk in place in the water. What\'s more, a custom-designed visual Aquacove covering is installed at the bottom of the lane to help the swimmer stay well-positioned while swimming.'
      ],
      image: Four,
      pdf: FourPDF,
      dimensions: [['4\'10"', '9\'7"x24\'3"']],
    },
    {
      title: ['Couloir de nage', 'Lap pool'],
      desc: [
        'Découvrez le couloir de nage en fibre de verre 9x28, l\'alliance parfaite entre élégance, fonctionnalité et confort. Conçu pour les passionnés de natation et les amateurs de design raffiné, il vous invite à profiter d\'une expérience de baignade inégalée.',
        'Discover the 9x28 fiberglass swim lane, the perfect blend of elegance, functionality and comfort. Designed for swimming enthusiasts and lovers of refined design, it invites you to enjoy an unparalleled swimming experience.'
      ],
      image: Five,
      pdf: FivePDF,
      dimensions: [['4\'10"', '9\'x28\', 9\'x31\', 9\'x34\', 9\'x37\'']],
    },
    {
      title: ['10x20', '10x20'],
      desc: [
        'Transformez votre espace extérieur en un havre de détente avec notre piscine creusée en fibre de verre de format 10x20. Conçue pour allier luxe et fonctionnalité, elle est dotée de marches en coin élégantes et d’un banc intégré, parfaits pour vous détendre ou accueillir vos invités.',
        'Transform your outdoor space into a haven of relaxation with our 10x20 fiberglass in-ground pool. Designed to combine luxury and functionality, it features elegant corner steps and an integrated bench, perfect for relaxing or entertaining guests.'
      ],
      image: Six,
      pdf: SixPDF,
      dimensions: [['4\'10"', '10\'x20\'']],
    },
    {
      title: ['11x19', '11x19'],
      desc: [
        'Découvrez l\'élégance intemporelle avec notre piscine creusée en fibre de verre de format 11x19. Ses proportions classiques se marient parfaitement avec un espace dédié aux marches et bancs, conçu pour votre confort et votre détente.',
        'Discover timeless elegance with our 11x19 fiberglass in-ground pool. Its classic proportions blend perfectly with a space dedicated to steps and benches, designed for your comfort and relaxation.'
      ],
      image: Seven,
      pdf: SevenPDF,
      dimensions: [['4\'10"', '11\'x19\'']],
    },
    {
      title: ['11x23', '11x23'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 11x23, conçue pour optimiser chaque mètre carré de votre espace extérieur. Avec ses dimensions généreuses, elle offre un vaste espace de baignade pour des moments de plaisir aquatique sans limite.',
        'Discover the 11x23 fiberglass in-ground pool, designed to optimize every square meter of your outdoor space. With its generous dimensions, it offers a vast bathing space for unlimited moments of aquatic pleasure.'
      ],
      image: Eight,
      pdf: EightPDF,
      dimensions: [['4\'9"', '11\'x23\'']],
    },
    {
      title: ['11x25', '11x25'],
      desc: [
        'Découvrez l\'harmonie parfaite entre détente et divertissement avec notre piscine creusée en fibre de verre de format 11x25. Ce modèle spacieux, équipé de marches élégantes et de bancs intégrés aux côtés et à l\'extrémité, est conçu pour offrir un équilibre idéal entre zones de relaxation et espaces de jeu.',
        'Discover the perfect harmony between relaxation and entertainment with our 11x25 fiberglass in-ground pool. This spacious model, equipped with elegant steps and integrated benches at the sides and end, is designed to offer the ideal balance between relaxation and play areas.'
      ],
      image: Nine,
      pdf: NinePDF,
      dimensions: [['4\'10"', '11\'x25\'']],
    },
    {
      title: ['12x12 - Pataugeuse', '12x12 - Wading pool'],
      desc: [
        'Découvrez la pataugeuse creusée en fibre de verre de format 12x12, idéale pour les jeunes enfants ou les adultes en quête d\'un moment de détente dans l\'eau. Avec sa profondeur de 18 pouces, elle offre un espace sécurisé et confortable pour s\'amuser ou se relaxer.',
        'Discover the 12x12 fiberglass wading pool, ideal for young children or adults looking for a relaxing moment in the water. With its 18-inch depth, it offers a safe, comfortable space for fun or relaxation.'
      ],
      image: Image,
      pdf: TenPDF,
      dimensions: [['18"', '12\'x12\'']],
    },
    {
      title: ['12x20', '12x20'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x20, conçue pour allier espace et confort. Avec ses marches élégantes et ses bancs latéraux intégrés, cette piscine offre le cadre idéal pour vous détendre et profiter de moments de relaxation.',
        'Discover the 12x20 fiberglass in-ground pool, designed to combine space and comfort. With its elegant steps and integrated side benches, this pool offers the ideal setting for relaxing and unwinding.'
      ],
      image: Eleven,
      pdf: ElevenPDF,
      dimensions: [['4\'10"', '12\'x20\'']],
    },
    {
      title: ['12x22', '12x22'],
      desc: [
        'Découvrez le modèle unique de piscine creusée en fibre de verre de format 12x22, qui allie innovation et luxe. Dotée de marches latérales élégantes et de grands bancs intégrés, elle offre un confort optimal pour se détendre. Pour une expérience encore plus raffinée, elle peut être équipée de jets de massage au niveau des bancs, transformant chaque baignade en un véritable moment de relaxation et de bien-être.',
        'Discover the unique 12x22 fiberglass in-ground pool that combines innovation and luxury. Featuring elegant side steps and large integrated benches, it offers optimum comfort for relaxing. For an even more refined experience, it can be fitted with massage jets.'
      ],
      image: Twelve,
      pdf: TwelvePDF,
      dimensions: [['4\'10"', '12\'x22\'']],
    },
    {
      title: ['12x24', '12x24'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x24, conçue pour allier espace et confort. Avec ses marches élégantes et ses bancs latéraux intégrés, cette piscine offre le cadre idéal pour vous détendre et profiter de moments de relaxation.',
        'Discover the 12x24 fiberglass in-ground pool, designed to combine space and comfort. With its elegant steps and integrated benches, this pool offers the ideal setting for relaxing and unwinding.'
      ],
      image: Thirteen,
      pdf: ThirteenPDF,
      dimensions: [['', '12\'x24\'']],
    },
    {
      title: ['12x24 - Slope', '12x24 - Slope'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x24, conçue pour offrir à la fois fonctionnalité et élégance. Son fond incliné est particulièrement apprécié des passionnés de natation, tandis que les marches en coin et les bancs intégrés à l\'extrémité vous garantissent un confort ultime.',
        'This 12x24 fiberglass in-ground pool features a sloping bottom that\'s particularly popular with swimmers.'
      ],
      image: Fourteen,
      pdf: FourteenPDF,
      dimensions: [['5\'5"', '12\'24\'']],
    },
    {
      title: ['12x26 avec terrasse', '12x26 with sun ledge'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x26, la piscine mesurant 12x20, accompagnée d\'un espace terrasse de 6 pieds, pour un total de 12x26. Ce design unique vous propose un vaste espace de détente dans une zone peu profonde, idéal pour se relaxer ou permettre aux jeunes enfants de jouer en toute sécurité.',
        'Discover the 12x26 fiberglass in-ground pool, a 12x20 pool with a 6-foot terrace area, for a total of 12x26. This unique design offers you a vast relaxation area in a shallow zone, ideal for relaxing or allowing young children to play in complete safety.'
      ],
      image: Fifteen,
      pdf: FifteenPDF,
      dimensions: [['4\'10"', '12\'x26\'']],
    },
    {
      title: ['12x28', '12x28'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x28, conçue pour allier espace et confort. Avec ses marches élégantes et ses bancs latéraux intégrés, cette piscine offre le cadre idéal pour vous détendre et profiter de moments de relaxation.',
        'Discover the 12x28 fiberglass in-ground pool, designed to combine space and comfort. With its elegant steps and integrated side benches, this pool offers the ideal setting for relaxing and unwinding.'
      ],
      image: Sixteen,
      pdf: SixteenPDF,
      dimensions: [['4\'10"', '12\'x28\'']],
    },
    {
      title: ['12x30 avec terrasse', '12x30 with sun ledge'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x30, la piscine mesurant 12x24, accompagnée d\'un espace terrasse de 6 pieds, pour un total de 12x30. Ce design unique vous propose un vaste espace de détente dans une zone peu profonde, idéal pour se relaxer ou permettre aux jeunes enfants de jouer en toute sécurité.',
        'Discover the 12x30 fiberglass in-ground pool, a 12x24 pool with a 6-foot terrace area, for a total of 12x30. This unique design offers you a vast relaxation area in a shallow zone, ideal for relaxing or allowing young children to play in complete safety.'
      ],
      image: Seventeen,
      pdf: SeventeenPDF,
      dimensions: [['4\'10"', '12\'30\'']],
    },
    {
      title: ['12x33 avec terrasse', '12x33 with sun ledge'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x33, la piscine mesurant 12x24, accompagnée d\'un espace terrasse de 9 pieds, pour un total de 12x33. Ce design unique vous propose un vaste espace de détente dans une zone peu profonde, idéal pour se relaxer ou permettre aux jeunes enfants de jouer en toute sécurité.',
        'Discover the 12x33 fiberglass in-ground pool, a 12x24 pool with a 9-foot terrace area, for a total of 12x33. This unique design offers you a vast relaxation area in a shallow zone, ideal for relaxing or allowing young children to play in complete safety.'
      ],
      image: Image,
      pdf: EighteenPDF,
      dimensions: [['4\'10"', '12\'x33\'']],
    },
    {
      title: ['12x34 avec terrasse', '12x34 with sun ledge'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x34, la piscine mesurant 12x28, accompagnée d\'un espace terrasse de 6 pieds, pour un total de 12x34. Ce design unique vous propose un vaste espace de détente dans une zone peu profonde, idéal pour se relaxer ou permettre aux jeunes enfants de jouer en toute sécurité.',
        'Discover the 12x34 fiberglass in-ground pool, a 12x28 pool with a 6-foot terrace area, for a total of 12x34. This unique design offers you a vast relaxation area in a shallow zone, ideal for relaxing or allowing young children to play in complete safety.'
      ],
      image: Nineteen,
      pdf: NineteenPDF,
      dimensions: [['4\'10"', '12\'x34\'']],
    },
    {
      title: ['12x37 avec terrasse', '12x37 with sun ledge'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 12x37, la piscine mesurant 12x28, accompagnée d\'un espace terrasse de 9 pieds, pour un total de 12x37. Ce design unique vous propose un vaste espace de détente dans une zone peu profonde, idéal pour se relaxer ou permettre aux jeunes enfants de jouer en toute sécurité.',
        'Discover the 12x37 fiberglass in-ground pool, a 12x28 pool with a 9-foot terrace area, for a total of 12x37. This unique design offers you a vast relaxation area in a shallow zone, ideal for relaxing or allowing young children to play in complete safety.'
      ],
      image: Image,
      pdf: TwentyPDF,
      dimensions: [['', '']],
    },
    {
      title: ['13x27', '13x27'],
      desc: [
        'Découvrez la piscine creusée en fibre de verre de format 13x27, un espace généreux conçu pour maximiser votre expérience de baignade. Équipée de bancs latéraux élégants, elle offre à la fois un vaste espace pour nager et des zones confortables pour se détendre.',
        'Discover the 13x27 fiberglass in-ground pool, a generous space designed to maximize your swimming experience. Equipped with elegant side benches, it offers both ample space for swimming and comfortable areas for relaxing.'
      ],
      image: Image,
      pdf: TwentyOnePDF,
      dimensions: [['4\'9"', '12\'27\'']],
    },
    {
      title: ['14x28 - Pente', '14x28 - Slope'],
      desc: [
        'Cette piscine creusée en fibre de verre de format 14x28 possède un fond incliné. Le fond en pente douce plaira aux amateurs de nage sportive ainsi qu’à ceux qui aiment s’adonner aux jeux de piscine.',
        'This 14x28 fiberglass in-ground pool features a sloped bottom. The gently sloping bottom will appeal to both sport swimmers and those who enjoy pool games.'
      ],
      image: TwentyTwo,
      pdf: TwentyTwoPDF,
      dimensions: [['5\'11"', '14\'28\'']],
    },
  ];

  const titles = [
    {
      title: ['Collection Mova', 'Mova Collection'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ]

  return(
    <>
      <div className='title-container pools-title'>
        <h2 className='title-container-title'>{titles[0].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[0].desc[langNum]}</Link>
      </div>
      <div className='pools-pool-container'>
        {pools.map((e,i) => {
          return <PoolContainer
            title={e.title[langNum]}
            desc={e.desc[langNum]}
            image={e.image}
            model={''}
            pdf={e.pdf}
            dimensions={e.dimensions}
            key={i} />
        })}
      </div>
    </>
  )
}

export default Mova;