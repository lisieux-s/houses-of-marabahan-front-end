import { useContext } from "react";

import { InteractContext } from "../contexts/InteractContext";

export default function useAuth() {
    const interactContext = useContext(InteractContext);
    return interactContext;
}