/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} GetAllCategoryResponse
 * @property {number} status
 * @property {string} message
 * @property {number} totalPage
 * @property {number} totalElements
 * @property {Category[]} categoryDtoList
 * @property {string} timestamp
 */

/**
 * @typedef {Object} GetCategoryByIdResponse
 * @property {number} status
 * @property {string} message
 * @property {number} totalPage
 * @property {number} totalElements
 * @property {Category} categoryDto
 * @property {string} timestamp
 */