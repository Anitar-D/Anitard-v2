"use strict";
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 6965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getAnime)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


const getAnimeDetails = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
    query ($id: Int) { 
      Media (idMal:$id type:ANIME){
        id
        idMal
        siteUrl
        title {
          romaji
          english
          native
        }
        genres
        studios {
          nodes{
            name
          }
        }
        seasonYear
        season
        coverImage {
          medium
        }
        bannerImage
        volumes
        episodes
        description (asHtml:false)
        averageScore
        status
        format
        trailer {
          id
          site
        }
      }
    }`;
// eslint-disable-line react-hooks/rules-of-hooks
function getAnime(id, type) {
    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(getAnimeDetails, {
        variables: {
            id,
            type
        }
    });
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: " Loading"
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: JSON.stringify(error)
    });
    return data;
}


/***/ })

};
;