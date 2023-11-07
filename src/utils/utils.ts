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

export const sorting_items = <T extends Record<string, any>>(items: T[], year: number, especialidad: string): T[] => {
    let sortedItems: T[] = items.sort((a, b) => Number(new Date(b.fecha ? b.fecha[0] : 0)) - Number(new Date(a.fecha ? a.fecha[0] : 0)))

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

export const allItems = <T>(items: T) => {
    let all = []
    for (const d in items) {
        if (d !== 'idiomas' && d !== 'competencias' && d !== 'herramientas') {
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
                    default:
                }
            })

            item.tags?.sort((a: string, b: string) => a.localeCompare(b))
            item.tags?.forEach((tag: string) => {
                switch (tag) {
                    case 'ingeniería':
                        item.iconos = [...item.iconos, { nombre: tag, icono: gear }]
                        break
                    case 'sostenibilidad':
                        item.iconos = [...item.iconos, { nombre: tag, icono: recycle }]
                        break
                    case 'cambio_climático':
                        item.iconos = [...item.iconos, { nombre: tag, icono: climate }]
                        break
                    case 'dirección_de_empresas':
                        item.iconos = [...item.iconos, { nombre: tag, icono: manager }]
                        break
                    case 'innovación':
                        item.iconos = [...item.iconos, { nombre: tag, icono: bulb }]
                        break
                    case 'vinculación_con_el_medio':
                        item.iconos = [...item.iconos, { nombre: tag, icono: town }]
                        break
                    case 'agroindustria':
                        item.iconos = [...item.iconos, { nombre: tag, icono: truck }]
                        break
                    case 'municipalidad':
                        item.iconos = [...item.iconos, { nombre: tag, icono: muni }]
                        break
                    case 'inteligencia_artificial':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ai }]
                        break
                    case 'data_science':
                        item.iconos = [...item.iconos, { nombre: tag, icono: data }]
                        break
                    case 'machine_learning':
                        item.iconos = [...item.iconos, { nombre: tag, icono: learning }]
                        break
                    case 'ciencias_biológicas':
                        item.iconos = [...item.iconos, { nombre: tag, icono: adn }]
                        break
                    case 'economía_circular':
                        item.iconos = [...item.iconos, { nombre: tag, icono: circular }]
                        break
                    case 'emprendimiento':
                        item.iconos = [...item.iconos, { nombre: tag, icono: cartera }]
                        break
                    case 'CORFO':
                        item.iconos = [...item.iconos, { nombre: tag, icono: muni }]
                        break
                    case 'FONDEF':
                        item.iconos = [...item.iconos, { nombre: tag, icono: muni }]
                        break
                    case 'valorización_de_recursos':
                        item.iconos = [...item.iconos, { nombre: tag, icono: resources }]
                        break
                    case 'biogás':
                        item.iconos = [...item.iconos, { nombre: tag, icono: gas }]
                        break
                    case 'análisis_técnico_económico':
                        item.iconos = [...item.iconos, { nombre: tag, icono: analisis }]
                        break
                    case 'herramientas_digitales':
                        item.iconos = [...item.iconos, { nombre: tag, icono: digital }]
                        break
                    case 'simbiosis_industrial':
                        item.iconos = [...item.iconos, { nombre: tag, icono: simbiosis }]
                        break
                    case 'biorefinería':
                        item.iconos = [...item.iconos, { nombre: tag, icono: refineria }]
                        break
                    case 'fondo_europeo':
                        item.iconos = [...item.iconos, { nombre: tag, icono: fondo }]
                        break
                    case 'análisis_de_ciclo_de_vida':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ciclo }]
                        break
                    case 'microalgas':
                        item.iconos = [...item.iconos, { nombre: tag, icono: algas }]
                        break
                    case 'laboratorio':
                        item.iconos = [...item.iconos, { nombre: tag, icono: lab }]
                        break
                    case 'eficiencia_energética':
                        item.iconos = [...item.iconos, { nombre: tag, icono: energy }]
                        break
                    case 'comunicación':
                        item.iconos = [...item.iconos, { nombre: tag, icono: communication }]
                        break
                    case 'big_data':
                        item.iconos = [...item.iconos, { nombre: tag, icono: bigdata }]
                        break
                    case 'marketing':
                        item.iconos = [...item.iconos, { nombre: tag, icono: marketing }]
                        break
                    case 'cultivo_celular':
                        item.iconos = [...item.iconos, { nombre: tag, icono: cell }]
                        break
                    case 'taraxacum':
                        item.iconos = [...item.iconos, { nombre: tag, icono: flower }]
                        break
                    case 'bioingeniería':
                        item.iconos = [...item.iconos, { nombre: tag, icono: biotech }]
                        break
                    case 'células_vegetales':
                        item.iconos = [...item.iconos, { nombre: tag, icono: cell }]
                        break
                    case 'artículo_corto':
                        item.iconos = [...item.iconos, { nombre: tag, icono: articulo }]
                        break
                    case 'gestión_ambiental':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ambiental }]
                        break
                    case 'actividad_municipal':
                        item.iconos = [...item.iconos, { nombre: tag, icono: muni }]
                        break
                    case 'participación_ciudadana':
                        item.iconos = [...item.iconos, { nombre: tag, icono: people }]
                        break
                    case 'textil':
                        item.iconos = [...item.iconos, { nombre: tag, icono: yarn }]
                        break
                    case 'humedales_urbanos':
                        item.iconos = [...item.iconos, { nombre: tag, icono: humedal }]
                        break
                    case 'hidrógeno_verde':
                        item.iconos = [...item.iconos, { nombre: tag, icono: hidrogeno }]
                        break
                    case 'ley_rep':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ley }]
                        break
                    case 'bioinformática':
                        item.iconos = [...item.iconos, { nombre: tag, icono: bioinfo }]
                        break
                    case 'software':
                        item.iconos = [...item.iconos, { nombre: tag, icono: software }]
                        break
                    case 'estadística':
                        item.iconos = [...item.iconos, { nombre: tag, icono: stats }]
                        break
                    case 'programación':
                        item.iconos = [...item.iconos, { nombre: tag, icono: prog }]
                        break
                    case 'biomimesis':
                        item.iconos = [...item.iconos, { nombre: tag, icono: modeling }]
                        break
                    case 'social':
                        item.iconos = [...item.iconos, { nombre: tag, icono: people }]
                        break
                    case 'tecnología':
                        item.iconos = [...item.iconos, { nombre: tag, icono: tech }]
                        break
                    case 'deep_learning':
                        item.iconos = [...item.iconos, { nombre: tag, icono: deep }]
                        break
                    case 'ecodiseño':
                        item.iconos = [...item.iconos, { nombre: tag, icono: eco }]
                        break
                    case 'gri_reporting':
                        item.iconos = [...item.iconos, { nombre: tag, icono: report }]
                        break
                    case 'ods':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ods }]
                        break
                    case 'educación':
                        item.iconos = [...item.iconos, { nombre: tag, icono: education }]
                        break
                    case 'administración_de_empresas':
                        item.iconos = [...item.iconos, { nombre: tag, icono: manager }]
                        break
                    case 'análisis_de_riesgos':
                        item.iconos = [...item.iconos, { nombre: tag, icono: risk }]
                        break
                    case 'finanzas':
                        item.iconos = [...item.iconos, { nombre: tag, icono: wallet }]
                        break
                    case 'procesos_industriales':
                        item.iconos = [...item.iconos, { nombre: tag, icono: industry }]
                        break
                    case 'propiedad_intelectual':
                        item.iconos = [...item.iconos, { nombre: tag, icono: right }]
                        break
                    case 'auditoría':
                        item.iconos = [...item.iconos, { nombre: tag, icono: audit }]
                        break
                    case 'alimentos':
                        item.iconos = [...item.iconos, { nombre: tag, icono: food }]
                        break
                    case 'empresa':
                        item.iconos = [...item.iconos, { nombre: tag, icono: cartera }]
                        break
                    case 'bioenergía':
                        item.iconos = [...item.iconos, { nombre: tag, icono: bioenergy }]
                        break
                    case 'bioetanol':
                        item.iconos = [...item.iconos, { nombre: tag, icono: bioetanol }]
                        break
                    case 'huella_de_carbono':
                        item.iconos = [...item.iconos, { nombre: tag, icono: huella }]
                        break
                    case 'bioeconomía':
                        item.iconos = [...item.iconos, { nombre: tag, icono: wallet }]
                        break
                    case 'negocios':
                        item.iconos = [...item.iconos, { nombre: tag, icono: cartera }]
                        break
                    case 'ong':
                        item.iconos = [...item.iconos, { nombre: tag, icono: ong }]
                        break
                    case 'universidad':
                        item.iconos = [...item.iconos, { nombre: tag, icono: education }]
                        break
                    case 'convenio':
                        item.iconos = [...item.iconos, { nombre: tag, icono: contrato }]
                        break
                    default:
                        item.iconos = [...item.iconos, { nombre: tag, icono: '' }]
                }
            })
        })
    })

    return all
}

export const extractTitles = <T>(items: T) => {
    let titles = []
    for (const d in items) {
        if (d !== 'idiomas' && d !== 'competencias' && d !== 'herramientas') {
            titles = [...titles, transform_title(d)]
        }
    }
    return titles
}
