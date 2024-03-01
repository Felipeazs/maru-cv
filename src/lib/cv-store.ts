import { writable } from "svelte/store";

import data from "../../data.json";

const cv = writable(data)

const customCV = {
    subscribe: cv.subscribe,
}

export type DataTypes = (typeof data)

export type EmpresaTypes = typeof data.empresas
export type ExperienciaTypes = typeof data.experiencias
export type EducacionTypes = typeof data.educacion
export type ProyectoTypes = typeof data.proyectos
export type CursoTypes = typeof data.cursos
export type PresentacionTypes = typeof data.presentaciones
export type PublicacionTypes = typeof data.publicaciones

export interface PDFTypes {
    personal: { nombre: string, value: string }[]
    perfil: boolean,
    formacion: { nombre: string, value: string }[]
    experiencias: ExperienciaTypes;
    empresas: EmpresaTypes;
    educacion: EducacionTypes
    proyectos: ProyectoTypes
    cursos: CursoTypes
    presentaciones: PresentacionTypes
    publicaciones: PublicacionTypes
    herramientas: { nombre: string, value: string }[]
    idiomas: { nombre: string, value: string }[]
    items: number;
}

export default customCV
