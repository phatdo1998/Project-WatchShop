/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { BiMenu } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { PiDotOutlineFill } from "react-icons/pi";
import logo from "../../assets/image/logo.png";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-icon">
          <a className="icon__menu">
            <BiMenu
              onClick={() => setModalIsOpen(true)}
              size={30}
              color="black"
            />
          </a>
        </div>
        <div className="header__hotline-wrapper">
          Hotline:
          <div className="header__hotline">09xxxxxx</div>
        </div>
        <div className="header__logo">
          <a href="/" className="header__logo-wrapper">
            <img className="header__image" src={logo} alt="" />
          </a>
        </div>
        <div className="header__empty"></div>
        <div className="header__wrapper-right">
          <div className="search">
            <ImSearch size={20} />

            <div className="search__text active">tìm kiếm</div>
            <div className="search__input">
              <input className="input" type="text" placeholder="Tìm kiếm..." />
              <div className="input__icon">
                <ImSearch size={20} />
              </div>
            </div>
          </div>

          <div className="cart">
            <AiOutlineShoppingCart size={22} />
            <div className="cart__text">giỏ hàng ({cart.length})</div>
          </div>
        </div>
      </div>
      <ul className="list">
        <li className="item">
          <a href="/">TRANHG CHỦ</a>
        </li>
        <li className="item wrapper active">
          <a href="/">SẢN PHẨM</a>
          <MdKeyboardArrowDown size={26} />

          <ul className="list__modal">
            <li className="item__modal">
              <div className="">
                <a href="/" className="item__link">
                  Xiaomi Watch
                </a>
              </div>
            </li>
            <li className="item__modal ">
              <a href="/" className="item__link">
                Apple Watch
              </a>
            </li>
          </ul>
        </li>
        <li className="item">
          <a href="/">TIN TỨC</a>
        </li>
        <li className="item">
          <a href="/">LIÊN HỆ</a>
        </li>
      </ul>

      <div className="modal">
        <div
          onClick={() => setModalIsOpen(false)}
          className={`modal__overlay `}
          style={{ visibility: `${modalIsOpen ? "visible" : "hidden"}` }}
        >
          <div
            className={`modal__content ${
              modalIsOpen ? "slide-in" : "slide-out"
            }`}
          >
            <ul className="list__item">
              <div className="wrapper__item">
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <a href="" className="">
                    Trang chủ
                  </a>
                </li>
                <li className="item__modal">
                  <div className="item__wrapper">
                    <div
                      style={{
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <PiDotOutlineFill size={30} color="#05c3ff" />
                      <a href="" className="">
                        Sản phẩm
                      </a>
                    </div>
                    <a
                      style={{
                        marginRight: 12,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                      }}
                    >
                      <IoIosAdd size={20} />
                    </a>
                  </div>
                </li>
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <a href="" className="">
                    Tin tức
                  </a>
                </li>
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <a href="" className="">
                    Liên hệ
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
