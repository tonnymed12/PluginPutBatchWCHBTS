sap.ui.define([
    "../controller/Utils/Commons"
], function (Commons) {
    "use strict";
    return {
        /**
         * Extrae el material del valor completo (antes del !)
         * @param {string} sValue - Valor en formato "material!lote"
         * @returns {string} - Solo el material
         */
        getMaterial: function (sValue) {
            if (!sValue || typeof sValue !== 'string') {
                return "";
            }
            const aParts = sValue.split('!');
            return aParts[0] || "";
        },

        /**
         * Extrae el lote del valor completo (después del !)
         * @param {string} sValue - Valor en formato "material!lote!secuencia"
         * @returns {string} - Solo el lote
         */
        getLote: function (sValue) {
            if (!sValue || typeof sValue !== 'string') {
                return "";
            }
            const aParts = sValue.split('!');
            return aParts[1] || "";
        },

        /**
         * Extrae la secuencia del valor completo.
         * Nuevo formato: "material!lote!cantidad!secuencia" (4 partes) → parts[3]
         * Formato anterior: "material!lote!secuencia" (3 partes) → parts[2]
         * @param {string} sValue - Valor en formato "material!lote!cantidad!secuencia"
         * @returns {string} - Solo la secuencia
         */
        getSecuencia: function (sValue) {
            if (!sValue || typeof sValue !== 'string') {
                return "";
            }
            const aParts = sValue.split('!');
            // New format has 4 parts: material!lote!cantidad!secuencia
            return aParts.length >= 4 ? (aParts[3] || "") : (aParts[2] || "");
        }
    };
});
