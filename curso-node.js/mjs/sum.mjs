// sum.mjs

// --- SINTAXIS ES MODULES (La que estás usando actualmente) ---
export function sum(a, b) {
    return a + b;
}

/**
 * --- SINTAXIS EQUIVALENTE EN COMMONJS (.js o .cjs) ---
 * * Si este archivo fuera 'sum.js' o 'sum.cjs', 
 * la exportación se vería así:
 * * function sum(a, b) {
 * return a + b;
 * }
 * * module.exports = {
 * sum
 * };
 */