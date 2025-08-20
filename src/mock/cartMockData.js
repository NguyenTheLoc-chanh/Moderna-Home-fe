// src/mock/cartMockData.js

const cartMockData = {
  cartItems: [
    {
      id: 1,
      name: 'Ghế Sofa Gỗ Sồi',
      price: 4500000,
      quantity: 2,
      image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg'
    },
    {
      id: 3,
      name: 'Tủ Gỗ Treo Tường',
      price: 2200000,
      quantity: 3,
      image: 'https://res.cloudinary.com/dj50penkd/image/upload/v1754969872/efz4salhk20tvaphtpj5.jpg'
    }
  ],
  totalQuantity: 2 + 1 + 3, // 6
  totalAmount:
    2 * 4500000 +
    1 * 1800000 +
    3 * 2200000 // 17400000
}

export default cartMockData
