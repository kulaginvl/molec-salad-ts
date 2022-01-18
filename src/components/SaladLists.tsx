import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelectorHook';
import { getSalads } from '../redux/store/actions';
import { Salad } from '../redux/store/reducers/saladsReducer';
import { SaladBlock } from './SaladBlock';

type SaladListsType = {
  addOnCart: (product: Salad) => void;
};

export const SaladLists: FC<SaladListsType> = ({ addOnCart }) => {
  const dispatch = useDispatch();

  const { items, error, loading } = useTypedSelector((state) => state.salads);

  React.useEffect(() => {
    dispatch(getSalads());
  }, [dispatch]);

  if (loading) {
    <h2>...loading</h2>;
  } else if (error) {
    <h2>{error}</h2>;
  }

  const handleAddSalad = (item: Salad) => {
    addOnCart({ ...item, id: Date.now() });
  };

  return (
    <div className="salad">
      {items.map((item, index) => (
        <SaladBlock key={item + index} item={item} addSalad={() => handleAddSalad(item)} />
      ))}
    </div>
  );
};
