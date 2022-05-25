import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
}