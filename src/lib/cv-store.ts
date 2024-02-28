import { writable } from "svelte/store";

import data from "../../data.json";

const cv = writable(data)

const customCV = {
    subscribe: cv.subscribe,
}

export type DataTypes = (typeof data)

export interface PDFTypes {
    experiencia: typeof data.experiencias;
    empresa: typeof data.empresas;
    educacion: typeof data.educacion;
    proyecto: typeof data.proyectos;
    curso: typeof data.cursos;
    presentacion: typeof data.presentaciones;
    publicacion: typeof data.publicaciones;
    items: number;
}

export default customCV
