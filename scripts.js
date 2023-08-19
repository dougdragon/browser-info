window.onload = function() {
  let ipAddress;
  // Get the IP address
  const ipAddressElement = document.getElementById("ip-address");
  fetch("https://api.dougdragon.com/ip/")
    .then(response => response.json())
    .then(data => {
      ipAddress = data['ipAddress'];
      console.log(`API response: ${JSON.stringify(data)}`);
      document.getElementById("spinner").style.display = "none";
      ipAddressElement.textContent = data["ipAddress"];

      const geoUrl = `https://api.ipgeolocation.io/ipgeo?ipAddress=${ipAddress}&apiKey=45ef2bbe0aca4a4bb67f55a53a9b9561`;
      fetch(geoUrl)
        .then(resp => resp.json())
        .then(geoData => {
          if (geoData.message) {
            console.log("There was a problem with the geo API: ", geoData.message);
          } else {
            console.log(`Location: ${geoData['city']}, ${geoData['state_prov']} (${geoData['country_name']})`);
            console.log(`Company: ${geoData['organization']}`);
            document.getElementById("geo").textContent = geoData['organization'];
          }
        })
        .catch(err => console.log(err))
      document.getElementById("hostname").style.visibility = "visible";
 
      // add copy link
      const copyLinkContent = document.createElement("span");
      copyLinkContent.className = "uk-margin-left";
      copyLinkContent.innerHTML = `<a id="copyIpLink" onclick="copyIpaddress()">Copy</a>`;
      ipAddressElement.parentNode.insertBefore(copyLinkContent, ipAddressElement.nextSibling);
     })
    .catch(error => ipAddressElement.textContent = `Error: ${error}`);

  // Now display the user agent
  const userAgent = navigator.userAgent;
  console.log(`UserAgent: ${userAgent}`);
  if (userAgent.includes("Macintosh")) {
    // there's probably a better way to do this
    document.getElementById("os").textContent = "Mac OS";
  } else if (userAgent.includes("NT 10.0")) {
    document.getElementById("os").textContent = "Windows 10+";
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

const copyIpaddress = () => {
  const textToCopy = document.getElementById("ip-address").textContent;
    if (window.clipboardData && window.clipboardData.setData) {
        // IE-specific code path to prevent textarea being shown while dialog is visible.
        window.clipboardData.setData("Text", textToCopy);
        console.log("copy success");
        return;
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = textToCopy;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");  // Security exception may be thrown by some browsers.
          document.getElementById("copyIpLink").innerText = "Copied!";
          setTimeout(() => {
            document.getElementById("copyIpLink").innerText = "Copy";
          }, 2000);
            return;
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}
