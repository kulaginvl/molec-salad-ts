import { FC } from 'react';
import { Molecule } from '../redux/store/reducers/moleculesReducer';

interface CreateSaladBlockType {
  item: Molecule;
  addMolecule: (item: Molecule) => void;
  amMolec: (item: Molecule) => void;
}

export const CreateSaladBlock: FC<CreateSaladBlockType> = ({ item, addMolecule, amMolec }) => {
  return (
    <div className="create-block">
      <div className="create-block-top">
        <h5 className="create-block__title">{item.title}</h5>
        <div className="create-block-price">
          цена за шт.<span>{item.price}</span>
          {item.discount_price}
        </div>
      </div>

      <p>Количество на складе: {amMolec(item)}</p>
      <button className="create-block__button" onClick={() => addMolecule(item)}>
        Добавить в салат
      </button>
    </div>
  );
};
