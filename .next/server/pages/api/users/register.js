"use strict";
(() => {
var exports = {};
exports.id = 204;
exports.ids = [204];
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

/***/ 8656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3533);


async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            res.status(405).json({
                message: "Must be a POST request!"
            });
            return;
        }
        const { username , password , firstname , email  } = req.body;
        if (!(username && password && firstname && username)) {
            res.status(405).json({
                message: "Fill the required fields please"
            });
        }
        const existingUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
            where: {
                username: username
            }
        });
        if (existingUser) {
            res.status(405).json({
                message: "Username taken, try another"
            });
            return;
        }
        const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 10);
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.create */ .Z.user.create({
            data: {
                username: username,
                firstname: firstname,
                email: email,
                password: hashedPassword
            }
        });
        res.status(201).json({
            username: user.username,
            email: user.email,
            password: password,
            firstname: user.firstname
        });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json("not ok");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8656));
module.exports = __webpack_exports__;

})();