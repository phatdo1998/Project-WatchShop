import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Link, useParams } from "react-router-dom";
import "./detailWatch.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import s6 from "../../assets/image/s6_preview_rev_1.png";
import Footer from "../../components/footer/Footer";
import { getProductById, newProduct } from "../../data";
import ProductItems from "../../components/productItem/ProductItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { v4 as uuidv4 } from "uuid";

const DetailWatch = () => {
  const { id } = useParams();
  const [detailProducts, setDetailProducts] = useState([]);
  const [imageColor, setImageColor] = useState(s6);
  const [colorSelected, setColorSelected] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApiProductById = async () => {
      const response = await getProductById(id);
      setDetailProducts(response);
      setColorSelected({
        color: response[0].color[1],
        image: response[0].imageColor[1].image,
      });
    };

    fetchApiProductById();
  }, [id]);

  const handleAddToCart = (item, colors) => {
    dispatch(
      addToCart({
        ...item,
        image: colorSelected,
        id: uuidv4(),
      })
    );
  };

  return (
    <div>
      <div className="container__header">
        <Header />
      </div>

      {detailProducts?.map((item, index) => {
        return (
          <div key={index}>
            <div className="container__detail">
              <div className="wrapper__detail">
                {/* <div className="wrapper__brand">
                  <Link className="detail__home">Trang chủ</Link>
                  <AiFillCaretRight size={14} />
                  <span className="detail__brand">Apple Watch</span>
                </div> */}

                <div className="wrapper__detail-product">
                  <div className="wrapper__watch">
                    <div className="wrapper__img-detail">
                      <img src={imageColor} alt="" className="" />
                    </div>
                  </div>

                  <div className="wrapper__detail-watch">
                    <div className="">
                      <h1 className="detail__name">{item.name}</h1>
                      <div className="detail__price">
                        {item.price.toLocaleString()}
                      </div>
                      <span className="detail__description">
                        {item.description}
                      </span>
                      <div className="wrapper__watch-color">
                        {item.imageColor.map(({ color, image }, index) => {
                          return (
                            <div
                              onClick={() => {
                                setColorSelected({ color, image });
                                setImageColor(image);
                              }}
                              key={index}
                              className={`watch__color ${
                                color.toLowerCase() ===
                                  colorSelected.color.toLowerCase() && "active"
                              }`}
                            >
                              {color}
                            </div>
                          );
                        })}
                      </div>

                      <div className="wrapper__detail-cart">
                        <div className="wrapper__quantity">
                          <div className="wrapper__detail-button">
                            <Link
                              onClick={() =>
                                handleAddToCart(
                                  item,
                                  item.imageColor.map((colors) => colors)
                                )
                              }
                              to="/cart"
                              className="detail__button"
                            >
                              <AiOutlineShoppingCart size={25} />
                              <div className="detail__text-watch">
                                Cho vào giỏ hàng
                              </div>
                            </Link>
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
                      Màn hình hiển thị sắc nét, màu sắc chân thực ngay cả dưới
                      trời nắng gắt. Tính năng luôn bật sáng màn hình xem giờ
                      tiện lợi ngay cả khi đang lái xe. Bên cạnh đó, màn hình sẽ
                      tự động giảm độ sáng khi không cần thiết để tăng tối đa
                      thời lượng pin.
                    </p>
                    <p className="feature">
                      Định vị chính xác bằng GPS và la bàn
                    </p>
                    <div className="feature">
                      Định vị GPS định vị với độ chính xác cao vị trí của bạn,
                      giúp dễ dàng tính toán lộ trình luyện tập.
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
      })}
    </div>
  );
};

export default DetailWatch;
