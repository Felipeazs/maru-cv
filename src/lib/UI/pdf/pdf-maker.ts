
import { jsPDF } from "jspdf";
import { config } from "./config";

export const pdfMaker = async (element: string) => {

    const doc = new jsPDF({
        orientation: "p",
        format: "letter",
        unit: "px",
        hotfixes: ["px_scaling"],
    });

    doc.setProperties({ title: "maria_eugenia_martinez" })
    const source = window.document.getElementById(element)

    const info = doc.getCurrentPageInfo()
    const pages = info.pageNumber

    await doc.html(source as HTMLElement, config);

    for (let i = 0; i <= pages; i++) {
        doc.deletePage(i)
    }

}

