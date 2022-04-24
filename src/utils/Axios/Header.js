export function header({ media, accessToken, Token }) {
    let header = {}
    header["Content-Type"] = !media ? "application/json" : "multipart/form-data"
    if (accessToken) header["Authorization"] = "Bearer " + Token
    return header
}