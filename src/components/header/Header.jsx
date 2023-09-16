/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { IoIosAdd } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { getProducts } from "../../data";

import "./header.scss";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getProducts();
      setProducts(res);
    };

    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate({
        pathname: "/search",
        search: `keyword=${searchText}`,
      });
    }
  };

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
            <form className="search__input" onSubmit={handleSubmit}>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="input"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <button type="submit" className="input__icon">
                <ImSearch style={{ backgroundColor: "#fff" }} size={20} />
              </button>
            </form>
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
          <Link to="/products?category=applewatch">SẢN PHẨM</Link>
          <MdKeyboardArrowDown size={26} />

          <ul className="list__modal">
            {products?.map((item, index) => {
              return (
                <div key={index}>
                  <li className="item__modal">
                    <Link
                      to={{
                        pathname: "/products",
                        search: `category=${item.name
                          .replace(/\s/g, "")
                          .toLowerCase()}`,
                      }}
                      className="item__link"
                    >
                      {item.name}
                    </Link>
                  </li>
                </div>
              );
            })}
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
                  <Link to="" className="item__modal-link">
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
                        flex: 1,
                      }}
                    >
                      <PiDotOutlineFill size={30} color="#05c3ff" />
                      <Link
                        to="/products?category=applewatch"
                        className="item__modal-link"
                      >
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
                  <Link to="" className="item__modal-link">
                    Tin tức
                  </Link>
                </li>
                <li className="item__modal">
                  <PiDotOutlineFill size={30} color="#05c3ff" />
                  <Link to="" className="item__modal-link">
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
