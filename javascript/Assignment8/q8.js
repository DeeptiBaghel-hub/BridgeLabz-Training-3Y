'use strict';

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `Movie: ${this.movieName} | Seat: ${this.seatNo} | Ticket price: $${this.price.toFixed(2)}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket('The Great Adventure', 'B12', 14, 2.5);

console.log('Q8 - Movie ticket booking');
console.log(ticket.printTicket());
console.log(`Convenience fee: $${ticket.convenienceFee.toFixed(2)}`);
console.log(`Total amount: $${ticket.getTotalAmount().toFixed(2)}`);
console.log(
  'Prototype chain:',
  MovieTicket.prototype.isPrototypeOf(ticket),
  'and',
  ticket instanceof OnlineTicket
);
