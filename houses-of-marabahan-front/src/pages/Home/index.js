import { Garden } from '../../components/Planting/style';
import TILLED_SOIL_SQUARE from '../../assets/house/tilled_soil.png';

export default function Home() {
  return (
    <main>
        <h3>[Your House]'s Garden</h3>
      <Garden>
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
        <img src={TILLED_SOIL_SQUARE} alt='plot' />
      </Garden>
    </main>
  );
}
