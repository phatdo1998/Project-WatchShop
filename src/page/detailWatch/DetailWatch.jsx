import React from "react";
import Header from "../../components/header/Header";
import { Link, useParams } from "react-router-dom";
import "./detailWatch.scss";
import { AiFillCaretRight, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdRemoveCircle, IoIosAddCircle } from "react-icons/io";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import Footer from "../../components/footer/Footer";
import { newProduct } from "../../data";
import ProductItems from "../../components/productItem/ProductItems";

const DetailWatch = () => {
  return (
    <div>
      <div className="container__header">
        <Header />
      </div>

      <div className="container__detail">
        <div className="wrapper__detail">
          <div className="wrapper__brand">
            <Link className="detail__home">Trang chủ</Link>
            <AiFillCaretRight size={14} />
            <span className="detail__brand">Apple Watch</span>
          </div>

          <div className="wrapper__detail-product">
            <div className="wrapper__watch">
              <div className="wrapper__img-detail">
                <img src={s6} alt="" className="" />
              </div>
              <div className="wrapper__detail-color">
                <img src={s6} alt="" className="img__detail" />
                <img src={s6} alt="" className="img__detail" />
                <img src={s6} alt="" className="img__detail" />
              </div>
            </div>

            <div className="wrapper__detail-watch">
              <div className="">
                <h1 className="detail__name">Apple Watch Series 6</h1>
                <div className="detail__price">10,000,000₫</div>
                <span className="detail__description">
                  Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân,
                  Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo
                  thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ,
                  Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi
                  nhạc, Thay mặt đồng hồ
                </span>

                <div className="wrapper__detail-cart">
                  <div className="detail__text">Số lượng:</div>
                  <div className="wrapper__quantity">
                    <div className="wrapper__qty">
                      <div className="detail__remove-icon">
                        <IoMdRemoveCircle size={24} color="#6e7874" />
                      </div>
                      <div className="detail__qty">1</div>
                      <div className="detail__add-icon">
                        <IoIosAddCircle size={24} color="#6e7874" />
                      </div>
                    </div>

                    <div className="wrapper__detail-button">
                      <button className="detail__button">
                        <AiOutlineShoppingCart size={25} />
                        <div className="detail__text-watch">
                          Cho vào giỏ hàng
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detail__feature">
            <div className="detail__feature-text">Thông tin chi tiết</div>
            <div className="">
              <p className="feature">Màn hình OLED luôn hiển thị</p>
              <p className="feature">
                Màn hình hiển thị sắc nét, màu sắc chân thực ngay cả dưới trời
                nắng gắt. Tính năng luôn bật sáng màn hình xem giờ tiện lợi ngay
                cả khi đang lái xe. Bên cạnh đó, màn hình sẽ tự động giảm độ
                sáng khi không cần thiết để tăng tối đa thời lượng pin.
              </p>
              <p className="feature">Định vị chính xác bằng GPS và la bàn</p>
              <div className="feature">
                Định vị GPS định vị với độ chính xác cao vị trí của bạn, giúp dễ
                dàng tính toán lộ trình luyện tập.
              </div>
            </div>
          </div>
          <div className="related-products">
            <h2 className="">Sản phẩm liên quan</h2>
            <div className="wrapper__related-products">
              {newProduct.map((item, index) => {
                return <ProductItems key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container__footer">
        <Footer />
      </div>
    </div>
  );
};

export default DetailWatch;
