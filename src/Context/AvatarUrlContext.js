import { createContext } from "react";

const AvatarUrlContext = createContext({
    avatarUrl: "",
    setAvatarUrl: () => {}
});

export default AvatarUrlContext