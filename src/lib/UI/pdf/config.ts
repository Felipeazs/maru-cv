import type { jsPDF, HTMLOptions } from "jspdf";

export const config = {
    fontFaces: [
        {
            src: [
                { url: "/fonts/Raleway-Regular.ttf", format: "truetype" },
            ],
            family: "Raleway",
            style: "normal",
            weight: 400,
            stretch: "normal"
        },
        {
            src: [
                { url: "/fonts/Raleway-SemiBold.ttf", format: "truetype" },
            ],
            family: "Raleway",
            style: "normal",
            weight: 500,
            stretch: "normal"
        },
        {
            src: [
                { url: "/fonts/Raleway-Bold.ttf", format: "truetype" },
            ],
            family: "Raleway",
            style: "normal",
            weight: 600,
            stretch: "normal"
        }
    ],
    margin: [70, 0, 70, 0],
    autoPaging: "text",
    filename: "maria_eugenia_martinez",
    callback: function(doc: jsPDF) {
        // var string = doc.output('datauristring');
        // var embed = "<embed width='100%' height='100%' src='" + string + "'/>"
        // var x = window.open();
        // x.document.open();
        // x.document.write(embed);
        // x.document.close();

        doc.save('maria_eugenia_martinez.pdf')
    }
} as HTMLOptions
