
import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';
import { Category } from '../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories : Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Радиотелефоны' },
    { id: 3, name: 'Чехлы'},
    { id: 4, name: 'Аксессуары'}
  ]
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro с 256 ГБ памятью, оранжевый цвет.',
      price: 842550,
      installment: 174997,
      rating: 5.0,
      likes: 0,
      categoryId: 1, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Apple iPhone 13 128GB черный',
      description: 'Apple iPhone 13 с 128 ГБ памятью, черный цвет.',
      price: 499990,
      installment: 124997,
      rating: 4.8,
      likes: 0,
      categoryId: 1, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 3,
      name: 'Panasonic KX-TG1611RUH',
      description: 'Беспроводная система для домашнего использования с функцией диспетчеризации.',
      price: 19989,
      installment: 4997,
      rating: 4.3,
      likes: 0,
      categoryId: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hcd/63882745479198.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/panasonic-kx-tg1611ruh-100163529/?c=750000000'
    },
    {
      id: 4,
      name: 'DECROSS DC1102B',
      description: 'Беспроводная система для домашнего использования с функцией диспетчеризации.',
      price: 18940,
      installment: 4735,
      rating: 4.9,
      likes: 0,
      categoryId: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h56/80626716049438.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/decross-dc1102b-110206768/?c=750000000'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S23 Ultra 12 ГБ/256 ГБ черный',
      description: 'Samsung Galaxy S23 Ultra с 256 ГБ памяти, черный цвет.',
      price: 494996,
      installment: 216667,
      rating: 4.7,
      likes: 0,
      categoryId: 1, // Смартфоны
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
        id: 6,
        name: "Чехол для Apple iPhone 11 рисунок",
        description: "Защитный чехол для Apple iPhone 11 с оригинальным рисунком.",
        price: 314,
        installment: 78,
        rating: 4.9,
        likes:0,
        categoryId: 3, // Чехлы
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pdc/92240573.bin?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-risunok-130003996/?c=750000000'
    },
    {
      id: 7,
      name: "Чехол для Apple iPhone 13 рисунок",
      description: "Защитный чехол для Apple iPhone 13 с оригинальным рисунком.",
      price: 318,
      installment: 79,
      rating: 4.5,
      likes:0,
      categoryId: 3, // Чехлы
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p1e/92422047.bin?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-risunok-114183031/?c=750000000'
    },
    {
      id: 8,
      name: "Ремешок для Apple Watch Series 4, Watch Series 5, Watch",
      description: "Защитный ремешок для Apple Watch Series 4, Watch Series 5, Watch Series 6.",
      price: 399,
      installment: 99,
      rating: 4.5,
      likes: 0,
      categoryId: 4, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h24/86126877179934.png?format=preview-large',
      link: 'https://kaspi.kz/shop/p/remeshok-dlja-apple-watch-series-4-watch-series-5-watch-series-6-watch-se-watch-se-2nd-gen-chernyi-104189175/?c=750000000'
    },
    {
      id: 9,
      name: "Браслет для Apple Watch Series 5, Watch Series 6, Watch Series 7",
      description: "Защитный браслет для Apple Watch Series 5, Watch Series 6, Watch Series 7.",
      price: 888,
      installment: 222,
      rating: 4.7,
      likes:0,
      categoryId:4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hdc/69481387655198.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/braslet-dlja-apple-watch-series-5-watch-series-6-watch-series-7-serebristyi-109098560/?c=750000000'
    },
    {
      id: 10,
      name: 'Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A07 с 6 ГБ оперативной памяти и 128 ГБ внутренней памяти, черный цвет.',
      price: 68666,
      installment: 216667,
      rating: 4.7,
      likes: 0,
      categoryId: 1, // Смартфоны
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000'
    },
    {
        id: 11,
        name: "Чехол для iPhone 13 рисунок с котиками",
        description: "Защитный чехол для Apple iPhone 13 с оригинальным рисунком котиков.",
        price: 288,
        installment: 78,
        rating: 4.9,
        likes:0,
        categoryId: 3, // Чехлы
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3f/pe3/92240595.bin?format=preview-large',
        link: 'https://kaspi.kz/shop/p/chehol-dlja-iphone-13-risunok-s-kotikami-121726663/?c=750000000'
    },
    {
        id: 12,
        name: "Чехол JASPER для Apple iPhone 17 Pro прозрачный",
        description: "Защитный чехол для Apple iPhone 17 Pro прозрачный.",
        price: 990,
        installment: 78,
        rating: 4.9,
        likes:0,
        categoryId: 3, // Чехлы
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p93/67520454.jpeg?format=preview-large',
        link: 'https://kaspi.kz/shop/p/chehol-jasper-dlja-apple-iphone-17-pro-prozrachnyi-146498145/?c=750000000'
    },
    {
      id: 13,
      name: 'Panasonic KX-TG1611CAH',
      description: 'Беспроводная система для домашнего использования с функцией диспетчеризации.',
      price: 20934,
      installment: 4735,
      rating: 4.9,
      likes: 0,
      categoryId: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h2e/87106185035806.png?format=preview-large',
      link: 'https://kaspi.kz/shop/p/panasonic-kx-tg-1611-ruh-103186917/?c=750000000'
    },
    {
      id: 14,
      name: 'Cordless Speakerphone D1001',
      description: 'Беспроводная система для домашнего использования с функцией диспетчеризации.',
      price: 19770,
      installment: 4735,
      rating: 4.9,
      likes: 0,
      categoryId: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h11/66160588259358.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/cordless-speakerphone-d1001-107736402/?c=750000000'
    },
    {
      id: 15,
      name: 'Motorola C1001CB+',
      description: 'Беспроводная система для домашнего использования с функцией диспетчеризации.',
      price: 22940,
      installment: 4735,
      rating: 4.9,
      likes: 0,
      categoryId: 2, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h9d/84703547523102.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/motorola-c1001cb--115285993/?c=750000000'
    },
    {
        id: 16,
        name: "Чехол для Apple iPhone 11 бордовый",
        description: "Защитный чехол для Apple iPhone 11 бордовый цвет.",
        price: 585,
        installment: 78,
        rating: 4.9,
        likes:0,
        categoryId: 3, // Чехлы
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/hb3/64227586179102.jpg?format=preview-large',
        link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-bordovyi-107198919/?c=750000000'
    },
    {
      id: 17,
      name: 'Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Redmi A3x с 3 ГБ оперативной памяти и 64 ГБ внутренней памяти, черный цвет.',
      price: 52900,
      installment: 216667,
      rating: 4.7,
      likes: 0,
      categoryId: 1, // Смартфоны
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=preview-large',
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      id: 18,
      name: "Стекло A-case для Apple iPhone 15 A-case для Apple iPhone 15",
      description: "Защитное стекло для Apple iPhone 15.",
      price: 850,
      installment: 222,
      rating: 4.7,
      likes:0,
      categoryId:4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/pd4/1316888.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/steklo-a-case-dlja-apple-iphone-15-a-case-dlja-apple-iphone-15-chernyi-124414260/?c=750000000'
    },
    {
      id: 19,
      name: "Держатель ARZA ARZA черный",
      description: "Держатель для Apple iPhone 15.",
      price: 2990,
      installment: 222,
      rating: 4.7,
      likes:0,
      categoryId:4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p02/55021357.jpeg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/derzhatel-arza-arza-chernyi-143082685/?c=750000000'
    },
    {
      id: 20,
      name: "Apple 18W USB-C Power Adapter USB Type-C белый",
      description: "Белый адаптер питания Apple 18W USB-C для зарядки устройств Apple.",
      price: 7898,
      installment: 222,
      rating: 4.7,
      likes:0,
      categoryId:4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
  increaseRating(){
    const product = this.products.find(p => p.rating === 5.0);
    if (product) {
      product.rating = product.rating + 1;
    }
  }
  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
    if (product && product.likes > 1) {
      product.likes = 0;
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}