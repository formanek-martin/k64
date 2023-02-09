export default function envVariables() {
    const env = window.location.host;

    const path_DEV = `http://localhost/k64/k64-dir/`;
    const path_LIVE = `https://admin.${env}/`;
    const path_current = env === "localhost:3000" ? path_DEV : path_LIVE;

    const path_JSON_API = `http://localhost/k64/k64-dir/web/jsonapi/`;
    return path_JSON_API;
};