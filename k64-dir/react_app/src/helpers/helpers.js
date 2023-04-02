import { is_LIVE, path_DEV, path_CMS } from "./envVariables";

// adding PNG library to make magic done
export function updateWysiwygField(text) {

    

    // replacing relative image paths to absolute and target them to CMS endpoint
    const url_part = is_LIVE ? "/" : path_DEV;
    const path_to_be_replaced = url_part + "sites/default/";
    const path_to_be_added = path_CMS + "sites/default/";

    console.log("path_to_be_replaced: " + path_to_be_replaced);
    console.log("path_to_be_added: " + path_to_be_added);
    
    const text__fixed_images = text.replaceAll(path_to_be_replaced, path_to_be_added);
    const text__wrapper = `${text__fixed_images}`;

    return text__wrapper;
}