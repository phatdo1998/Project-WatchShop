import React, { useEffect } from "react";
import "./cart.scss";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data";
import Header from "../header/Header";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Cart = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchApiProductById = async () => {
      const response = await getProductById(id);
    };
    fetchApiProductById();
  });

  return (
    <div className="wrapper__cart">
      <div className="container__header">
        <Header />
      </div>
      <div className="wrapper__cart-body">
        <div className="wrapper__cart-content">
          <div className="wrapper__cart-products">
            <div className="wrapper__cart-title">
              <h1 className="cart__content">Giỏ hàng của bạn</h1>
              <div className="">
                Bạn đang có <span style={{ fontWeight: 700 }}>6 sản phẩm</span>{" "}
                trong giỏ hàng
              </div>
            </div>

            <div className="wrapper__product-cart">
              <div className="wrapper__cart-item">
                <div className="wrapper__cart-left">
                  <div className="wrapper__cart-img">
                    <img src={s6} alt="" className="cart__img" />
                  </div>
                  <div className="wrapper__cart-detail">
                    <div className="cart__name">Apple Watch Series 6</div>
                    <div className="cart__price">11,000,000 ₫ </div>
                  </div>
                </div>
                <div className="wrappper__cart-total">
                  <div className="cart__total">55,000,000₫</div>
                  <div className="wrapper__cart-icon">
                    <div className="cart__remove">
                      <IoIosRemove size={20} />
                    </div>
                    <div className="cart__qty">4</div>
                    <div className="cart__add">
                      <IoIosAdd size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper__cart-price"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
