import { writable } from "svelte/store";

import data from "../../data.json";

const cv = writable(data)

const customCV = {
    subscribe: cv.subscribe,
}

export type DataTypes = (typeof data)

export default customCV
