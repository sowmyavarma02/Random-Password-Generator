function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const length = document.getElementById("length").value;
  const password = generatePassword(length);
  document.getElementById("result").textContent = password;
});

document.getElementById("copy").addEventListener("click", () => {
  const text = document.getElementById("result").textContent;
  navigator.clipboard.writeText(text);
  alert("Password copied!");
});
