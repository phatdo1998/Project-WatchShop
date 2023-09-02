import React from "react";
import "./shipmentDetails.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Select from "react-select";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { useSelector } from "react-redux";

const ShipmentDetails = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (selectedOption) => {};

  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  return (
    <div className="container__shipment">
      <div className="wrapper__shipment">
        <div className="conatiner__left-shipment">
          <div className="wrapper__left-shipment">
            <div className="shipment__link">
              <Link>
                <img src={logo} alt="" className="shipment__image" />
              </Link>
            </div>
            <div className="shipment__heading">Thông tin giao hàng</div>
            <div className="wrapper__form-shipment">
              <input
                type="text"
                placeholder="Họ và tên"
                className="input__name"
              />
              <div className="wrapper__input">
                <input
                  type="text"
                  placeholder="Email"
                  className="input__email"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="input__phone"
                />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ"
                className="input__address"
              />
              <div className="wrapper__select">
                <div className="select__item">
                  <Select
                    placeholder="Tỉnh/Thành phố"
                    options={options}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <Select
                    className="select__item"
                    placeholder="Quận/Huyện"
                    options={options}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Select
                className="select__item-3"
                placeholder="Xã/Phường"
                options={options}
                onChange={handleChange}
              />
              <div className="wrapper__check">
                <Link className="check-text">Giỏ hàng</Link>
                <Link className="check-button">
                  Tiếp tục đến phương thức thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner__right-shipment">
          <div className="wrapper__product-shipment">
            {cart.map((item, index) => {
              return (
                <div key={index} className="shipment__item">
                  <div className="wrapper__item-product">
                    <div className="item__qty">1</div>
                    <img src={s6} alt="" className="shipment__img" />
                    <div className="shipment__item-name">{item.name}</div>
                  </div>
                  <div className="shipment__item-price">
                    {item.price.toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wrapper__voucher">
            <div className="wrapper__voucher-input">
              <input
                type="text"
                placeholder="Mã giảm giá"
                className="voucher__input"
              />
            </div>
            <button className="voucher__button">Sử dụng</button>
          </div>
          <div className="wrapper__price-shipment">
            <div className="shipment__product-price">
              <div className="">Tạm tính</div>
              <div className="">{totalPrice.toLocaleString()}</div>
            </div>
            <div className="shipment__delivery">
              <div className="">Phí vận chuyển</div>
              <div className="">___</div>
            </div>
          </div>
          <div className="shipment__total-price">
            <div className="wrapper__total-price">
              <div className="total-text">Tổng cộng</div>
              <div className="wrapper__price">
                <div className="vnd">vnd</div>
                <div className="total-price">{totalPrice.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
