import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../hooks/useTypedSelectorHook';
import { getMoleculs } from '../redux/store/actions';
import { Molecule } from '../redux/store/reducers/moleculesReducer';

import Cadium from '../assets/image/CADMIUM.png';
import Carbon from '../assets/image/CARBON.png';
import Hydrogen from '../assets/image/HYDROGEN.png';
import Uranium from '../assets/image/URANIUM.png';
import Xenon from '../assets/image/XENON.png';
import { CreateSaladBlock } from './CreateSaladBlock';
import { useNavigate } from 'react-router-dom';

interface CreateSaladType {
  addMineSalad: (product: string[]) => void;
}

export const CreateSalad: FC<CreateSaladType> = ({ addMineSalad }) => {
  const [createSalad, setCreateSalad] = React.useState<Molecule[]>([]);
  const [sum, setSum] = React.useState(0);
  const [sumSale, setSumSale] = React.useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { items, loading, error } = useTypedSelector((state) => state.molecules);

  React.useEffect(() => {
    dispatch(getMoleculs());
  }, [dispatch]);

  if (loading) {
    <h2>...loading</h2>;
  } else if (error) {
    <h2>{error}</h2>;
  }

  React.useEffect(() => {
    handlePrice();
  }, [createSalad]);

  const handleAddMolecule = (item: Molecule) => {
    if (amountMolecule(item) <= 0) {
      alert('Ингедиент отсутстувует');
    } else {
      setCreateSalad([...createSalad, item]);
    }
  };

  const handleCreateSalad = () => {
    if (createSalad.length > 0) {
      const nameM = createSalad.map((n) => n.title);
      const createSaladCopy = Object.assign(
        { id: Date.now(), title: 'Your Salad', price: sum, discount_price: sumSale },
        nameM,
      );
      addMineSalad(createSaladCopy);
      setCreateSalad([]);
      setSumSale(0);
      setSum(0);
      setTimeout(() => {
        navigate('/cart');
      }, 500);
    } else {
      alert('Вы ничего не добавили');
    }
  };

  const handleMoleculCount = (name: string) => {
    let elLength = [];
    createSalad.forEach((el) => {
      if (el.title === name) {
        elLength.push(el);
      }
    });
    return elLength.length;
  };

  const handleMoleculeDel = (name: string) => {
    let myMolec = [];
    myMolec.push(createSalad.filter((n) => n.title === name).slice(1));
    setCreateSalad(createSalad.filter((n) => n.title !== name).concat(...myMolec));
  };

  const amountMolecule = (item: Molecule) => {
    let amount = item.qty - handleMoleculCount(item.title);
    if (amount > 0) {
      return amount;
    } else {
      return 0;
    }
  };

  const handlePrice = () => {
    let arrSum = 0;
    let arrSumSale = 0;
    createSalad.forEach((el) => (arrSum += el.price));
    createSalad.forEach((el) => (arrSumSale += el.discount_price));
    setSum(arrSum);
    setSumSale(arrSumSale);
  };

  return (
    <div className="create">
      {items.map((item, index) => (
        <CreateSaladBlock
          key={item + index}
          item={item}
          addMolecule={() => handleAddMolecule(item)}
          amMolec={(item) => amountMolecule(item)}
        />
      ))}
      <div className="create-molecules">
        <ul className="create-molecules-list">
          <li>
            <img className="create-molecules__image" src={Cadium} alt="Cadium" />x
            {handleMoleculCount('Cadmium')}
            <button
              className="create-molecules__button"
              onClick={() => handleMoleculeDel('Cadmium')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M16 12H8" stroke="#f24e1e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="#f24e1e" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <img className="create-molecules__image" src={Carbon} alt="Carbon" />x
            {handleMoleculCount('Carbon')}
            <button
              className="create-molecules__button"
              onClick={() => handleMoleculeDel('Carbon')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M16 12H8" stroke="#f24e1e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="#f24e1e" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <img className="create-molecules__image" src={Hydrogen} alt="Hydrogen" />x
            {handleMoleculCount('Hydrogen')}
            <button
              className="create-molecules__button"
              onClick={() => handleMoleculeDel('Hydrogen')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M16 12H8" stroke="#f24e1e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="#f24e1e" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <img className="create-molecules__image" src={Uranium} alt="Uranium" />x
            {handleMoleculCount('Uranium')}
            <button
              className="create-molecules__button"
              onClick={() => handleMoleculeDel('Uranium')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M16 12H8" stroke="#f24e1e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="#f24e1e" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <img className="create-molecules__image" src={Xenon} alt="Xenon" />x
            {handleMoleculCount('Xenon')}
            <button className="create-molecules__button" onClick={() => handleMoleculeDel('Xenon')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M16 12H8" stroke="#f24e1e" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="10" stroke="#f24e1e" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </li>
        </ul>
        <div className="create-molecules-price">
          Сумма: {sum} <span>{sumSale === 0 ? '' : sumSale}</span>
        </div>
      </div>

      <button className="create__button" onClick={() => handleCreateSalad()}>
        Создать салат
      </button>
    </div>
  );
};
