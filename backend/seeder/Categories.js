const categories = [
  {
    name: "Computers",
    description:
      "Computers - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/computer.jpeg",
    attrs: [
      { key: "RAM", value: ["1 TB", "2 TB", "4 TB"] },
      { key: "color", value: ["blue", "red", "green", "black"] },
    ],
  },
  {
    name: "Computers/Laptops",
    description:
      "Computers/Laptops - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/laptop.jpeg",
  },
  {
    name: "Computers/Laptops/Lenovo",
    description:
      "Computers/Laptops/Lenovo - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/lenovo.jpeg",
  },
  {
    name: "Computers/Laptops/Dell",
    description:
      "Computers/Laptops/Dell - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/dell.jpeg",
  },
  {
    name: "Tablets",
    description:
      "Tablets - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/tablets.jpeg",
    attrs: [
      { key: "Brands", value: ["Apple", "Samsung"] },
      { key: "color", value: ["blue", "pink", "black"] },
    ],
  },
  {
    name: "Monitors",
    description:
      "Monitors - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/monitors.jpeg",
    attrs: [
      { key: "Brand", value: ["samsung", "Dell", "MSI"] },
      { key: "Size", value: ["24", "28", "32"] },
    ],
  },
  {
    name: "Software",
    description:
      "Games - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/software.jpeg",
    attrs: [
      {
        key: "Software type",
        value: [
          "Accounting and Finance",
          "AntiVirus and Security",
          "Business and Office",
        ],
      },
    ],
  },
  {
    name: "Printers",
    description:
      "Printers - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/tablets-category.png",
    attrs: [
      { key: "Brand", value: ["epson", "canon", "brother"] },
      { key: "Color", value: ["black", "white"] },
    ],
  },
  {
    name: "SmartHomes",
    description:
      "Software - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/smarthomes.jpeg",
    attrs: [
      { key: "Brand", value: ["epson", "canon", "brother"] },
      {
        key: "smart home",
        value: [
          "smart home lighting",
          "Smart locks and entry",
          "security cameras and systems",
        ],
      },
    ],
  },
  {
    name: "Cameras",
    description:
      "Cameras - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/camera.jpeg",
    attrs: [
      { key: "Brand", value: ["Canon", "Nikkon", "Fujifilm"] },
      { key: "Type", value: ["Camera", "Lens"] },
    ],
  },
  {
    name: "Books",
    description:
      "Books - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/books.jpeg",
    attrs: [
      {
        key: "genre",
        value: [
          "self help",
          "cookbooks",
          "thriller",
          "children's books,",
          "business and money",
          "health, fitness",
        ],
      },
    ],
  },
  {
    name: "Movies & Television",
    description:
      "Videos - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam qui. Accusamus similique placeat at nisi autem eaque molestiae velit.",
    image: "/images/movies.png",
    attrs: [
      {
        key: "Select",
        value: ["Movies", "TV Shows", "4k Ultra HD", "Kids & Family"],
      },
    ],
  },
];

module.exports = categories;
