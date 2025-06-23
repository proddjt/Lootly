import { createContext } from "react";

const DataURLContext = createContext({
    url: "",
    setUrl: () => {}
});

export default DataURLContext