import { useEffect } from "react";
import api from "../../services/api";

let kinds = []
getKinds();

async function getKinds() {
    kinds = await api.getKinds()
}

export default kinds;