import { path_DEV, path_CMS } from "./envVariables";

// adding PNG library to make magic done
export function updateWysiwygField(text) {
    
    // replacing relative image paths to absolute and target them to CMS endpoint
    const text__fixed_images = text.replaceAll(path_DEV, path_CMS);

    return text__fixed_images;
}