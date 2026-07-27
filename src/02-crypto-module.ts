import crypto from "node:crypto";

// built-in crypto module in Node.js provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

// The crypto module provides a way of handling encrypted data, generating random numbers, and creating cryptographic hashes. It is widely used for security-related tasks in Node.js applications.

// crypto.randomUUID() generates a random UUID (Universally Unique Identifier) using the built-in crypto module in Node.js. This function is useful for generating unique identifiers for various purposes, such as session IDs, transaction IDs, or any other scenario where a unique identifier is required.

const requestId = crypto.randomUUID();

console.log(`Generated request ID: ${requestId}`);

// password reset token generation
// email verification token generation
// session secret, api keys

// generates a random token of 16 bytes and converts it to a hexadecimal string representation. This token can be used for various purposes, such as password reset tokens, email verification tokens, session secrets, or API keys.
const resetToken = crypto.randomBytes(16).toString("hex"); // 32 characters long hexadecimal string

console.log(`Generated password reset token: ${resetToken}`); 

// crypto.createHash() creates a hash object using the specified algorithm
const password = "piyushpass123";
const hashedPassword = crypto.createHash("sha256").update(password).digest("hex"); // 64 characters long hexadecimal string

console.log(`Hashed password: ${hashedPassword}`);

// crypto.createHmac() creates a HMAC (Hash-based Message Authentication Code) object using the specified algorithm and secret key
const secretKey = "mySecretKey";
const message = "user_id=22";
const signature = crypto.createHmac("sha256", secretKey ).update(message).digest("hex"); // 64 characters long hexadecimal string

console.log(`Generated HMAC signature: ${signature}`);

const verifySignature = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
const verifySignatureInvalid = crypto.createHmac("sha256", secretKey).update(message).digest("hex") + "a"; // adding an extra character to make it invalid

console.log("Signature verification:", signature === verifySignature ? "Valid" : "Invalid");
console.log("Invalid signature verification:", signature === verifySignatureInvalid ? "Valid" : "Invalid");

