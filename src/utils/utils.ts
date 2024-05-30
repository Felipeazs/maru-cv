import none from '/images/none.svg'
import contrato from '/images/contrato.svg'
import ong from '/images/ong.svg'
import huella from '/images/huella.svg'
import bioetanol from '/images/bioetanol.svg'
import recycle from '/images/recycle.svg'
import gear from '/images/gear.svg'
import climate from '/images/climate.svg'
import manager from '/images/manager.svg'
import bulb from '/images/bulb.svg'
import town from '/images/town.svg'
import truck from '/images/truck.svg'
import ai from '/images/ai.svg'
import data from '/images/data.svg'
import learning from '/images/learning.svg'
import muni from '/images/muni.svg'
import money from '/images/money.svg'
import adn from '/images/adn.svg'
import circular from '/images/circular.svg'
import cartera from '/images/cartera.svg'
import resources from '/images/resources.svg'
import gas from '/images/gas.svg'
import analisis from '/images/analisis.svg'
import digital from '/images/digital.svg'
import simbiosis from '/images/simbiosis.svg'
import refineria from '/images/refineria.svg'
import fondo from '/images/fondo.svg'
import ciclo from '/images/ciclo.svg'
import algas from '/images/algas.svg'
import lab from '/images/lab.svg'
import energy from '/images/energy.svg'
import communication from '/images/communication.svg'
import bigdata from '/images/bigdata.svg'
import marketing from '/images/marketing.svg'
import cell from '/images/cell.svg'
import flower from '/images/flower.svg'
import biotech from '/images/biotech.svg'
import articulo from '/images/articulo.svg'
import ambiental from '/images/ambiental.svg'
import people from '/images/people.svg'
import yarn from '/images/yarn.svg'
import humedal from '/images/humedal.svg'
import hidrogeno from '/images/hidrogeno.svg'
import ley from '/images/ley.svg'
import bioinfo from '/images/bioinfo.svg'
import software from '/images/software.svg'
import stats from '/images/stats.svg'
import prog from '/images/prog.svg'
import modeling from '/images/modeling.svg'
import tech from '/images/tech.svg'
import deep from '/images/deep.svg'
import eco from '/images/eco.svg'
import report from '/images/report.svg'
import ods from '/images/ods.svg'
import education from '/images/education.svg'
import risk from '/images/risk.svg'
import wallet from '/images/wallet.svg'
import industry from '/images/industry.svg'
import right from '/images/right.svg'
import audit from '/images/audit.svg'
import food from '/images/food.svg'
import bioenergy from '/images/bioenergy.svg'
import linkedin from '/images/linkedin.svg'
import instagram from '/images/instagram.svg'

import type { DataTypes } from '../lib/cv-store'
import dataset from '../../data.json'

export const sorting_items = <T extends Record<string, any>>(items: T[], year: number, especialidad: string): T[] => {
    let sortedItems: T[] = items.sort((a, b) => {
        let rFechaA = ''
        let rFechaB = ''

        if (a.fecha && b.fecha) {
            if (a.fecha[0].includes('|')) {
                rFechaA = a.fecha[0].split('|')[0].split('/').join('/01/')
            } else {
                rFechaA = a.fecha[0].split('/').join('/01/')
            }

            if (b.fecha[0].includes('|')) {
                rFechaB = b.fecha[0].split('|')[0].split('/').join('/01/')
            } else {
                rFechaB = b.fecha[0].split('/').join('/01/')
            }
        }

        return Number(new Date(rFechaB)) - Number(new Date(rFechaA))
    })

    if (especialidad !== 'todas') {
        sortedItems = items.filter((si) => si.especialidad === especialidad)
    }

    if (year > 1) {
        sortedItems = sortedItems.filter((exp) => Number(exp.fecha ? exp.fecha[0] : 0) === year)
    } else if (year === 1) {
        sortedItems = sortedItems.filter((exp) => Number(exp.fecha ? exp.fecha[0] : 0) < 2019)
    }

    return sortedItems
}

export const transform_title = (title: string): string => {
    let new_title: string

    switch (title) {
        case 'experiencia_laboral':
            new_title = 'experiecia laboral'
            break
        case 'educacion':
            new_title = 'educación'
            break
        case 'vinculaciones':
            new_title = 'vinculación con el medio'
            break
        default:
            new_title = title
    }

    return new_title
}

const not_allowed = ['personal', 'idiomas', 'competencias', 'herramientas']
export const extract_tags = (items: DataTypes) => {
    let all_tag_items = []
    for (const d in items) {
        if (!not_allowed.includes(d)) {
            all_tag_items = [...all_tag_items, items[d].flatMap((i: { tags: string }) => i.tags)]
        }
    }

    let all_tags = []
    all_tag_items.forEach((ati) => {
        if (ati) all_tags = [...all_tags, ...ati]
    })

    const uniqueTags = [...new Set(all_tags.filter((at) => at !== undefined))]
    let fullTags = []
    uniqueTags.map((ut) => {
        fullTags = [...fullTags, tag_image(ut)]
    })

    return fullTags.sort((a, b) => a.nombre.localeCompare(b.nombre))
}

export const allItems = (items: DataTypes) => {
    let all = []
    for (const d in items) {
        if (!not_allowed.includes(d)) {
            all = [...all, items[d]]
        }
    }

    all.forEach((items) => {
        items.forEach((item: any) => {
            item.iconos = []
            item.social = []

            item.sociales?.forEach((social: { nombre: string }) => {
                switch (social.nombre) {
                    case 'linkedin':
                        item.social = [...item.social, { ...social, icono: linkedin }]
                        break;
                    case 'instagram':
                        item.social = [...item.social, { ...social, icono: instagram }]
                        break;
                    default:
                }
            })

            item.tags?.sort((a: string, b: string) => a.localeCompare(b))
            item.tags?.forEach((tag: string) => {
                item.iconos = [...item.iconos, tag_image(tag)]
            })
        })
    })

    return all
}

export const extractTitles = (items: DataTypes) => {
    let titles = []
    for (const d in items) {
        if (d !== 'idiomas' && d !== 'competencias' && d !== 'herramientas') {
            titles = [...titles, transform_title(d)]
        }
    }
    return titles
}

const tag_image = (tag: string) => {
    let returnTagImage: { nombre: string; icono: string } = { nombre: tag, icono: '' }
    switch (tag) {
        case 'ingeniería':
            returnTagImage.icono = gear
            break
        case 'sostenibilidad':
            returnTagImage.icono = recycle
            break
        case 'cambio_climático':
            returnTagImage.icono = climate
            break
        case 'dirección_de_empresas':
            returnTagImage.icono = manager
            break
        case 'innovación':
            returnTagImage.icono = bulb
            break
        case 'vinculación_con_el_medio':
            returnTagImage.icono = town
            break
        case 'agroindustria':
            returnTagImage.icono = truck
            break
        case 'municipalidad':
            returnTagImage.icono = muni
            break
        case 'inteligencia_artificial':
            returnTagImage.icono = ai
            break
        case 'data_science':
            returnTagImage.icono = data
            break
        case 'machine_learning':
            returnTagImage.icono = learning
            break
        case 'ciencias_biológicas':
            returnTagImage.icono = adn
            break
        case 'economía_circular':
            returnTagImage.icono = circular
            break
        case 'emprendimiento':
            returnTagImage.icono = cartera
            break
        case 'CORFO':
            returnTagImage.icono = money
            break
        case 'FONDEF':
            returnTagImage.icono = money
            break
        case 'valorización_de_recursos':
            returnTagImage.icono = resources
            break
        case 'biogás':
            returnTagImage.icono = gas
            break
        case 'análisis_técnico_económico':
            returnTagImage.icono = analisis
            break
        case 'herramientas_digitales':
            returnTagImage.icono = digital
            break
        case 'simbiosis_industrial':
            returnTagImage.icono = simbiosis
            break
        case 'biorefinería':
            returnTagImage.icono = refineria
            break
        case 'fondo_europeo':
            returnTagImage.icono = fondo
            break
        case 'análisis_de_ciclo_de_vida':
            returnTagImage.icono = ciclo
            break
        case 'microalgas':
            returnTagImage.icono = algas
            break
        case 'laboratorio':
            returnTagImage.icono = lab
            break
        case 'eficiencia_energética':
            returnTagImage.icono = energy
            break
        case 'comunicación':
            returnTagImage.icono = communication
            break
        case 'big_data':
            returnTagImage.icono = bigdata
            break
        case 'marketing':
            returnTagImage.icono = marketing
            break
        case 'cultivo_celular':
            returnTagImage.icono = cell
            break
        case 'taraxacum':
            returnTagImage.icono = flower
            break
        case 'bioingeniería':
            returnTagImage.icono = biotech
            break
        case 'células_vegetales':
            returnTagImage.icono = cell
            break
        case 'artículo_corto':
            returnTagImage.icono = articulo
            break
        case 'gestión_ambiental':
            returnTagImage.icono = ambiental
            break
        case 'participación_ciudadana':
            returnTagImage.icono = people
            break
        case 'textil':
            returnTagImage.icono = yarn
            break
        case 'humedales_urbanos':
            returnTagImage.icono = humedal
            break
        case 'hidrógeno_verde':
            returnTagImage.icono = hidrogeno
            break
        case 'ley_rep':
            returnTagImage.icono = ley
            break
        case 'bioinformática':
            returnTagImage.icono = bioinfo
            break
        case 'software':
            returnTagImage.icono = software
            break
        case 'estadística':
            returnTagImage.icono = stats
            break
        case 'programación':
            returnTagImage.icono = prog
            break
        case 'biomimesis':
            returnTagImage.icono = modeling
            break
        case 'social':
            returnTagImage.icono = people
            break
        case 'tecnología':
            returnTagImage.icono = tech
            break
        case 'deep_learning':
            returnTagImage.icono = deep
            break
        case 'ecodiseño':
            returnTagImage.icono = eco
            break
        case 'gri_reporting':
            returnTagImage.icono = report
            break
        case 'ods':
            returnTagImage.icono = ods
            break
        case 'educación':
            returnTagImage.icono = education
            break
        case 'el_viaje_del_emprendedor':
            returnTagImage.icono = manager
            break
        case 'análisis_de_riesgos':
            returnTagImage.icono = risk
            break
        case 'finanzas':
            returnTagImage.icono = wallet
            break
        case 'procesos_industriales':
            returnTagImage.icono = industry
            break
        case 'propiedad_intelectual':
            returnTagImage.icono = right
            break
        case 'auditoría':
            returnTagImage.icono = audit
            break
        case 'alimentos':
            returnTagImage.icono = food
            break
        case 'empresa':
            returnTagImage.icono = cartera
            break
        case 'bioenergía':
            returnTagImage.icono = bioenergy
            break
        case 'bioetanol':
            returnTagImage.icono = bioetanol
            break
        case 'huella_de_carbono':
            returnTagImage.icono = huella
            break
        case 'bioeconomía':
            returnTagImage.icono = wallet
            break
        case 'negocios':
            returnTagImage.icono = cartera
            break
        case 'ong':
            returnTagImage.icono = ong
            break
        case 'universidad':
            returnTagImage.icono = education
            break
        case 'convenio':
            returnTagImage.icono = contrato
            break
        case 'up foods':
            returnTagImage.icono = food
            break
        case 'triplets':
            returnTagImage.icono = deep
            break
        default:
            returnTagImage.icono = none 
    }

    return returnTagImage
}


export const allowedElements = [
    "perfil",
    "educacion",
    "proyectos",
    "empresas",
    "experiencias",
    "cursos",
    "presentaciones",
    "publicaciones",
];

export const elements = {
    personal: [
        {
            nombre: "Nacionalidad",
            value: "Chilena",
        },
        {
            nombre: "Email",
            value: "maria.martinez@lazofoods.cl",
        },
        {
            nombre: "Celular",
            value: "+56 9 5257 0413",
        },
        { nombre: "LinkedIn", value: "memartinezv" },
        {
            nombre: "Google Scholar",
            value: "María Eugenia Martínez Valenzuela",
        },
        {
            nombre: "ORCID",
            value: "0000-0001-8455-7356",
        },
        {
            nombre: "Scopus Author ID",
            value: "57213207712",
        },
        {
            nombre: "Reseacher ID",
            value: "HDM-3938-2022",
        },
        {
            nombre: "CV Online",
            value: "https://maru-cv.vercel.app",
        },
    ],
    formacion: [
        {
            nombre: "Profesión",
            value: "Ingeniero Civil Bioquímico, 2010, Pontificia Universidad Católica de Valparaíso.",
        },
        {
            nombre: "Grados académicos",
            value: "Magíster en Ciencias de la Ingeniería con mención en Ingeniería Bioquímica, 2012, Pontificia Universidad Católica de Valparaíso",
        },
    ],
    herramientas: dataset.herramientas
}
