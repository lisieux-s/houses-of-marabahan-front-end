import { useContext } from "react";

import { InteractContext } from "../contexts/InteractContext";

export default function useInteract() {
    const interactContext = useContext(InteractContext);
    return interactContext;
}