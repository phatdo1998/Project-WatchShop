import React from "react";
import { IoIosAdd, IoIosRemove, IoMdRemove } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import empty from "../../assets/image/cart_empty_background.webp";
import Header from "../../components/header/Header";
import { decrement, increasement, removeToCart, totalCartPrice } from "../../redux/slices/cartSlice";
import "./cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalQty = cart.reduce((init, total) => {
    return (init += total.qty);
  }, 0);

  const handleRemove = (id) => {
    dispatch(removeToCart(id));
  };
  const handleIncreasement = (id) => {
    dispatch(increasement(id));
    dispatch(totalCartPrice(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
    dispatch(totalCartPrice(id));
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const resultPrice = cart.map((item) => {
    return item.price * item.qty;
  });

  const totalPrice = resultPrice.reduce((init, item) => {
    return (init += item);
  }, 0);

  return (
    <div className="wrapper__cart">
      <div className="container__header">
        <Header />
      </div>

      {cart.length > 0 ? (
        <>
          <div className="wrapper__cart-body">
            <div className="wrapper__cart-content">
              <div className="wrapper__cart-products">
                <div className="wrapper__cart-title">
                  <h1 className="cart__content">Giỏ hàng của bạn</h1>
                  <div className="wrapper__title">
                    Bạn đang có <span style={{ fontWeight: 700, marginRight: 3 }}>{totalQty} sản phẩm</span>
                    trong giỏ hàng
                  </div>
                </div>
                <div className="wrapper__product-cart">
                  {cart.map((item, index) => {
                    let PriceTotal = item.price;
                    let qty = item.qty;
                    const cartPriceTotal = PriceTotal * qty;

                    return (
                      <div key={index} className="wrapper__cart-item">
                        <div className="wrapper__cart-left">
                          <div className="wrapper__cart-img">
                            <div onClick={() => handleRemove(item.id)} className="wrapper__icon-cart">
                              <IoMdRemove color="white" />
                            </div>
                            <img src={item.image} alt={item.name} className="cart__img" />
                          </div>
                          <div className="wrapper__cart-detail">
                            <div className="cart__name">{item.name}</div>
                            <div className="cart__price">{item.price?.toLocaleString()}đ</div>
                          </div>
                        </div>
                        <div className="wrappper__cart-total">
                          <div className="cart__total">{cartPriceTotal.toLocaleString()}đ</div>
                          <div className="wrapper__cart-icon">
                            <button className="cart__remove">
                              <IoIosRemove color="black" size={20} onClick={() => handleDecrement(item.id)} />
                            </button>
                            <div className="cart__qty">{item.qty}</div>
                            <button className="cart__add">
                              <IoIosAdd color="black" size={20} onClick={() => handleIncreasement(item.id)} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="wrapper__cart-price">
                <div className="cart__right-total">
                  <div className="wrapper__total">
                    <div className="cart__title-total">Tổng tiền:</div>
                    <div className="cart__price-total">{totalPrice.toLocaleString()}đ</div>
                  </div>
                  <div className="wrapper__policy">
                    <div className="policy__text">- ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày</div>
                    <div className="policy__text">- Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</div>
                  </div>
                  <div className="cart__button">
                    <Link onClick={handleClick} to={"/shipment"} className="cart__link">
                      THANH TOÁN
                    </Link>
                  </div>
                </div>
                <div className="purchase-policy">
                  <div className="wrapper__purchase-policy">
                    <div className="policy__header">Chính sách mua hàng</div>
                    <div className="">Hiện chúng tôi đang áp dụng giao hàng trên toàn quốc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper__empty-card">
            <div className="wrapper__empty">
              <div className="wrapper__empty-content">
                <img src={empty} alt="empty card" className="empty__image" />
                <div className="empty__heading">“Hổng” có gì trong giỏ hết</div>
                <div className="empty__title">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</div>
                <button className="empty__button">
                  <Link to="/">Mua sắm ngay</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
