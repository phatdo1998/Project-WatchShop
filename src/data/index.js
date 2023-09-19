import logoApple from "../assets/image/logo-applewatch.png";
import logoXiaomi from "../assets/image/logo-xiaomiwatch.png";

const color = {
  white: "#ecebe9",
  cream: "#e1dbd3",
  darkBlue: "#484850",
  red: "#ed4e62",
  orange: "#fb812f",
  black: "#393939",
  brown: "#393939",
  blue: "#506481",
  gray: "#cacdd4",
  yellow: "#f1ede2",
  purple: "#dfd7e6",
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
            image: "/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
          {
            image:
              "/images/apple-watch-se-2022-40mm-day-silicone-trang-kem-1.jpg",
            color: color.cream,
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
            image: "/images/apple-watch-s8-41mm-do-1.jpg",
            color: color.red,
          },
          {
            image: "/images/apple-watch-s8-41mm-trang-1.jpg",
            color: color.white,
          },

          {
            image: "/images/apple-watch-s8-41mm-trang-kem-1.jpg",
            color: color.cream,
          },

          {
            image: "/images/apple-watch-s8-41mm-den-xanh-1.jpg",
            color: color.darkBlue,
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
              "/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
            color: color.darkBlue,
          },
          {
            image: "/images/apple-watch-s8-gps-45mm-day-silicone-trang-1-1.jpg",
            color: color.white,
          },
          {
            image:
              "/images/dong-ho-thong-minh-apple-watch-s8-trang-starlight-4.jpg",
            color: color.cream,
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
              "/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
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
            image: "/images/apple-watch-ultra-49mm-day-alpine-size-m-cam-1.jpg",
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
            image: "/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 8190000,
        description:
          "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ.",
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
            image: "/images/redmi-watch-3-trang-11.jpg",
            color: color.white,
          },
          {
            image: "/images/redmi-watch-3-active-den-1-1.jpg",
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
        name: "Vòng đeo tay thông minh Xiaomi Redmi Band 2",
        price: 590000,
        qty: 1,
        imageColor: [
          {
            image: "/images/vong-tay-redmi-band-2-trang-1.jpg",
            color: color.white,
          },
          {
            image: "/images/vong-tay-redmi-band-2-1.jpg",
            color: color.darkBlue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 590000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 22,
        image: "",
        name: "Đồng hồ thông minh Xiaomi Watch S1 46.5mm",
        price: 3790000,
        qty: 1,
        imageColor: [
          {
            image: "/images/dong-ho-thong-minh-xiaomi-watch-s1-den-1.jpg",
            color: color.black,
          },
          {
            image: "/images/dong-ho-thong-minh-xiaomi-watch-s1-nau-1.jpg",
            color: color.brown,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 3790000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 23,
        image: "",
        name: "Vòng đeo tay thông minh Mi Band 7 Pro ",
        price: 1490000,
        qty: 1,
        imageColor: [
          {
            image: "/images/vong-tay-thong-minh-mi-band-7-pro-trang-1.jpeg",
            color: color.white,
          },
          {
            image: "/images/vong-tay-mi-band-7-pro-2.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 1490000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 24,
        image: "",
        name: "Đồng hồ thông minh Xiaomi Redmi Watch 2 Lite 41.2mm",
        price: 990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/redmi-watch-2-lite-2-1.jpg",
            color: color.black,
          },
          {
            image: "/images/redmi-watch-2-lite-xanh-duong-1.jpg",
            color: color.blue,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 25,
        image: "",
        name: "Đồng hồ thông minh Xiaomi Redmi Watch 3 Active ",
        price: 1290000,
        qty: 1,
        imageColor: [
          {
            image: "/images/redmi-watch-3-active-den-1-1.jpg",
            color: color.black,
          },
          {
            image: "/images/redmi-watch-3-active-xam-1-1.jpg",
            color: color.gray,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 1290000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
    ],
  },
  {
    name: "SamSung Watch",
    image: "/images/samsung-galaxy-watch6-classic-47mm-den-1.jpg",
    items: [
      {
        id: 26,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch6 Classic 47mm",
        price: 9490000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch6-classic-47mm-bac-2.jpg",
            color: color.white,
          },
          {
            image: "/images/samsung-galaxy-watch6-classic-47mm-den-1.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 9490000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ.",
      },
      {
        id: 27,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch6 LTE 44mm",
        price: 7990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch6-44mm-lte-den-2.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 7990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 28,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch6 44mm ",
        price: 7490000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch6-44mm-bac-1.jpg",
            color: color.cream,
          },
          {
            image: "/images/samsung-galaxy-watch6-44mm-lte-den-2.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 7490000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 29,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch6 40mm",
        price: 6990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch6-40-mm-1.jpg",
            color: color.black,
          },
          {
            image: "/images/samsung-galaxy-watch6-40mm-vang-1.jpg",
            color: color.yellow,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 6990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 30,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch5 40mm",
        price: 4790000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch-5-40-mm-den-1.jpg",
            color: color.black,
          },
          {
            image: "/images/samsung-galaxy-watch-5-40-mm-bac-1.jpg",
            color: color.purple,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 4790000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 31,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch5 44mm",
        price: 6490000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch-5-44-mm-den-1.jpg",
            color: color.black,
          },
          {
            image: "/images/samsung-galaxy-watch-5-44-mm-xanh-1-1.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 6490000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 32,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch4 40mm",
        price: 3690000,
        qty: 1,
        imageColor: [
          {
            image: "/images/smartwatch-samsung-galaxy-watch-4-1.jpg",
            color: color.black,
          },
          {
            image: "/images/smartwatch-samsung-galaxy-watch-4-vang-hong-1.jpg",
            color: color.yellow,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 3690000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 33,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch5 Pro LTE 45mm Đen",
        price: 12990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/sam-sung-galaxy-watch-5-pro-lte-1.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 12990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 34,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch4 LTE Classic 46mm Đen",
        price: 4990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/samsung-galaxy-watch-4-lte-classic-46mm1-org.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 4990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 35,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch5 Pro 45mm",
        price: 11990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/sam-sung-galaxy-watch-5-pro-lte-1.jpg",
            color: color.black,
          },
          {
            image: "/images/sam-sung-galaxy-watch-5-pro-xam-1.jpg",
            color: color.gray,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 11990000,
        description:
          "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
      },
      {
        id: 36,
        image: "",
        name: "Đồng hồ thông minh Samsung Galaxy Watch5 Pro 45mm",
        price: 11990000,
        qty: 1,
        imageColor: [
          {
            image: "/images/sam-sung-galaxy-watch-5-pro-xam-1.jpg",
            color: color.gray,
          },
          {
            image: "/images/sam-sung-galaxy-watch-5-pro-lte-1.jpg",
            color: color.black,
          },
        ],
        color: ["trắng", "đen", "xanh"],
        cartPriceTotal: 11990000,
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
    setTimeout(() => {
      // eslint-disable-next-line eqeqeq
      resolve(products.flatMap((item) => item.items.filter((x) => x.id == id)));
    }, 1000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
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

export const getProductsByKeyword = (keyword) => {
  return new Promise((resolve) => {
    resolve(
      products.flatMap((item) =>
        item.items.filter((value) =>
          value.name.toLowerCase().includes(keyword.toLowerCase())
        )
      )
    );
  });
};

export const newProduct = [
  {
    id: 3,
    image: "",
    name: " Apple Watch S8 GPS 41mm viền nhôm dây silicone",
    price: 8990000,
    priceSale: "",
    qty: 1,
    imageColor: [
      {
        image: "/images/apple-watch-s8-41mm-do-1.jpg",
        color: color.red,
      },
      {
        image: "/images/apple-watch-s8-41mm-trang-1.jpg",
        color: color.white,
      },
      {
        image: "/images/apple-watch-s8-41mm-trang-kem-1.jpg",
        color: color.cream,
      },

      {
        image: "/images/apple-watch-s8-41mm-den-xanh-1.jpg",
        color: color.darkBlue,
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
          "/images/dong-ho-thong-minh-apple-watch-s8-trang-starlight-4.jpg",
        color: color.cream,
      },
      {
        image: "/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
        color: color.darkBlue,
      },
      {
        image: "/images/apple-watch-s8-gps-45mm-day-silicone-trang-1-1.jpg",
        color: color.white,
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
        image: "/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
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
        image: "/images/apple-watch-ultra-49mm-day-alpine-size-m-cam-1.jpg",
        color: color.orange,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 19490000,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
  },
  {
    id: 26,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch6 Classic 47mm",
    price: 9490000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch6-classic-47mm-bac-2.jpg",
        color: color.white,
      },
      {
        image: "/images/samsung-galaxy-watch6-classic-47mm-den-1.jpg",
        color: color.black,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 9490000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ.",
  },
  {
    id: 27,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch6 LTE 44mm",
    price: 7990000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch6-44mm-lte-den-2.jpg",
        color: color.black,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 7990000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 28,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch6 44mm ",
    price: 7490000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch6-44mm-bac-1.jpg",
        color: color.cream,
      },
      {
        image: "/images/samsung-galaxy-watch6-44mm-lte-den-2.jpg",
        color: color.black,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 7490000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ.",
  },
  {
    id: 23,
    image: "",
    name: "Vòng đeo tay thông minh Mi Band 7 Pro ",
    price: 1490000,
    qty: 1,
    imageColor: [
      {
        image: "/images/vong-tay-thong-minh-mi-band-7-pro-trang-1.jpeg",
        color: color.white,
      },
      {
        image: "/images/vong-tay-mi-band-7-pro-2.jpg",
        color: color.black,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 1490000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 24,
    image: "",
    name: "Đồng hồ thông minh Xiaomi Redmi Watch 2 Lite 41.2mm",
    price: 990000,
    qty: 1,
    imageColor: [
      {
        image: "/images/redmi-watch-2-lite-2-1.jpg",
        color: color.black,
      },
      {
        image: "/images/redmi-watch-2-lite-xanh-duong-1.jpg",
        color: color.blue,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 990000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 25,
    image: "",
    name: "Đồng hồ thông minh Xiaomi Redmi Watch 3 Active ",
    price: 1290000,
    qty: 1,
    imageColor: [
      {
        image: "/images/redmi-watch-3-active-den-1-1.jpg",
        color: color.black,
      },
      {
        image: "/images/redmi-watch-3-active-xam-1-1.jpg",
        color: color.gray,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 1290000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
];

export const sellingProducts = [
  {
    id: 7,
    image: "",
    name: "Apple Watch SE 2022 LTE 40mm viền nhôm dây silicone",
    price: 7490000,
    priceSale: "",
    qty: 1,
    imageColor: [
      {
        image: "/images/apple-watch-se-2022-40mm-day-silicone-1.jpg",
        color: color.white,
      },
      {
        image: "/images/apple-watch-se-2022-40mm-day-silicone-trang-kem-1.jpg",
        color: color.cream,
      },

      {
        image: "/images/apple-watch-se-2022-40mm-den-xanh-1.jpg",
        color: color.darkBlue,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 7490000,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ.",
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
        image: "/images/apple-watch-s8-gps-45mm-day-silicone-den-xanh-1.jpg",
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
        image: "/images/apple-watch-ultra-49mm-day-alpine-size-m-cam-1.jpg",
        color: color.orange,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 19490000,
    description:
      "Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Phát hiện té ngã, Báo thức, Nghe nhạc với tai nghe Bluetooth, Gọi điện trên đồng hồ, Từ chối cuộc gọi, Dự báo thời tiết, La bàn, Điều khiển chơi nhạc, Thay mặt đồng hồ",
  },
  {
    id: 10,
    image: "",
    name: "Vòng đeo tay thông minh Xiaomi Redmi Band 2",
    price: 590000,
    qty: 1,
    imageColor: [
      {
        image: "/images/vong-tay-redmi-band-2-trang-1.jpg",
        color: color.white,
      },
      {
        image: "/images/vong-tay-redmi-band-2-1.jpg",
        color: color.darkBlue,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 590000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 22,
    image: "",
    name: "Đồng hồ thông minh Xiaomi Watch S1 46.5mm",
    price: 3790000,
    qty: 1,
    imageColor: [
      {
        image: "/images/dong-ho-thong-minh-xiaomi-watch-s1-den-1.jpg",
        color: color.black,
      },
      {
        image: "/images/dong-ho-thong-minh-xiaomi-watch-s1-nau-1.jpg",
        color: color.brown,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 3790000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 25,
    image: "",
    name: "Đồng hồ thông minh Xiaomi Redmi Watch 3 Active ",
    price: 1290000,
    qty: 1,
    imageColor: [
      {
        image: "/images/redmi-watch-3-active-den-1-1.jpg",
        color: color.black,
      },
      {
        image: "/images/redmi-watch-3-active-xam-1-1.jpg",
        color: color.gray,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 1290000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 28,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch6 44mm ",
    price: 7490000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch6-44mm-bac-1.jpg",
        color: color.cream,
      },
      {
        image: "/images/samsung-galaxy-watch6-44mm-lte-den-2.jpg",
        color: color.black,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 7490000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 29,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch6 40mm",
    price: 6990000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch6-40-mm-1.jpg",
        color: color.black,
      },
      {
        image: "/images/samsung-galaxy-watch6-40mm-vang-1.jpg",
        color: color.yellow,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 6990000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
  {
    id: 30,
    image: "",
    name: "Đồng hồ thông minh Samsung Galaxy Watch5 40mm",
    price: 4790000,
    qty: 1,
    imageColor: [
      {
        image: "/images/samsung-galaxy-watch-5-40-mm-den-1.jpg",
        color: color.black,
      },
      {
        image: "/images/samsung-galaxy-watch-5-40-mm-bac-1.jpg",
        color: color.purple,
      },
    ],
    color: ["trắng", "đen", "xanh"],
    cartPriceTotal: 4790000,
    description:
      "Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ",
  },
];

export const getSellingProducts = () => {
  return new Promise((resolve) => {
    resolve(sellingProducts);
  });
};

export const news = [
  {
    id: 17,
    image: "/images/news-1.jpg",
    time: "15-03-2012",
    name: "Đồng hồ Apple Watch chính hãng bán ra tại VN",
    description:
      "Sau vài tháng ra mắt thị trường, các phiên bản đồng hồ thông minh Apple Watch đã có mặt tại thị trường Việt Nam qua kênh chính hãng, giá từ 11,5 triệu đồng.",
  },
  {
    id: 18,
    image: "/images/news-2.jpg",
    time: "21-08-2013",
    name: "Tính năng đo điện tâm đồ được cập nhật vào Apple Watch",
    description:
      "TTO - Apple từng công bố sẽ đưa các tính năng về tim mạch vào Apple Watch trong tháng 9, nhưng mới đây mới chính thức được áp dụng.",
  },
  {
    id: 19,
    image: "/images/news-3.jpg",
    time: "05-11-2016",
    name: "Smartwacth tốt nhất trên thị trường hiện nay",
    description:
      "Apple Watch Series 5 vừa mới được ra mắt có nhiều tính năng sức khỏe mới, trong đó bao gồm cả một App Store dành riêng cho thiết bị này.",
  },
  {
    id: 20,
    image: "/images/news-4.jpg",
    time: "19-07-2018",
    name: "Phát hiện bệnh lý tim mạch bằng thiết bị đeo tay",
    description:
      "Bạn cũng sẽ kết nối với bác sĩ của mình một cách liên tục và được đánh giá tình trạng sức khỏe một cách thường xuyên hơn.",
  },
  {
    id: 21,
    image: "/images/news-5.jpg",
    time: "18-09-2023",
    name: "Đồng hồ thông minh Apple Watch mới ra mắt",
    description:
      "Bạn cũng sẽ kết nối với bác sĩ của mình một cách liên tục và được đánh giá tình trạng sức khỏe một cách thường xuyên hơn.",
  },
];
