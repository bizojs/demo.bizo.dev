export function isValidHex(value) {
    let hex = value.replace("#", "")
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? true : false
}