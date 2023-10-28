
export const sorting_items = <T extends Record<string, any>>(items: T[], year: number, especialidad: string): T[] => {
    console.log('sorting', year, especialidad)
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
