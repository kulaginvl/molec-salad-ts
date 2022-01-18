import React, { FC } from 'react';

type CartSaladsType = {
  products: any[];
  delElem: (id: number) => void;
  buySalads: (allSum: number, allSumSale: number) => void;
};

export const CartSalads: FC<CartSaladsType> = ({ products, delElem, buySalads }) => {
  const [allSum, setAllSum] = React.useState(0);
  const [allSumSale, setAllSumSale] = React.useState(0);

  const handleAllSum = () => {
    let termSum = 0;
    let termSumSale = 0;
    products.forEach((el) => (termSum += el.price));
    products.forEach((el) => (termSumSale += el.discount_price));
    setAllSum(termSum);
    setAllSumSale(termSumSale);
  };

  React.useEffect(() => {
    handleAllSum();
  }, [products]);

  return (
    <div className="cart">
      {products.map((el) => (
        <div key={el.id} className="cart-item">
          <h2 className="cart-item__title">{el.title}</h2>
          <div className="cart-item-price">Цена: {el.price}</div>
          <div className="cart-item-price">
            Цена с учетом скидки: {el.discount_price.toFixed(1)}
          </div>
          <button className="cart-item__button" onClick={() => delElem(el.id)}>
            Убрать салат из корзины
          </button>
        </div>
      ))}
      <div className="cart-sum">Cумма заказа: {allSum}</div>
      <div className="cart-sum">Cумма заказа с учетом скидки: {allSumSale.toFixed(1)}</div>
      <button
        className="cart__button"
        disabled={products.length > 0 ? false : true}
        onClick={() => buySalads(allSum, allSumSale)}>
        СДЕЛАТЬ ЗАКАЗ
      </button>
    </div>
  );
};
