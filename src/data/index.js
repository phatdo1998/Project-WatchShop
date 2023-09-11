import logoApple from "../assets/image/logo-applewatch.png";
import logoXiaomi from "../assets/image/logo-xiaomiwatch.png";
import s6_2 from "../assets/image/s6-2_preview_rev_1.png";
import s6_3 from "../assets/image/s6-3_preview_rev_1.png";
import s6 from "../assets/image/s6_preview_rev_1.png";

const color = {
  white: "#ecebe9",
  cream: "#e1dbd3",
  darkBlue: "#484850",
  red: "#ed4e62",
  orange: "#fb812f",
};

const products = [
  {
    name: "Apple Watch",
    image: logoApple,
    items: [
      {
        id: 1,
        image: "",
        name: "Apple Watch SE 2022 44mm viền nhôm dây silicone",
        price: 6790000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image: "/images/apple-watch-se-2022-44mm-den_preview_rev_1.png",
            color: color.darkBlue,
          },

          {
            image: "/images/apple-watch-se-2022-44mm-trang_preview_rev_1.png",
            color: color.white,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 6790000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 2,
        image: "",
        name: "Apple Watch SE 2022 40mm viền nhôm dây silicone",
        price: 5940000,
        priceSale: "12,000,000₫",
        qty: 1,
        imageColor: [
          {
            image: "/images/apple-watch-se-2022-40mm-day-silicone-1.jpg",
            color: color.white,
          },
          {
            image:
              "/images/apple-watch-se-2022-40mm-day-silicone-trang-kem-1.jpg",
            color: color.cream,
          },

          {
            image: "/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 5940000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 3,
        image: "",
        name: " Apple Watch S8 GPS 41mm viền nhôm dây silicone",
        price: 8990000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image: "../../public/images/apple-watch-s8-41mm-trang-1.jpg",
            color: color.white,
          },
          {
            image: "../../public/images/apple-watch-s8-41mm-trang-kem-1.jpg",
            color: color.cream,
          },

          {
            image: "../../public/images/apple-watch-s8-41mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
          {
            image: "../../public/images/apple-watch-s8-41mm-do-1.jpg",
            color: color.red,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 8990000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 4,
        image: "",
        name: "Apple Watch S8 GPS 45mm viền nhôm dây silicone",
        price: 10390000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image:
              "../../public/images/apple-watch-s8-gps-45mm-day-silicone-trang-1-1.jpg",
            color: color.white,
          },
          {
            image:
              "../../public/images/dong-ho-thong-minh-apple-watch-s8-trang-starlight-4.jpg",
            color: color.cream,
          },

          {
            image:
              "../../public/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 10390000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 5,
        image: "",
        name: "Apple Watch S8 LTE 41mm viền nhôm dây silicone",
        price: 12290000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image:
              "../../public/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 12290000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 6,
        image: "",
        name: "Đồng hồ thông minh Apple Watch Ultra LTE 49mm dây Alpine size M",
        price: 19490000,
        priceSale: "10,000,000₫",
        qty: 1,
        imageColor: [
          {
            image:
              "../../public/images/apple-watch-ultra-49mm-day-alpine-size-m-cam-1.jpg",
            color: color.orange,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 19490000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 7,
        image: "",
        name: "Apple Watch SE 2022 LTE 40mm viền nhôm dây silicone",
        price: 7490000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image:
              "../../public/images/apple-watch-se-2022-40mm-day-silicone-1.jpg",
            color: color.white,
          },
          {
            image:
              "../../public/images/apple-watch-se-2022-40mm-day-silicone-trang-kem-1.jpg",
            color: color.cream,
          },

          {
            image:
              "../../public/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 7490000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
      {
        id: 8,
        image: "",
        name: "Apple Watch SE 2022 LTE 44mm viền nhôm dây silicone",
        price: 8190000,
        priceSale: "",
        qty: 1,
        imageColor: [
          {
            image:
              "../../public/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 8190000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
      },
    ],
  },
  {
    name: "Xiaomi Watch",
    image: logoXiaomi,
    items: [
      {
        id: 9,
        image: "",
        name: "Đồng hồ thông minh Xiaomi Redmi Watch 3 42.6mm",
        price: 2490000,
        qty: 1,
        imageColor: [
          {
            image: "/images/redmi-watch-3-active-den-1-1.jpg",
            color: color.white,
          },
          {
            image: s6,
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 2490000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ.",
      },
      {
        id: 10,
        image: "",
        name: "Xiaomi Amazfit Gts Vàng",
        price: 3000000,
        qty: 1,
        imageColor: [
          {
            image: s6_2,
            color: "Trắng",
          },
          {
            image: s6,
            color: "Đen",
          },

          {
            image: s6_3,
            color: "Xanh",
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 3000000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
    ],
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line eqeqeq
    resolve(products.flatMap((item) => item.items.filter((x) => x.id == id)));
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve, reject) => {
    if (category !== "all") {
      resolve(
        products.filter(
          (item) => item.name.replace(/\s/g, "").toLowerCase() === category
        )
      );
    } else {
      resolve(products);
    }
  });
};

export const newProduct = [
  {
    id: 11,
    image: "",
    name: "Amazfit Gts nội địa",
    price: 2500000,
    qty: 1,
    imageColor: [
      {
        image: s6_2,
        color: "Trắng",
      },
      {
        image: s6,
        color: "Đen",
      },

      {
        image: s6_3,
        color: "Xanh",
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 2500000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ.",
  },
  {
    id: 12,
    image: "",
    name: "Apple Watch Series 5",
    price: "Liên hệ",
    priceSale: "",
    qty: 1,
    imageColor: [
      {
        image: s6_2,
        color: "Trắng",
      },
      {
        image: s6,
        color: "Đen",
      },

      {
        image: s6_3,
        color: "Xanh",
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 0,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ.",
  },
  {
    id: 13,
    image: "",
    name: "Apple Watch Series 4",
    price: 7000000,
    priceSale: "",
    qty: 1,
    imageColor: [
      {
        image: s6_2,
        color: "Trắng",
      },
      {
        image: s6,
        color: "Đen",
      },

      {
        image: s6_3,
        color: "Xanh",
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 7000000,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
  },
  {
    id: 14,
    image: "",
    name: "Apple Watch Series 3",
    price: 5500000,
    priceSale: "6,000,000₫",
    qty: 1,
    imageColor: [
      {
        image: s6_2,
        color: "Trắng",
      },
      {
        image: s6,
        color: "Đen",
      },

      {
        image: s6_3,
        color: "Xanh",
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 5500000,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
  },
  {
    id: 16,
    image: "",
    name: "Xiaomi Amazfit Gts Vàng",
    price: 3000000,
    qty: 1,
    imageColor: [
      {
        image: s6_2,
        color: "Trắng",
      },
      {
        image: s6,
        color: "Đen",
      },

      {
        image: s6_3,
        color: "Xanh",
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 3000000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
];

export const news = [
  {
    id: 17,
    image: "",
    time: "01-01-1970",
    name: "Tính năng đo điện tâm đồ được cập nhật vào Apple Watch",
  },
  {
    id: 18,
    image: "",
    time: "01-01-1970",
    name: "Smartwacth tốt nhất trên thị trường hiện nay",
  },
  {
    id: 19,
    image: "",
    time: "01-01-1970",
    name: "Phát hiện bệnh lý tim mạch bằng thiết bị đeo tay",
  },
  {
    id: 20,
    image: "",
    time: "01-01-1970",
    name: "Đồng hồ thông minh Apple Watch mới ra mắt",
  },
  {
    id: 21,
    image: "",
    time: "01-01-1970",
    name: "Đồng hồ Apple Watch chính hãng bán ra tại VN",
  },
];
