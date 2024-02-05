/**
 * SvelteKit Action to handle a keybind
 * @param   {HTMLElement}    node - The element that the action is used on
 * @param   {Object}      options - The options for the action
 * @param   {String}  options.key - The key to bind to
 * @listens event:keyup
 * @fires   keybind               - Use with `on:keybind`
 * @returns {Void}
 * @example
 * <div use:keybind={{ key: "F" }} on:keybind={handleKeybind}>
 * ...
 * </div>
 */
export function keybind(node, { key }) {
    if (!key) return
    const handleKeybind = (event) => {
        if (event.key === key && event.shiftKey) {
            node.dispatchEvent(new CustomEvent("keybind"))
        }
    }
    document.addEventListener("keyup", handleKeybind)
    return {
        destroy() {
            document.removeEventListener("keyup", handleKeybind)
        }
    }
}