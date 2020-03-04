import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './Home.styled';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://m.media-amazon.com/images/I/71ymvVR1QnL._AC_UL320_ML3_.jpg"
          alt="books"
        />
        <strong>Hunter x Hunter</strong>
        <span>R$ 21,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
