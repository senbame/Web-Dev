import { Component } from '@angular/core';
import { Product } from '../../models/product.models';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [DecimalPipe]
})
export class ProductList {
  getInstallment(price: number, months: number): number {
      return Math.ceil(price / months);
  }
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro с 256 ГБ памятью, оранжевый цвет.',
      price: 842550,
      installment: 174997,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p1b/64464410.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name : "Смартфон Apple Iphone 13 128GB черный",
      description: "Apple iPhone 13 с 128 ГБ памятью, черный цвет.",
      price: 499990,
      installment: 124997,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 3,
      name: "Чехол для Apple iPhone 11 рисунок",
      description: "Защитный чехол для Apple iPhone 11 с оригинальным рисунком.",
      price: 314,
      installment: 78,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pdc/92240573.bin?format=gallery-medium',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-risunok-130003996/?c=750000000'
    },
    {
      id: 4,
      name: "Чехол для Apple iPhone 13 рисунок",
      description: "Защитный чехол для Apple iPhone 13 с оригинальным рисунком.",
      price: 318,
      installment: 79,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p1e/92422047.bin?format=gallery-medium',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-risunok-114183031/?c=750000000'
    },
    {
      id: 5,
      name: "Зарядное устройство OEM для Huawei Band 6, Band7, Band 8, Watch Fit, Watch FIT2, Watch FIT Special Edition белый",
      description: "Оригинальное зарядное устройство для Huawei Band 6, Band7, Band 8, Watch Fit, Watch FIT2, Watch FIT Special Edition.",
      price: 579,
      installment: 144,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p0c/6001482.jpg?format=gallery-medium',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oem-dlja-huawei-band-6-band7-band-8-watch-fit-watch-fit2-watch-fit-special-edition-belyi-110085299/?c=750000000'
    },
    {
      id: 6,
      name: "Зарядное устройство OEM для Amazfit gts 2, Gtr2 , trex-pro, gtr 2e, gts 2e, gts2 mini черный",
      description: "Оригинальное зарядное устройство для Amazfit gts 2, Gtr2 , trex-pro, gtr 2e, gts 2e, gts2 mini.",
      price: 848,
      installment: 212,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/hcc/65954062762014.jpg?format=gallery-medium',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oem-dlja-amazfit-gts-2-gtr2-trex-pro-gtr-2e-gts-2e-gts2-mini-chernyi-107651152/?c=750000000'
    },
    {
      id: 7,
      name: "Panasonic KX-TG1611RUH",
      description: "Беспроводная система для домашнего использования с функцией диспетчеризации.",
      price: 19989,
      installment: 4997,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hcd/63882745479198.jpg?format=preview-large',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/panasonic-kx-tg1611ruh-100163529/?c=750000000'
    },
    {
      id: 8,
      name: "DECROSS DC1102B",
      description: "Беспроводная система для домашнего использования с функцией диспетчеризации.",
      price: 18940,
      installment: 4735,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h56/80626716049438.jpg?format=preview-large',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/decross-dc1102b-110206768/?c=750000000'
    },
    {
      id: 9,
      name: "Ремешок для Apple Watch Series 4, Watch Series 5, Watch",
      description: "Защитный ремешок для Apple Watch Series 4, Watch Series 5, Watch Series 6.",
      price: 399,
      installment: 99,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h24/86126877179934.png?format=preview-large',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/remeshok-dlja-apple-watch-series-4-watch-series-5-watch-series-6-watch-se-watch-se-2nd-gen-chernyi-104189175/?c=750000000'
    },
    {
      id: 10,
      name: "Браслет для Apple Watch Series 5, Watch Series 6, Watch Series 7",
      description: "Защитный браслет для Apple Watch Series 5, Watch Series 6, Watch Series 7.",
      price: 888,
      installment: 222,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hdc/69481387655198.jpg?format=preview-large',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/braslet-dlja-apple-watch-series-5-watch-series-6-watch-series-7-serebristyi-109098560/?c=750000000'
    }

  ];
  shareWhatsApp(product: Product) {
    const message = `Check out this product: ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}

