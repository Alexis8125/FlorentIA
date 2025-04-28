import { db } from '../firebaseConfig'; // Ajusta la ruta si es diferente
import { collection, addDoc } from 'firebase/firestore';

// Función para guardar archivo
export async function guardarArchivo(userId, fileData) {
    try {
        const filesCollectionRef = collection(db, `users/${userId}/files`);
        await addDoc(filesCollectionRef, fileData);
        console.log('Archivo guardado exitosamente.');
    } catch (error) {
        console.error('Error al guardar el archivo:', error);
    }
}
// //para cuando lo necesite importar va a ser Cuando quieras guardar un archivo,
// import { guardarArchivo } from '../scripts/guardarArchivo.js';
// y pego esto en el lugar donde lo necesite usar 
// const userId = "1073827510"; // id actual del usuario
// const nuevoArchivo = {
//   fileName: "Mi Archivo",
//   fileUrl: "https://miurl.com/archivo.pdf",
//   uploadDate: "2025-04-27",
//   fileDescription: "Una breve descripción"
// };

// guardarArchivo(userId, nuevoArchivo);

