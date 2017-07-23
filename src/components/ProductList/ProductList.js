import React from 'react';
import Product from '../Product';

const ProductList = props => {
  let products;

  props.productList.length > 0
  ? products = props.productList.map(product => <Product
    key={product.id}
    {...product}
    addToWishList={props.addToWishList}
    removeFromWishList={props.removeFromWishList}
    wishList={props.wishList} />)
  : products = <h2>No results.</h2>

    return(
      <ul className="product-list">
        {products}
      </ul>
    );
};

export default ProductList;
