// src/defaultBooks.js

const defaultBooks = [
  {
    id: 1,
    title: "Book One",
    author: "Author One",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book One. This is a detailed description.",
    genre: "Fiction",
    rating: 4,
    reviews: [
      { review: 'Great book, highly recommend!', rating: 5 },
    ],
  },
];

/* 
const defaultBooks = [
  {
    id: 1,
    title: "Book One",
    author: "Author One",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book One. This is a detailed description.",
    genre: "Fiction",
    rating: 4,
    reviews: [
      { review: 'Great book, highly recommend!', rating: 5 },
    ],
  },
  {
    id: 2,
    title: "Book Two",
    author: "Author Two",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Two. This is a detailed description.",
    genre: "Non-Fiction",
    rating: 5,
    reviews: [
      { review: 'Interesting read, but a bit lengthy.', rating: 3 },
    ],
  },
  {
    id: 3,
    title: "Book Three",
    author: "Author Three",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Three. This is a detailed description.",
    genre: "Science Fiction",
    rating: 3,
    reviews: [
      { review: 'Absolutely loved this book!', rating: 5 },
    ],
  },
  {
    id: 4,
    title: "Book Four",
    author: "Author Four",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Four. This is a detailed description.",
    genre: "Fantasy",
    rating: 4,
    reviews: [
      { review: 'Not my favorite, but okay.', rating: 2 },
    ],
  },
  {
    id: 5,
    title: "Book Five",
    author: "Author Five",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Five. This is a detailed description.",
    genre: "Mystery",
    rating: 5,
    reviews: [
      { review: 'Thrilling and engaging from start to finish.', rating: 4 },
    ],
  },
  {
    id: 6,
    title: "Book Six",
    author: "Author Six",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Six. This is a detailed description.",
    genre: "Fiction",
    rating: 4,
    reviews: [
      { review: 'Great book, highly recommend!', rating: 5 },
    ],
  },
  {
    id: 7,
    title: "Book Seven",
    author: "Author Seven",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Seven. This is a detailed description.",
    genre: "Non-Fiction",
    rating: 5,
    reviews: [
      { review: 'Interesting read, but a bit lengthy.', rating: 3 },
    ],
  },
  {
    id: 8,
    title: "Book Eight",
    author: "Author Eight",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Eight. This is a detailed description.",
    genre: "Science Fiction",
    rating: 3,
    reviews: [
      { review: 'Absolutely loved this book!', rating: 5 },
    ],
  },
  {
    id: 9,
    title: "Book Nine",
    author: "Author Nine",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Nine. This is a detailed description.",
    genre: "Fantasy",
    rating: 4,
    reviews: [
      { review: 'Not my favorite, but okay.', rating: 2 },
    ],
  },
  {
    id: 10,
    title: "Book Ten",
    author: "Author Ten",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Ten. This is a detailed description.",
    genre: "Mystery",
    rating: 5,
    reviews: [
      { review: 'Thrilling and engaging from start to finish.', rating: 4 },
    ],
  },
  {
    id: 11,
    title: "Book One",
    author: "Author One",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book One. This is a detailed description.",
    genre: "Fiction",
    rating: 4,
    reviews: [
      { review: 'Great book, highly recommend!', rating: 5 },
    ],
  },
  {
    id: 12,
    title: "Book Twelve",
    author: "Author Twelve",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Twelve. This is a detailed description.",
    genre: "Non-Fiction",
    rating: 5,
    reviews: [
      { review: 'Interesting read, but a bit lengthy.', rating: 3 },
    ],
  },
  {
    id: 13,
    title: "Book Thirteen",
    author: "Author Thirteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Thirteen. This is a detailed description.",
    genre: "Science Fiction",
    rating: 3,
    reviews: [
      { review: 'Absolutely loved this book!', rating: 5 },
    ],
  },
  {
    id: 14,
    title: "Book Fourteen",
    author: "Author Fourteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Fourteen. This is a detailed description.",
    genre: "Fantasy",
    rating: 4,
    reviews: [
      { review: 'Not my favorite, but okay.', rating: 2 },
    ],
  },
  {
    id: 15,
    title: "Book Fifteen",
    author: "Author Fifteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Fifteen. This is a detailed description.",
    genre: "Mystery",
    rating: 5,
    reviews: [
      { review: 'Thrilling and engaging from start to finish.', rating: 4 },
    ],
  },
  {
    id: 16,
    title: "Book Sixteen",
    author: "Author Sixteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Sixteen. This is a detailed description.",
    genre: "Fiction",
    rating: 4,
    reviews: [
      { review: 'Great book, highly recommend!', rating: 5 },
    ],
  },
  {
    id: 17,
    title: "Book Seventeen",
    author: "Author Seventeen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Seventeen. This is a detailed description.",
    genre: "Non-Fiction",
    rating: 5,
    reviews: [
      { review: 'Interesting read, but a bit lengthy.', rating: 3 },
    ],
  },
  {
    id: 18,
    title: "Book Eighteen",
    author: "Author Eighteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Eighteen. This is a detailed description.",
    genre: "Science Fiction",
    rating: 3,
    reviews: [
      { review: 'Absolutely loved this book!', rating: 5 },
    ],
  },
  {
    id: 19,
    title: "Book Ninteen",
    author: "Author Ninteen",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Ninteen. This is a detailed description.",
    genre: "Fantasy",
    rating: 4,
    reviews: [
      { review: 'Not my favorite, but okay.', rating: 2 },
    ],
  },
  {
    id: 20,
    title: "Book Twenty",
    author: "Author Twenty",
    coverImage: "https://via.placeholder.com/150",
    description: "Description of Book Twenty. This is a detailed description.",
    genre: "Mystery",
    rating: 5,
    reviews: [
      { review: 'Thrilling and engaging from start to finish.', rating: 4 },
    ],
  },
];
 */
export default defaultBooks;
