module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "^firebase-admin$": '<rootDir>/../../node_modules/firebase-admin',
      "^firebase-admin/app$": "<rootDir>/../../node_modules/firebase-admin/lib/app/index.js",
      "^firebase-admin/auth$": "<rootDir>/../../node_modules/firebase-admin/lib/auth/index.js",
      "^firebase-admin/firestore$": "<rootDir>/../../node_modules/firebase-admin/lib/firestore/index.js",
    },
};
