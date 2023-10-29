export const sorting_items = <T extends Record<string, any>>(items: T[], year: number, especialidad: string): T[] => {
    let sortedItems: T[] = items
        .sort(
            (a, b) =>
                Number(new Date(b.fecha ? b.fecha[0] : 0)) - Number(new Date(a.fecha ? a.fecha[0] : 0))
        );

    if (especialidad !== "todas") {
        sortedItems = items
            .filter((si) => si.especialidad === especialidad)
    }

    if (year > 1) {
        sortedItems = sortedItems
            .filter((exp) => Number(exp.fecha ? exp.fecha[0] : 0) === year)
    } else if (year === 1) {
        sortedItems = sortedItems
            .filter((exp) => Number(exp.fecha ? exp.fecha[0] : 0) < 2019)
    }

    return sortedItems
}

export const transform_title = (title: string): string => {
    let new_title: string
    switch (title) {
        case 'experiencia_laboral':
            new_title = 'experiecia laboral'
            break;
        case 'educacion':
            new_title = 'educación'
            break;
        case 'vinculaciones':
            new_title = 'vinculación con el medio'
            break;
        default:
            new_title = title
    }

    return new_title
}
