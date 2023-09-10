import React, { useEffect, useState } from "react";
import "./products.scss";
import Header from "../../components/header/Header";
import { getProductByCategory, getProducts } from "../../data/index";
import ProductItems from "../../components/productItem/ProductItems";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/SideBar";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [productsSelling, setProductsSelling] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getProducts().then((respone) => {
      setProductsSelling(respone[0].items);
    });
  }, []);

  const category = String(searchParams.get("category") || "all");

  useEffect(() => {
    const fetchApi = async () => {
      const respone = await getProductByCategory(category);
      setProductsSelling(respone[0]?.items);
    };

    fetchApi();
  }, [category]);

  return (
    <div className="wrapper__products-container">
      <div
        style={{
          right: openModal ? 230 : 0,
        }}
        onClick={() => setOpenModal(!openModal)}
        className="wrapper__icon-modal"
      >
        {openModal ? (
          <AiOutlineClose size={30} color="#fff" />
        ) : (
          <BiMenuAltRight size={30} color="#fff" />
        )}
      </div>
      <div className="modal__products">
        <div
          style={{
            visibility: openModal ? "visible" : "hidden",
          }}
          onClick={() => setOpenModal(false)}
          className={`overlay__products `}
        >
          <div
            style={{
              transform: openModal ? "translateX(0)" : "translateX(230px)",
            }}
            className={`modal__products-content ${
              openModal ? "modal-in" : "modal-out"
            }`}
          >
            <SideBar data={productsSelling} />
          </div>
        </div>
      </div>
      <div className="container__header">
        <Header />
      </div>
      <div className="container__products">
        <div className="wrapper__products">
          <div className="wrapper__sidebar-content">
            <SideBar type={"modal"} data={productsSelling} />
          </div>
          <div className="products__list">
            <div className="products__list-heading">Sản phẩm</div>
            <div className="products__list-item">
              {productsSelling?.map((item, index) => {
                return <ProductItems key={index} item={item} numColumn={3} />;
              })}
            </div>
            {/* <Pagination
              count={Math.ceil(productsSelling?.length / 6)}
              className="pagination"
            /> */}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
