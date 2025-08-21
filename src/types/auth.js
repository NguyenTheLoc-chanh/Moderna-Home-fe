// src/types/auth.js

// "Enum" cho role
export const UserRole = Object.freeze({
  ADMIN: 'ADMIN',
  USER: 'USER'
})

// Ví dụ response login từ backend
// Chỉ dùng comment để mô tả type vì JS không có interface
/**
 * @typedef {Object} LoginResponse
 * @property {number} status
 * @property {string} message
 * @property {string} token
 * @property {string} userRole - Sử dụng UserRole hoặc string fallback
 * @property {string} expirationTime
 * @property {number} totalPage
 * @property {number} totalElements
 * @property {string} timestamp
 */

/**
 * @typedef {Object} RegisterResponse
 * @property {number} status
 * @property {string} message
 * @property {string} timestamp
 */

/**
 * @typedef {Object} UserInfoResponse
 * @property {string|number} id
 * @property {string} email
 * @property {string} fullName
 * @property {string} role - Sử dụng UserRole hoặc string fallback
 * @property {string} [createdAt]
 * @property {string} [updatedAt]
 */

/**
 * @typedef {Object} LoginRequest
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} RegisterRequest
 * @property {string} email
 * @property {string} password
 * @property {string} fullName
 */
