import Card from '../../components/Character/Card';
import kinds from '../../assets/lore/kinds';

import { Selection } from '../../components/Selection/style';

export default function CreateCharacter() {
  return (
    <>
      <Selection>
        {kinds.map((kind, index) => (
          <Card
            key={index}
            title={kind.name}
            image={kind.sprite}
            text={kind.description}
            show={false}
          />
        ))}
      </Selection>
    </>
  );
}
