/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/models";
const HTML_LINK = "../../bizon/index.html";

//exports.getMenuItem = function() {
//	return {  
//      "name": "Models",
//      "path": PATH,
//      "link": HTML_LINK
//   };
//};

exports.getSidebarItem = function() {
	return {  
      "name": "Models",
      "path": PATH,
      "link": HTML_LINK,
      "category": "Develop",
      "order": 202
   };
};
