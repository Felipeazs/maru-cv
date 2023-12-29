import tippy from "tippy.js";

export const tooltipy = (node: any, options: any) => {
    const tooltip = tippy(node, options);

    return {
        update(options: any) {
            //@ts-ignore
            tooltip.setProps(options);
        },
        destroy() {
            //@ts-ignore
            tooltip.destroy();
        }
    };

}
