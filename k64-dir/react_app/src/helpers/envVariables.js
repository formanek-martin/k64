const env = window.location.host.indexOf('www.') && window.location.host || window.location.host.replace('www.', '');

export const path_DEV = `/k64/k64-dir/web/`;
export const path_LOCAL = `http://localhost${path_DEV}`;
export const path_LIVE = `https://admin.${env}/`;
export const path_CMS = env === "localhost:3000" ? path_LOCAL : path_LIVE;