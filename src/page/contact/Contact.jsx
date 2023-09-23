import React, { useEffect, useState } from "react";
import "./contact.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const contactValidationScheme = Yup.object().shape({
    email: Yup.string()
      .matches(/^\S+@\S+\.\S+$/, "Email không hợp lệ")
      .required("Bạn chưa nhập Email"),
    name: Yup.string()
      .required("Bạn chưa nhập họ tên")
      .min(2, ({ min }) => `Vui lòng nhập ít nhất ${min} ký tự`),
    phone: Yup.string()
      .required("Bạn chưa nhập số điện thoại")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Vui lòng nhập số điện thoại hợp lệ")
      .typeError("vui lòng nhập số"),
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <div className="container__contact">
      <div className="container__header">
        <Header />
      </div>

      <div className="container__contact-body">
        <div className="wrapper__contact">
          <div className="contact">
            <div className="wrapper__address">
              <IoLocation className="contact__icon" size={36} />
              <div className="wrapper__contact-item">
                <div className="contact__item-heading">Địa chỉ</div>
                <div className="contact__item-address">Quận Tân Bình, HCM</div>
              </div>
            </div>
            <div className="wrapper__contact-address">
              <div className="wrapper__address">
                <FaPhoneAlt className="contact__icon" size={36} />
                <div className="wrapper__contact-item">
                  <div className="contact__item-heading">Điện thoại</div>
                  <div className="contact__item-address">09xxxxxxxx</div>
                </div>
              </div>
              <div className="wrapper__address">
                <IoIosMail className="contact__icon" size={36} />
                <div className="wrapper__contact-item">
                  <div className="contact__item-heading">Email</div>
                  <div className="contact__item-address">xxxxxx@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__contact-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={contactValidationScheme}
            onSubmit={(values) => {
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
                setOpenModal(true);
              }, 500);
            }}
          >
            {({ handleChange, handleSubmit, values, isValid, errors, touched }) => (
              <div className="wrapper__contact-form">
                {openModal && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="wrapper__modal">
                      <div className="modal__heading">Gửi tin nhắn thành công</div>
                      <div className="modal__contact-content">
                        <div className="modal__title">Cám ơn bạn đã gửi tin nhắn cho chúng tôi</div>
                        <div className="modal__description">Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất!</div>
                      </div>
                      <div className="modal__contact-link">
                        <Link to={"/"} className="contact__link">
                          Về Trang chủ
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                <div className="contact__form-heading">Gửi thắc mắc cho chúng tôi</div>
                <div className="contact__form-description">
                  Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
                </div>
                <div className="wrapper__error">
                  {!isValid && (
                    <div
                      style={{
                        padding: isValid ? 10 : 0,
                      }}
                      className="error__message"
                    >
                      {errors.name && touched.name && (
                        <div
                          style={{
                            fontWeight: 500,
                            marginTop: 2,
                            paddingTop: 3,
                            paddingLeft: 5,
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
                            paddingTop: 3,
                            paddingLeft: 5,
                            paddingBottom: 3,
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
                            paddingTop: 3,
                            paddingLeft: 5,
                            paddingBottom: 3,
                          }}
                        >
                          - {errors.phone}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="form">
                  <div className="input__name">Tên của bạn</div>
                  <input
                    value={values.name}
                    onChange={handleChange("name")}
                    type="text"
                    className="input__contact"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="wrapper__form">
                  <div className="form">
                    <div className="input__name">Email của bạn</div>
                    <input
                      value={values.email}
                      onChange={handleChange("email")}
                      type="text"
                      className="input__contact"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                  <div className="form">
                    <div className="input__name">Số điện thoại của bạn</div>
                    <input
                      value={values.phone}
                      onChange={handleChange("phone")}
                      type="text"
                      className="input__contact"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </div>
                </div>
                <div className="contact__content">
                  <div className="contact__content-heading">Nội dung</div>
                  <textarea className="text-area" cols="10" rows="10" placeholder="Nhập nội dung" />
                </div>
                <div className="wrapper__contact-button">
                  <button onClick={handleSubmit} type="submit" className="contact__button">
                    <div className="contact__button-name">GỬI CHO CHÚNG TÔI</div>
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <div className="container__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
