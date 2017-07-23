import { connect } from 'react-redux';
import { openWishlistPanel, closeWishlistPanel } from './redux/actions/wishlist.actions';
import { addProductToWishList, removeProductFromWishList } from './redux/actions/product.actions';
import App from './App.js';

const mapStateToProps = state => ({
  wishlistIsVisible: state.wishlistIsVisible,
  wishList: state.product.wishList,
  productList: state.product.productList,
  isOnWishList: state.product.isOnWishList
})

const actions = {
  onClickShoppingCartLogo: openWishlistPanel,
  onClickClosePanel: closeWishlistPanel,
  addToWishList: addProductToWishList,
  removeFromWishList: removeProductFromWishList,
}

export default connect(mapStateToProps, actions)(App);
