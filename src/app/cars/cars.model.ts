export class Car {
  id: number;
  name: string;
  image: string;
  price: number;

  constructor({ name, image, price, id }) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
  }
}

export class CarFilters {}

export class CarDetails {}
