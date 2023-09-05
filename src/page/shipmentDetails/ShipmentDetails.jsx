import React, { useEffect } from "react";
import "./shipmentDetails.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Select from "react-select";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const ShipmentDetails = () => {
  const [city, setCity] = useState();
  const [districts, setDistricts] = useState();
  const [wards, setWards] = useState();
  const [hasSubmit, setHasSubmit] = useState(false);

  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  const shipmentValidationScheme = Yup.object().shape({
    email: Yup.string().email("Email Invalid").required("Bạn chưa nhập Email"),
    name: Yup.string().required("Bạn chưa nhập họ tên"),
    phone: Yup.string()
      .required("Bạn chưa nhập số điện thoại")
      .min(10, ({ min }) => `Vui lòng nhập ít nhất ${min} số`)
      .max(11, ({ max }) => `Vui lòng nhập ít hơn ${max} số`),
    address: Yup.string().required("Bạn chưa nhập địa chỉ"),
  });

  useEffect(() => {
    const res = axios.get("https://provinces.open-api.vn/api/?depth=3");
    res.then((value) => {
      setCity(
        value.data.map((item) => ({
          ...item,
          label: item.name,
          value: item.codename,
        }))
      );
    });
  }, []);

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", address: "" }}
      validationSchema={shipmentValidationScheme}
      onSubmit={(values) => {}}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <div className="container__shipment">
          <div className="wrapper__shipment">
            <div className="conatiner__left-shipment">
              <div className="wrapper__left-shipment">
                <div className="shipment__link">
                  <Link to="/">
                    <img src={logo} alt="" className="shipment__image" />
                  </Link>
                </div>

                <div className="wrapper__form-shipment">
                  <div className="shipment__heading">Thông tin giao hàng</div>
                  <div className="wrapper__error">
                    {!isValid && hasSubmit ? (
                      <div
                        style={{
                          padding: !isValid ? 10 : 0,
                        }}
                        className="error__message"
                      >
                        {errors.name && touched.name && (
                          <div
                            style={{
                              fontWeight: 500,
                              marginTop: 2,
                            }}
                          >
                            - {errors.name}
                          </div>
                        )}
                        {errors.email && touched.email && (
                          <div
                            style={{
                              fontWeight: 500,
                              marginTop: 2,
                            }}
                          >
                            - {errors.email}
                          </div>
                        )}
                        {errors.phone && touched.phone && (
                          <div
                            style={{
                              fontWeight: 500,
                              marginTop: 2,
                            }}
                          >
                            - {errors.phone}
                          </div>
                        )}
                        {errors.address && touched.address && (
                          <div
                            style={{
                              fontWeight: 500,
                              marginTop: 2,
                            }}
                          >
                            - {errors.address}
                          </div>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="input__name"
                    onChange={handleChange("name")}
                    value={values.name}
                    name="name"
                  />
                  <div className="wrapper__input">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input__email"
                      onChange={handleChange("email")}
                      value={values.email}
                      name="email"
                    />
                    <input
                      type="number"
                      placeholder="Số điện thoại"
                      className="input__phone"
                      onChange={handleChange("phone")}
                      value={values.phone}
                      name="phone"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="input__address"
                    onChange={handleChange("address")}
                    value={values.address}
                    name="address"
                  />
                  <div className="wrapper__select">
                    <div className="select__item">
                      <Select
                        placeholder="Tỉnh/Thành phố"
                        options={city}
                        onChange={(city) =>
                          setDistricts(
                            city.districts.map((item) => ({
                              ...item,
                              value: item.codename,
                              label: item.name,
                            }))
                          )
                        }
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
                        options={districts}
                        onChange={(district) =>
                          setWards(
                            district.wards.map((item) => ({
                              ...item,
                              value: item.codename,
                              label: item.name,
                            }))
                          )
                        }
                      />
                    </div>
                  </div>
                  <Select
                    className="select__item-3"
                    placeholder="Xã/Phường"
                    options={wards}
                  />
                  <div className="wrapper__check">
                    <Link to="/cart" className="check-text">
                      Giỏ hàng
                    </Link>
                    <Link className="">
                      <button
                        type="submit"
                        onClick={() => {
                          handleSubmit();
                          setHasSubmit(true);
                        }}
                        className="check-button"
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Tiếp tục đến phương thức thanh toán
                      </button>
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
                        <div className="item__qty">{item.qty}</div>
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
                    <div className="total-price">
                      {totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ShipmentDetails;
