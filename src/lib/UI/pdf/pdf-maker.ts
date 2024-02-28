
import { jsPDF } from "jspdf";
import { config } from "./config";

export const pdfMaker = (element: string) => {

    const doc = new jsPDF({
        orientation: "p",
        format: "letter",
        unit: "px",
        hotfixes: ["px_scaling"],
    });

    const source = window.document.getElementById(element)

    doc.html(source, config);
}

