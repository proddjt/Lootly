import { createContext } from "react";

const DataGridTitleContext = createContext({
    title: "",
    setTitle: () => {}
});

export default DataGridTitleContext