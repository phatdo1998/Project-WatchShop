import React, { useEffect, useState } from "react";
import "./shipmentDetails.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import Select from "react-select";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import cod from "../../assets/image/cod.png";
import { AiOutlineCheckCircle, AiFillQuestionCircle } from "react-icons/ai";
import {
  addAddress,
  addCity,
  addDistricts,
  addEmail,
  addName,
  addPhone,
  addWards,
} from "../../redux/slices/informationSlice";

const ShipmentDetails = () => {
  const [city, setCity] = useState();
  const [districts, setDistricts] = useState();
  const [wards, setWards] = useState();
  const [hasSubmit, setHasSubmit] = useState(false);
  const [step, setStep] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const cart = useSelector((state) => state.cart);
  const information = useSelector((state) => state.information);
  const dispatch = useDispatch();

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

  const price = cart.map((price) => price);

  const totalShipemntPrice = price.reduce((total, item) => {
    return (total += item.price * item.qty);
  }, 0);

  const handleLink = () => {
    if (isValid) {
      setStep(2);
    }
  };

  return (
    <div className="container__shipment">
      <div className="wrapper__shipment">
        <div className="container__left-shipment">
          <div className="wrapper__left-shipment">
            <div className="shipment__link">
              <Link to="/">
                <img src={logo} alt="" className="shipment__image" />
              </Link>
            </div>
            {step === 1 && (
              <Formik
                initialValues={{ name: "", email: "", phone: "", address: "" }}
                validationSchema={shipmentValidationScheme}
                onSubmit={(values) => {
                  dispatch(addName(values.name));
                  dispatch(addEmail(values.email));
                  dispatch(addAddress(values.address));
                  dispatch(addPhone(values.phone));
                }}
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
                          onChange={(city) => {
                            dispatch(addCity(city.label));
                            setDistricts(
                              city.districts.map((item) => {
                                return {
                                  ...item,
                                  value: item.codename,
                                  label: item.name,
                                };
                              })
                            );
                          }}
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
                          onChange={(district) => {
                            dispatch(addDistricts(district.label));
                            setWards(
                              district.wards.map((item) => ({
                                ...item,
                                value: item.codename,
                                label: item.name,
                              }))
                            );
                          }}
                        />
                      </div>
                    </div>
                    <Select
                      className="select__item-3"
                      placeholder="Xã/Phường"
                      options={wards}
                      onChange={(wards) => dispatch(addWards(wards.name))}
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
                            setIsValid(isValid);
                            handleLink();
                          }}
                          className="check-button"
                        >
                          Tiếp tục đến phương thức thanh toán
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </Formik>
            )}

            {step === 2 && (
              <div className="wrapper__step2">
                <div className="check">Phương thức thanh toán</div>
                <div className="wrapper__check">
                  <input
                    checked
                    type="radio"
                    name=""
                    id=""
                    className="check__input"
                    onChange={() => {}}
                  />
                  <img src={cod} alt="" className="check__image" />
                  <div className="check__title">
                    Thanh toán khi giao hàng (COD)
                  </div>
                </div>
                <div className="wrapper">
                  <div onClick={() => setStep(1)} className="title1">
                    Quay lại
                  </div>
                  <div onClick={() => setStep(3)} className="title2">
                    Hoàn tất đơn hàng
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="wrapper__step3">
                <div className="wrapper__order">
                  <div className="">
                    <AiOutlineCheckCircle size={60} color="#338dbc" />
                  </div>
                  <div className="">
                    <div className="order__heading">Đặt hàng thành công</div>
                    <div className="order__title">Mã đơn hàng #</div>
                    <div className="order__thanks">Cám ơn bạn đã mua hàng!</div>
                  </div>
                </div>
                <div className="wrapper__information">
                  <div className="information__heading">Thông tin đơn hàng</div>
                  <div className="container__information">
                    <div className="information__title">
                      Thông tin giao hàng
                    </div>
                    <div className="information">{information.name}</div>
                    <div className="information">{information.phone}</div>
                    <div className="information">{information.address}</div>
                    <div className="information">{information.city}</div>
                    <div className="information">{information.districts}</div>
                    <div className="information">{information.wards}</div>
                    <div className="information__vn">Việt Nam</div>
                  </div>
                  <div className="information__check">
                    Phương thức thanh toán
                  </div>
                  <div className="information__cod">
                    Thanh toán khi giao hàng (COD)
                  </div>
                </div>
                <div className="wrapper__information-footer">
                  <div className="wrapper__left">
                    <AiFillQuestionCircle size={20} color="#737373" />
                    <div className="">Cần hỗ trợ?</div>
                    <div className="information__footer-title">
                      Liên hệ chúng tôi
                    </div>
                  </div>
                  <div className="information__button">
                    <Link to="/">Tiếp tục mua hàng</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container__right-shipment">
          <div className="wrapper__product-shipment">
            {cart.map((item, index) => {
              const priceTotal = item.price * item.qty;
              return (
                <div key={index} className="shipment__item">
                  <div className="wrapper__item-product">
                    <div className="item__qty">{item.qty}</div>
                    <img src={s6} alt="" className="shipment__img" />
                    <div className="shipment__item-name">{item.name}</div>
                  </div>
                  <div className="shipment__item-price">
                    {priceTotal.toLocaleString()}
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
              <div className="">{totalShipemntPrice.toLocaleString()}</div>
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
                  {totalShipemntPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
