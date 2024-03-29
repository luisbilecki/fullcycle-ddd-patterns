import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/order_item";
import Customer from "./domain/customer/entity/customer";
import Address from "./domain/customer/value-object/address";

let customer = new Customer("123", "Luís");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "product 1", "p1", 10, 1);
const item2 = new OrderItem("2", "product 2", "p2", 15, 1);

const order = new Order("1", "123", [item1, item2]);