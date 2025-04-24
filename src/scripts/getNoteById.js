import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function obtenerNotaPorId(id) {
    try {
        const docRef = doc(db, "notas", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al obtener nota:", error);
        return null;
    }
}
