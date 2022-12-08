import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        
        expect(() => {
            new Order("", "123", [])
        }).toThrowError("Id is required");
    })

    it("should throw error when customer id is empty", () => {
        
        expect(() => {
            new Order("1", "", [])
        }).toThrowError("Customer Id is required");
    })

    it("should throw error when order has items", () => {
        
        expect(() => {
            new Order("1", "222", [])
        }).toThrowError("Items are required");
    })

    it("should calculate total", () => {
        const item1 = new OrderItem("i1", "Item 1", 10);
        const item2 = new OrderItem("i1", "Item 1", 50);
        const order1 = new Order("o1", "c1", [item1]);
        let total = order1.total();
        
        expect(total).toBe(10);

        const order2 = new Order("o2", "c1", [item1, item2]);
        total = order2.total();
        
        expect(total).toBe(60);
    })
});