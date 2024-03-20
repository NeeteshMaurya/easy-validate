# easy-validate

A simple validation package for common data types in Node.js.

## Installation

Install the package via npm:

```bash
npm install easy-validate
```
## Usage

```javascript
const { validateEmail, validateURL, validatePhoneNumber, validateUsername, validatePassword, validateName, validateIPAddress, validateMACAddress, validateJWTToken } = require('easy-validate');

// Validate an email address
const email = 'test@example.com';
console.log('Email validation:', validateEmail(email)); // true

// Validate a URL
const url = 'https://example.com';
console.log('URL validation:', validateURL(url)); // true

// Validate a phone number (validate 10 numbers)
const phoneNumber = '1234567890';
console.log('Phone number validation:', validatePhoneNumber(phoneNumber)); // true

// Validate a username
const username = 'user123';
console.log('Username validation:', validateUsername(username)); // true

// Validate a password
const password = 'Passw0rd!';
console.log('Password validation:', validatePassword(password)); // true

// Validate a name
const name = 'John Doe';
console.log('Name validation:', validateName(name)); // true

// Validate an IP address
const ipAddress = '192.168.0.1';
console.log('IP address validation:', validateIPAddress(ipAddress)); // true

// Validate a MAC address
const macAddress = '00:1A:2B:3C:4D:5E';
console.log('MAC address validation:', validateMACAddress(macAddress)); // true

// Validate a JWT token
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
console.log('JWT token validation:', validateJWTToken(jwtToken)); // true

