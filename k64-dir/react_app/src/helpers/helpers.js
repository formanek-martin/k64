import { path_DEV, path_CMS } from "./envVariables";

// adding PNG library to make magic done
export function updateWysiwygField(text) {
    console.log("path_DEV: " + path_DEV);
    console.log("path_CMS: " + path_CMS);
    // replacing relative image paths to absolute and target them to CMS endpoint
    const text__fixed_images = text.replaceAll(path_DEV, path_CMS);
    const text__wrapper = `${text__fixed_images}`;

    return text__wrapper;
}