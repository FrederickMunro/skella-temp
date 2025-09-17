import BlogBox from './BlogBox';
import Image from '../assets/home-pools-1200.jpg';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

const Blog = () => {
  const { langNum } = useLanguage();
  
  const blogs = [
    {
      title: ['Les Tendances en Aménagement Paysager pour 2024', 'Landscaping Trends for 2024'],
      desc:  [
        'Créez un Jardin de Luxe Adapté à Votre Style',
        'Create a Luxurious Garden Tailored to Your Style'
      ],
      story:  [
        `L'année 2024 transforme vos rêves d'extérieur en réalité. En matière d'aménagement paysager, la tendance est au luxe, à la fonctionnalité et à l'harmonie avec la nature. Les pavés uni sont l'un des matériaux phares cette année, offrant une base élégante et durable pour vos allées, terrasses et espaces autour de la piscine. La palette de couleurs varie du gris profond au sable chaud, permettant de personnaliser votre espace extérieur pour qu'il s'harmonise parfaitement avec votre maison.

        Pour ajouter une dimension luxueuse, pourquoi ne pas intégrer un foyer extérieur? Que ce soit pour des soirées d'hiver ou des moments conviviaux autour du feu, ce point focal transforme n'importe quel jardin. Les pergolas sur mesure apportent une touche chic et moderne tout en offrant un abri agréable contre le soleil. Vous pouvez aussi jouer sur le contraste entre matériaux : associez bois, galets et pavés uni pour une texture riche et un design intemporel.

        L'optimisation de l'espace extérieur devient essentielle pour maximiser le confort tout en minimisant l'entretien. Nos experts en aménagement paysager vous guideront pour créer un environnement extérieur qui résiste aux intempéries tout en restant beau et pratique. Découvrez comment nous pouvons transformer votre jardin en un véritable chef-d'œuvre.`,
        `The year 2024 is turning your outdoor dreams into reality. When it comes to landscaping, the trend is all about luxury, functionality, and harmony with nature. Interlocking pavers are one of the standout materials this year, providing an elegant and durable foundation for driveways, patios, and poolside areas. The color palette ranges from deep gray to warm sand, allowing you to customize your outdoor space to perfectly complement your home.
        
        To add a luxurious touch, why not incorporate an outdoor fireplace? Whether for winter evenings or cozy gatherings around the fire, this focal point transforms any garden. Custom pergolas bring a chic, modern touch while offering pleasant shade from the sun. You can also play with contrasting materials—combine wood, pebbles, and interlocking pavers for a rich texture and timeless design.

        Optimizing outdoor space is becoming essential to maximize comfort while minimizing maintenance. Our landscaping experts will guide you in creating an outdoor environment that withstands the elements while remaining both beautiful and practical. Discover how we can turn your garden into a true masterpiece.`
      ],
      image: Image,
    },
    {
      title: ['Pourquoi choisir des piscines en fibre de verre?', 'Why Choose Fiberglass Pools?'],
      desc:  [
        'Avantages et Longévité',
        'Advantages and Longevity'
      ],
      story:  [
        `Les piscines en fibre de verre sont le choix par excellence pour ceux qui recherchent une piscine esthétique, durable et facile à entretenir. En plus de leur surface lisse et résistante aux algues, les piscines en fibre de verre s'intègrent parfaitement à un aménagement paysager moderne. Ajoutez des pavés uni autour de votre piscine pour créer un espace élégant et sécurisé. Ces pavés sont non seulement esthétiques mais aussi antidérapants, parfaits pour un environnement autour de l'eau.

        La piscine en fibre de verre offre une rapidité d'installation que les piscines en béton n'égaleront jamais. La finition impeccable et l'absence de joints évitent les fissures et la nécessité d'une maintenance fréquente. La gamme de couleurs et de formes de piscines en fibre de verre vous permet de personnaliser votre projet selon vos goûts. En optant pour des matériaux de qualité autour de votre piscine, comme les pavés uni ou le bois composite, vous créez un environnement qui allie luxe et fonctionnalité.`,
        `Fiberglass pools are the ideal option for those seeking an aesthetic, durable, and easy-to-maintain swimming pool. With their smooth, algae-resistant surface, fiberglass pools seamlessly blend into modern landscaping. Enhance your pool area with interlocking pavers to create a stylish and secure space. These pavers are not only visually appealing but also slip-resistant, making them perfect for a water-side environment.
        
        A fiberglass pool offers an installation speed that concrete pools simply can\'t match. Its flawless finish and seamless design prevent cracks and reduce the need for frequent maintenance. With a wide range of colors and shapes available, fiberglass pools allow you to customize your project to fit your style. By choosing high-quality materials around your pool, such as interlocking pavers or composite wood, you create an outdoor space that perfectly balances luxury and functionality.`
      ],
      image: Image,
    },
    {
      title: ['Étapes de Conception d\'un Projet de Piscine', 'Steps in Designing a Pool Project'],
      desc:  [
        'De la Vision à la Réalité',
        'From Vision to Reality'
      ],
      story:  [
        `La conception d'une piscine va bien au-delà du choix de sa forme ou de sa taille. Chaque étape doit être soigneusement planifiée pour assurer une intégration parfaite avec votre espace extérieur et maximiser son esthétique. D'abord, l'analyse du terrain est cruciale. Ensuite, vient le choix de la piscine en fibre de verre, un choix moderne et pratique pour sa facilité d'entretien et sa rapidité d'installation.

        Une fois votre piscine choisie, l'aménagement autour de celle-ci devient essentiel. Les pavés uni autour de la piscine, associés à des zones de détente comme des patios en bois ou composite, créent une ambiance accueillante et sécurisée. L'ajout d'un foyer extérieur ou d'une pergola permet de prolonger l'utilisation de votre espace, même lorsque le soleil se couche.

        L'intégration de clôtures personnalisées, que ce soit en verre, composite ou ornemental, vous garantit à la fois sécurité et design. Chaque élément, du choix des matériaux à l'aménagement des espaces, est pensé pour un résultat optimal, alliant luxe et fonctionnalité. Notre service clé en main vous accompagne à chaque étape, du design à la réalisation.`,
        `Creating a pool goes far beyond choosing its shape or size. Every step must be carefully planned to ensure seamless integration with your outdoor space while maximizing aesthetics. First, a thorough site analysis is essential. Then comes the selection of a fiberglass pool, a modern and practical choice known for its easy maintenance and quick installation.

        Once your pool is chosen, the surrounding landscape becomes just as important. Interlocking pavers around the pool, combined with relaxation areas such as wooden or composite patios, create a welcoming and secure ambiance. Adding an outdoor fireplace or a pergola allows you to extend the enjoyment of your space even after sunset.

        Custom fencing—whether glass, composite, or ornamental—ensures both safety and style. Every element, from material selection to space planning, is designed for an optimal balance of luxury and functionality. Our turnkey service supports you at every stage, from design to completion, ensuring a flawless result.`
      ],
      image: Image
    },
  ];

  const titles = [
    {
      title: ['Conseils et tendances extérieurs', 'Outdoor tips and trends'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ];
  
  return(
    <div className='blog-post-container'>
      <div className='title-container landscaping-title'>
        <h2 className='title-container-title'>{titles[0].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[0].desc[langNum]}</Link>
      </div>
      {blogs.map((blog, index) => {
        return <BlogBox
                  title={blog.title[langNum]}
                  desc={blog.desc[langNum]}
                  story={blog.story[langNum]}
                  image={blog.image}
                  key={index} />
      })}
    </div>
  )
}

export default Blog;