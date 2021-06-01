window.onload = function() {
  // Get the IP address from jsontest
  const ipAddressElement = document.getElementById("ip-address");
  fetch("https://api.dougdragon.com/ip/")
    .then(response => response.json())
    .then(data => {
      console.log(`ipapi response: ${JSON.stringify(data)}`);
      ipAddressElement.textContent = data["ipAddress"]
     })
    .catch(error => ipAddressElement.textContent = `Error: ${error}`);

  // Now display the user agent
  const userAgent = navigator.userAgent;
  console.log(`UserAgent: ${userAgent}`);
  if (userAgent.includes("Macintosh")) {
    // there"s probably a better way to do this
    document.getElementById("os").textContent = "Mac OS";
  } else if (userAgent.includes("NT 10.0")) {
    document.getElementById("os").textContent = "Windows 10";
  } else if (userAgent.includes("NT 6.3")) {
    document.getElementById("os").textContent = "Windows 8.1";
  } else if (userAgent.includes("NT 6.2")) {
    document.getElementById("os").textContent = "Windows 8.1";
  } else if (userAgent.includes("NT 6.1")) {
    document.getElementById("os").textContent = "Windows 7";
  } else if (userAgent.includes("NT 6.0")) {
    document.getElementById("os").textContent = "Windows Vista";
  } else if (userAgent.includes("NT 5.1")) {
    document.getElementById("os").textContent = "Windows XP";
  } else if (userAgent.includes("Android")) {
    document.getElementById("os").textContent = "Android";
  } else {
    document.getElementById("os").textContent = "Unknown, see user agent below";
    document.getElementById("uagent").style.visibility = "visible";
    document.getElementById("ua").textContent = userAgent;
  }
}
