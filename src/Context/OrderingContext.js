import { createContext } from "react";

const OrderingContext = createContext({
    order: "",
    setOrder: () => {}
});

export default OrderingContext