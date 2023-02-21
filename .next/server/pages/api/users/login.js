"use strict";
(() => {
var exports = {};
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 3533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 6503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
;// CONCATENATED MODULE: ./components/tokens/verifyTokens.ts

const SECRET_KEY = "your-secret-key-here";
const verifyToken = async (req, res, next)=>{
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new Error();
        }
        const decoded = jwt.verify(token, SECRET_KEY);
        req.token = decoded;
        next();
    } catch (err) {
        res.status(401).send("Please authenticate");
    }
};

// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(3533);
;// CONCATENATED MODULE: ./pages/api/users/login.ts




async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            res.status(400).json({
                message: "Request must be a POST request"
            });
            return;
        }
        const { username , password  } = req.body;
        if (!(username && password)) {
            res.status(400).json({
                message: "Both Username and Password are required, as well as Application/JSON header"
            });
            return;
        }
        const existingUser = await prisma/* default.user.findUnique */.Z.user.findUnique({
            where: {
                username: username
            }
        });
        if (!existingUser) {
            res.status(400).json({
                message: `No user found with username "${username}"`
            });
            return;
        }
        if (await (0,external_bcryptjs_.compare)(password, existingUser.password)) {
            const token = (0,external_jsonwebtoken_namespaceObject.sign)({
                id: existingUser.id,
                username: username
            }, SECRET_KEY, {
                expiresIn: "2h"
            });
            res.status(200).json({
                username: username,
                token: token
            });
            return;
        } else {
            res.status(400).json({
                message: "Incorrect password"
            });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6503));
module.exports = __webpack_exports__;

})();