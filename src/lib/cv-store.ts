import { writable } from "svelte/store";

import data from "../../data.json";

const cv = writable(data)

const customCV = {
    subscribe: cv.subscribe,
}

export type DataTypes = (typeof data)

export type PerfilTypes = typeof data.perfil
export type EmpresaTypes = typeof data.empresas
export type ExperienciaTypes = typeof data.experiencias
export type EducacionTypes = typeof data.educacion
export type ProyectoTypes = typeof data.proyectos
export type CursoTypes = typeof data.cursos
export type PresentacionTypes = typeof data.presentaciones
export type PublicacionTypes = typeof data.publicaciones

export interface PDFTypes {
    perfil: PerfilTypes,
    experiencia: ExperienciaTypes;
    empresa: EmpresaTypes;
    educacion: EducacionTypes
    proyecto: ProyectoTypes
    curso: CursoTypes
    presentacion: PresentacionTypes
    publicacion: PublicacionTypes
    items: number;
}

export default customCV
