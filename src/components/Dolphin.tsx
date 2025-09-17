import { useLanguage } from "./LanguageProvider";
import PoolContainer from "./PoolContainer";
import { Link } from "react-router-dom";

import Bayfield from '../assets/dolphin/home.jpg';
import BayfieldModel from '../assets/dolphin/bayfield-model.png';
import BayfieldPDF from '../assets/dolphin/bayfield.pdf';

import Britannia from '../assets/dolphin/home.jpg';
import BritanniaModel from '../assets/dolphin/britannia-model.png';
import BritanniaPDF from '../assets/dolphin/britannia.pdf';

import Elora from '../assets/dolphin/home.jpg';
import EloraModel from '../assets/dolphin/elora-model.png';
import EloraPDF from '../assets/dolphin/elora.pdf';

import Kelowna from '../assets/dolphin/home.jpg';
import KelownaModel from '../assets/dolphin/kelowna-model.png';
import KelownaPDF from '../assets/dolphin/kelowna.pdf';

import Sandbanks from '../assets/dolphin/home.jpg';
import SandbanksModel from '../assets/dolphin/sandbanks-model.png';
import SandbanksPDF from '../assets/dolphin/sandbanks.pdf';

import Sauble from '../assets/dolphin/home.jpg';
import SaubleModel from '../assets/dolphin/sauble-model.png';
import SaublePDF from '../assets/dolphin/sauble.pdf';

import SouthHampton from '../assets/dolphin/home.jpg';
import SouthHamptonModel from '../assets/dolphin/southhampton-model.png';
import SouthHamptonPDF from '../assets/dolphin/southhampton.pdf';

import Tofino from '../assets/dolphin/home.jpg';
import TofinoModel from '../assets/dolphin/tofino-model.png';
import TofinoPDF from '../assets/dolphin/tofino.pdf';

import Darlington from '../assets/dolphin/home.jpg';
import DarlingtonModel from '../assets/dolphin/darlington-model.png';
import DarlingtonPDF from '../assets/dolphin/darlington.pdf';

import Oka from '../assets/dolphin/home.jpg';
import OkaModel from '../assets/dolphin/oka-model.png';
import OkaPDF from '../assets/dolphin/oka.pdf';

import Dover from '../assets/dolphin/home.jpg';
import DoverModel from '../assets/dolphin/dover-model.png';
import DoverPDF from '../assets/dolphin/dover.pdf';

import Wasaga from '../assets/dolphin/home.jpg';
import WasagaModel from '../assets/dolphin/wasaga-model.png';
import WasagaPDF from '../assets/dolphin/wasaga.pdf';

import Florencia from '../assets/dolphin/home.jpg';
import FlorenciaModel from '../assets/dolphin/florencia-model.png';
import FlorenciaPDF from '../assets/dolphin/florencia.pdf';

import Hopewell from '../assets/dolphin/home.jpg';
import HopewellModel from '../assets/dolphin/hopewell-model.png';
import HopewellPDF from '../assets/dolphin/hopewell.pdf';

import Leamy from '../assets/dolphin/home.jpg';
import LeamyModel from '../assets/dolphin/leamy-model.png';
import LeamyPDF from '../assets/dolphin/leamy.pdf';

import Roseway from '../assets/dolphin/home.jpg';
import RosewayModel from '../assets/dolphin/roseway-model.png';
import RosewayPDF from '../assets/dolphin/roseway.pdf';


const Dolphin = () => {
  const { langNum } = useLanguage();

  const recPools = [
    {
      title: ['Bayfield', 'Bayfield'],
      desc: [
        'Piscine avec marches latérales grand format ',
        'Large format pool with side steps.'
      ],
      image: Bayfield,
      model: BayfieldModel,
      pdf: BayfieldPDF,
      dimensions: [['5\'', '13\'6"x31\', 15\'x35\'']],
    },
    {
      title: ['Britannia', 'Britannia'],
      desc: [
        'Piscine avec marches latérales grand format. ',
        'Large format pool with side steps.'
      ],
      image: Britannia,
      model: BritanniaModel,
      pdf: BritanniaPDF,
      dimensions: [['5\'', '16\'x35\'']],
    },
    {
      title: ['Elora', 'Elora'],
      desc: [
        'Piscine rectangulaire à fond plat. ',
        'Rectangular pool with a flat bottom.'
      ],
      image: Elora,
      model: EloraModel,
      pdf: EloraPDF,
      dimensions: [['5\'', '12\'x18\'']],
    },
    {
      title: ['Kelowna', 'Kelowna'],
      desc: [
        'Piscine grand format à fond incliné avec bancs intégrés. ',
        'Large format pool with a inclined bottom and integrated benches.'
      ],
      image: Kelowna,
      model: KelownaModel,
      pdf: KelownaPDF,
      dimensions: [['6\'', '16\'x36\'']],
    },
    {
      title: ['Sandbanks', 'Sandbanks'],
      desc: [
        'Piscine rectangulaire à fond plat avec bancs intégrés. ',
        'Rectangular pool with a flat bottom and integrated benches.'
      ],
      image: Sandbanks,
      model: SandbanksModel,
      pdf: SandbanksPDF,
      dimensions: [['4\'6"', '8\'x17\', 8\'x26\', 12\'x26\'']],
    },
    {
      title: ['Sauble', 'Sauble'],
      desc: [
        'Piscine rectangulaire grand format avec bancs et plage intégrés, ainsi que fond en pente. ',
        'Large format rectangular pool with integrated benches and beach, as well as a sloping bottom.'
      ],
      image: Sauble,
      model: SaubleModel,
      pdf: SaublePDF,
      dimensions: [['6\'', '16\'x41\'']],
    },
    {
      title: ['South Hampton', 'South Hampton'],
      desc: [
        'Piscine rectangulaire grand format avec bancs et plage intégrés, ainsi que fond en pente. ',
        'Large format rectangular pool with integrated benches and beach, as well as a sloping bottom.'
      ],
      image: SouthHampton,
      model: SouthHamptonModel,
      pdf: SouthHamptonPDF,
      dimensions: [['6\'', '14\'x30\'']],
    },
    {
      title: ['Tofino', 'Tofino'],
      desc: [
        'La plus grande piscine en fibre de verre disponible au Canada ! Modèle rectangulaire grand format avec fond en pente ',
        'The largest fiberglass pool available in Canada! Large format rectangular model with a sloping bottom.'
      ],
      image: Tofino,
      model: TofinoModel,
      pdf: TofinoPDF,
      dimensions: [['8\'', '16\'x40\'']],
    },
  ];

  const freePools = [
    {
      title: ['Darlington', 'Darlington'],
      desc: [
        'Piscine à formes libres et fond incliné. ',
        'Freeform pool with a sloping bottom. '
      ],
      image: Darlington,
      model: DarlingtonModel,
      pdf: DarlingtonPDF,
      dimensions: [['5\'4"', '12\'x25\'']],
    },
    {
      title: ['Oka', 'Oka'],
      desc: [
        'Piscine à formes libres et fond incliné. ',
        'Freeform pool with a sloping bottom. '
      ],
      image: Oka,
      model: OkaModel,
      pdf: OkaPDF,
      dimensions: [['6\'2"', '13\'x33\''], ['6\'5"', '15\'6"x36\'']],
    },
    {
      title: ['Dover', 'Dover'],
      desc: [
        'Piscine à formes libres et fond incliné. ',
        'Freeform pool with a sloping bottom. '
      ],
      image: Dover,
      model: DoverModel,
      pdf: DoverPDF,
      dimensions: [['5\'8"', '16\'x38\'']],
    },
    {
      title: ['Wasaga', 'Wasaga'],
      desc: [
        'Piscine à formes libres et fond incliné. ',
        'Freeform pool with a sloping bottom. '
      ],
      image: Wasaga,
      model: WasagaModel,
      pdf: WasagaPDF,
      dimensions: [['5\'10"', '14\'x32\'']],
    },
  ];

  const claPools = [
    {
      title: ['Florencia', 'Florencia'],
      desc: [
        'Modèle classique à fond incliné ',
        'Classic model with a sloping bottom. '
      ],
      image: Florencia,
      model: FlorenciaModel,
      pdf: FlorenciaPDF,
      dimensions: [['6\'', '14\'x34\'']],
    },
    {
      title: ['Hopewell', 'Hopewell'],
      desc: [
        'Modèle classique à fond incliné. ',
        'Classic model with a sloping bottom. '
      ],
      image: Hopewell,
      model: HopewellModel,
      pdf: HopewellPDF,
      dimensions: [['6\'', '15\'x35\'']],
    },
    {
      title: ['Leamy', 'Leamy'],
      desc: [
        'Modèle classique à fond incliné. ',
        'Classic model with a sloping bottom. .'
      ],
      image: Leamy,
      model: LeamyModel,
      pdf: LeamyPDF,
      dimensions: [['6\'6"', '12\'x29\', 15\'x34\'']],
    },
    {
      title: ['Roseway', 'Roseway'],
      desc: [
        'Modèle classique à fond incliné. ',
        'Classic model with a sloping bottom. '
      ],
      image: Roseway,
      model: RosewayModel,
      pdf: RosewayPDF,
      dimensions: [['5\'6"', '10\'x24\'']],
    },
  ];

  const titles = [
    {
      title: ['Collection Dolphin', 'Dolphin Collection'],
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
        {recPools.map((e,i) => {
          return <PoolContainer
            title={e.title[langNum]}
            desc={e.desc[langNum]}
            image={e.image}
            model={e.model}
            pdf={e.pdf}
            dimensions={e.dimensions}
            key={i} />
        })}
      </div>
      
      <div className='pools-pool-container'>
        {freePools.map((e,i) => {
          return <PoolContainer
            title={e.title[langNum]}
            desc={e.desc[langNum]}
            image={e.image}
            model={e.model}
            pdf={e.pdf}
            dimensions={e.dimensions}
            key={i} />
        })}
      </div>
      
      <div className='pools-pool-container'>
        {claPools.map((e,i) => {
          return <PoolContainer
            title={e.title[langNum]}
            desc={e.desc[langNum]}
            image={e.image}
            model={e.model}
            pdf={e.pdf}
            dimensions={e.dimensions}
            key={i} />
        })}
      </div>
    </>
  )
}

export default Dolphin;