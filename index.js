
module.exports = {
    validateEmail: function(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    },
  
    validateUsername: function(username) {
      const re = /^[a-zA-Z0-9_-]{3,16}$/;
      return re.test(String(username));
    },
  
    validateName: function(name) {
      // Name can contain alphabets, spaces, and hyphens, with a length between 2 and 50 characters
      const re = /^[a-zA-Z -]{2,50}$/;
      return re.test(name);
    },
  
    validateMobileNumber: function(mobileNumber) {
      // Mobile number should contain 10 digits
      const re = /^[0-9]{10}$/;
      return re.test(mobileNumber);
    },
  
    validatePassword: function(password) {
      // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[0-9a-zA-Z!@#$%^&*()_+}{"':;?/>.<,]{8,}$/;
      return re.test(String(password));
    },
  
    validateIPAddress: function(ipAddress) {
      const re = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
      return re.test(ipAddress);
    },
  
    validateMACAddress: function(macAddress) {
      const re = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
      return re.test(macAddress);
    },
  
    validateJWTToken: function(jwtToken) {
      const re = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_+/=]*$/;
      return re.test(jwtToken);
    },
  
    validateURL: function(url) {
      const re = /^(ftp|http|https):\/\/[^ "]+$/;
      return re.test(url);
    }
};
  