function generatePassword() {
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
  
    var password = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById("password").value = password;
  }
  
  function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
    // Define the character sets based on the selected checkboxes
    var charset = "";
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      charset += "0123456789";
    }
    if (symbols) {
      charset += "!@#$%^&*()_-+=[]{}|\\:;\"'<>?,./";
    }
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }
  
  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
  }
  