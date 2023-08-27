import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="wrapper__footer">
      <div className="wrapper__shop">
        <div className="contact__heading">WATCH SHOP</div>
        <div className="contact">Copyright by Watch Shop® Since 1991Z</div>
        <div className="contact">
          Chủ sở hữu Website: xxx - Số: xxx - Ngày Cấp: 01/01/1970
        </div>
        <div className="contact">Góp ý & Khiếu nại: xxx.com</div>
      </div>

      <div className="wrapper__contact">
        <div className="contact__heading">DELTA WATCH</div>
        <div className="contact">Địa chỉ : Củ Chi, HCM.</div>
        <div className="contact">Điện thoại : 09xxxxxxxx</div>
        <div className="contact">Email : xxxxx@gmail.com</div>
      </div>
      <div className="wrapper__certification">
        <div className="contact__heading">CHỨNG NHẬN</div>

        <div>
          <img
            src="https://cdn3.dhht.vn/wp-content/uploads/2021/12/icon-dai-ly-chinh-thuc.png"
            alt=""
            className=""
          />
        </div>
        <div>
          <img
            src="https://cdn3.dhht.vn/wp-content/uploads/2021/12/icon-phong-bao-hanh.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
