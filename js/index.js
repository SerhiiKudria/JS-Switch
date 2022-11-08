//1
const customer = {
  firstName: "Test",
  lastName: "Testovich",
  email: "test@gmail.com",
  password: "qwerty",
  phoneNumber: "123456",
  adress: {
    city: "Tokio",
    street: "Shevchenka",
    houseNumber: "1A",
    apt: "!23",
  },
  getAdress() {
    return this.adress;
  },
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  },
};

customer.setPhoneNumber("2344");
console.log("customer.getAdress()", customer.getAdress());

customer.isMale = true;
delete customer.adress;
console.log("customer", customer);

const customerTwin = Object.assign({}, customer);
console.log("customerTwin", customerTwin);
const customerTwinTwin = { ...customer };
console.log("customerTwinTwin", customerTwinTwin);

//2
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (const key in cat) {
  console.log(`cat.${key} = ${cat[key]}`);
}

//3
function Book(autor, title, year, publishingHouse, price) {
  this.autor = autor;
  this.title = title;
  this.year = year;
  this.publishingHouse = publishingHouse;
  this.price = price;
  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };
  this.setPrice = function (price) {
    this.price = price;
  };
}

function PublishingHouse(city, title) {
  this.city = city;
  this.title = title;
}

const book = new Book(
  "Some autor",
  "Some title",
  2000,
  new PublishingHouse("London", "PH"),
  200
);

book.setPrice(300);
console.log("book.getAge()", book.getAge());
console.log("book", book);
