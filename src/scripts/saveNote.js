import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function guardarNota(nota) {
    try {
        const docRef = await addDoc(collection(db, "notas"), {
            fecha: Timestamp.now(),
            aprendizaje: nota.aprendizaje,
            emocion: nota.emocion,
            motivo: nota.motivo,
            logro: nota.logro,
            pensamientos: nota.pensamientos
        });
        return docRef.id;
    } catch (e) {
        console.error("Error al guardar nota:", e);
        return null;
    }
}

