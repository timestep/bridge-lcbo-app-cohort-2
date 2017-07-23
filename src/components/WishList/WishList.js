import React from 'react';
import Product from '../Product';

const WishList = props => {
  let products;

  props.wishList.length > 0
  ? products = props.wishList.map(product => <Product
    key={product.id}
    {...product}
    addToWishList={props.addToWishList}
    removeFromWishList={props.removeFromWishList}
    onWishList={props.isOnWishList} />)
  : products = <h2>No results.</h2>

    return(
      <ul className="product-list">
        {products}
      </ul>
    );
};

export default WishList;