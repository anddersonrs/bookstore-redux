import { all, takeLatest } from 'redux-saga/effects';

const checkProductStock = () => {
  console.log('Adiciounou ao carrinho');
};

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)]);
