
import { jsPDF } from "jspdf";

export const pdfMaker = () => {
    const doc = new jsPDF({
        orientation: "p",
        format: "letter",
        unit: 'px',
        hotfixes: ["px_scaling"]
    });
    doc.addFont("/fonts/Century-Gothic.ttf", "Century-Gothic", "normal")
    doc.setFont("Century-Gothic")

    doc.html(window.document.getElementById('pdf-source'), {
        callback: function(doc) {
            var string = doc.output('datauristring');
            var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
            var x = window.open();
            x.document.open();
            x.document.write(embed);
            x.document.close();
            // doc.save('previewer.pdf')
        },
        x: 10,
        y: 10,
    });
}

