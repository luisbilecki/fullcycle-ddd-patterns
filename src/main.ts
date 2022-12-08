import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Luís");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "p1", 10, 1);
const item2 = new OrderItem("2", "p2", 15, 1);

const order = new Order("1", "123", [item1, item2]);