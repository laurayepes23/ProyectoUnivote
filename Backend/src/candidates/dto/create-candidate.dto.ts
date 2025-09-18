//Dto. Data Transfer Object
//Sirve para definir la estructura de los datos que se esperan en las solicitudes HTTP
//y para validar esos datos antes de que lleguen a los controladores.
// create-candidate.dto.ts
export class CreateCandidateDto {
    nombre_candidate: string;
    electionId: number; // ← ESTE CAMPO ES OBLIGATORIO
    // Campos opcionales con valores por defecto
    apellido_candidate?: string;
    tipo_doc_candidate?: string;
    num_doc_candidate?: number;
    correo_candidate?: string;
    estado_candidate?: string;
    foto_candidate?: string;
}
