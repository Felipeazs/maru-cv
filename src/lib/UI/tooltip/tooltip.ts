import tippy from "tippy.js";

export const tooltipy = (node, options) => {
    const tooltip = tippy(node, options);

    return {
        update(options) {
            //@ts-ignore
            tooltip.setProps(options);
        },
        destroy() {
            //@ts-ignore
            tooltip.destroy();
        }
    };

}
