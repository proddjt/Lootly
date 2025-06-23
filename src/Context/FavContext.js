import { createContext } from "react";

const FavContext = createContext({
    favs: [],
    setFavs: () => {}
});

export default FavContext