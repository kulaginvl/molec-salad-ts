import { FC } from 'react';
import { Salad } from '../redux/store/reducers/saladsReducer';
interface SaladBlockType {
  item: Salad;
  addSalad: (item: Salad) => void;
}

export const SaladBlock: FC<SaladBlockType> = ({ item, addSalad }) => {
  return (
    <div className="salad-block">
      <h3 className="salad-block__title">{item.title}</h3>
      <div className="salad-block-price">
        Цена <span>{item.price}</span>
        <div className="salad-block-price-sale">{item.discount_price.toFixed(1)}</div>
      </div>
      <button className="salad-block__button" onClick={() => addSalad(item)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          width="40"
          height="40"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="M12 8v4m0 0v4m0-4h4m-4 0H8"
              stroke="#67b07e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="10" stroke="#67b07e" strokeWidth="2" />
          </g>
        </svg>
      </button>
    </div>
  );
};
