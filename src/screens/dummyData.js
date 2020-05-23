export const carList = [
  {
    name: 'Toyota C-HR',
    edition: 'All New C-HR Single Tone',
    manufacturer: 'Toyota',
    year: 2020,
    engine: '1.8 L 2ZR-FBE I4',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1800 cc',
      seat: 5,
    },
    price: 'IDR 509.05 - 543.79 mio',
    image: require('../assets/images/toyota-chr.jpeg'),
    value: 'Toyota C-HR',
    badgeColor: '#3d3d3d',
    textColor: '#fff',
  },
  {
    name: 'Honda Civic',
    edition: 'Honda Civic Sedan 1,5L VTEC Turbo',
    manufacturer: 'Honda',
    year: 2020,
    engine: '2.0 L four-cylinder engine/158 horsepower',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1496 cc',
      seat: 5,
    },
    price: 'IDR 533 mio',
    image: require('../assets/images/honda-civic.jpg'),
    value: 'Honda Civic',
    badgeColor: '#fff',
    textColor: '#222',
  },
  {
    name: 'Mazda CX-3',
    edition: 'CX-3 Sport',
    manufacturer: 'Mazda',
    year: 2020,
    engine: '2.0 L SkyActiv-G PE-VPS I4',
    specification: {
      transmission: 'Otomatis',
      fuel: 'Bensin',
      engine: '1998 cc',
      seat: 5,
    },
    price: 'IDR 399.9 mio',
    image: require('../assets/images/mazda-cx3.jpg'),
    value: 'Mazda CX-3',
    badgeColor: '#CB4F40',
    textColor: '#fff',
  },
];

export const dummyProspects = [
  {
    id: 1,
    name: 'Oberyn',
    car: carList[0],
  },
  {
    id: 2,
    name: 'Bjorn',
    car: carList[1],
  },
  {
    id: 3,
    name: 'Ragnar',
    car: carList[2],
  },
  {
    id: 4,
    name: 'Jorah',
    car: carList[1],
  },
  {
    id: 5,
    name: 'Bran',
    car: carList[1],
  },
  {
    id: 6,
    name: 'Hvitserk',
    car: carList[2],
  },
];
