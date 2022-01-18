import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CartSalads } from './components/CartSalads';
import { CreateSalad } from './components/CreateSalad';
import { SaladLists } from './components/SaladLists';

export const App = () => {
  const [product, setProduct] = React.useState<any[]>([]);
  const navigate = useNavigate();

  const handleBuySalads = (sum: number, sumSale: number) => {
    if (
      product.length % 10 > 4 ||
      product.length === 11 ||
      product.length === 12 ||
      product.length === 13 ||
      product.length === 14
    ) {
      alert(
        `Вы купили ${
          product.length
        } салатов на общую сумму ${sum}, цена с учетом скидки составит ${sumSale.toFixed(1)}`,
      );
      setProduct([]);
    } else if (product.length % 10 > 1) {
      alert(
        `Вы купили ${
          product.length
        } салата на общую сумму ${sum}, цена с учетом скидки составит ${sumSale.toFixed(1)}`,
      );
      setProduct([]);
    } else if (product.length % 10 === 1) {
      alert(
        `Вы купили ${
          product.length
        } салат на общую сумму ${sum}, цена с учетом скидки составит ${sumSale.toFixed(1)}`,
      );
      setProduct([]);
    }
  };

  return (
    <>
      <div className="nav-menu">
        <button onClick={() => navigate('/')}>Все салаты</button>
        <button onClick={() => navigate('/createsalad')}>Создать свой салат</button>
        <button onClick={() => navigate('/cart')}>Корзина x{product.length} </button>
      </div>

      <Routes>
        <Route path="/" element={<SaladLists addOnCart={(i) => setProduct([...product, i])} />} />
        <Route
          path="/createsalad"
          element={<CreateSalad addMineSalad={(m) => setProduct([...product, m])} />}
        />
        <Route
          path="/cart"
          element={
            <CartSalads
              products={product}
              buySalads={(allSum, allSumSale) => handleBuySalads(allSum, allSumSale)}
              delElem={(i) => setProduct(product.filter((el) => el.id !== i))}
            />
          }
        />
      </Routes>
    </>
  );
};
