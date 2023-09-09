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
import { Link } from "react-router-dom";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-icon">
          <Link className="icon__menu">
            <BiMenu
              onClick={() => setModalIsOpen(true)}
              size={30}
              color="black"
            />
          </Link>
        </div>
        <div className="header__hotline-wrapper">
          Hotline:
          <div className="header__hotline">09xxxxxx</div>
        </div>
        <div className="header__logo">
          <Link to="/" className="header__logo-wrapper">
            <img className="header__image" src={logo} alt="" />
          </Link>
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

          <Link to="/cart" className="cart">
            <AiOutlineShoppingCart size={22} />
            <div className="cart__text">giỏ hàng ({cart.length})</div>
          </Link>
        </div>
      </div>
      <ul className="list">
        <li className="item">
          <Link to="/">TRANHG CHỦ</Link>
        </li>
        <li className="item wrapper active">
          <Link to="/products">SẢN PHẨM</Link>
          <MdKeyboardArrowDown size={26} />

          <ul className="list__modal">
            <li className="item__modal">
              <div className="">
                <Link to="/" className="item__link">
                  Xiaomi Watch
                </Link>
              </div>
            </li>
            <li className="item__modal ">
              <Link to="/" className="item__link">
                Apple Watch
              </Link>
            </li>
          </ul>
        </li>
        <li className="item">
          <Link to="/">TIN TỨC</Link>
        </li>
        <li className="item">
          <Link to="/">LIÊN HỆ</Link>
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
                  <Link to="" className="">
                    Trang chủ
                  </Link>
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
                      <Link to="" className="">
                        Sản phẩm
                      </Link>
                    </div>
                    <Link
                      style={{
                        marginRight: 12,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                      }}
                    >
                      <IoIosAdd size={20} />
                    </Link>
                  </div>
                </li>
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <Link to="" className="">
                    Tin tức
                  </Link>
                </li>
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <Link to="" className="">
                    Liên hệ
                  </Link>
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
