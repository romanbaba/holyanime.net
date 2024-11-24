/**
 * 
 * @param {string} input 
 * @returns 
 */
export const toSlug = (input) => input.toLowerCase().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ö/g, "o").replace(/ı/g, "i").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim("-");