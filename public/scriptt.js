const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "lisa-bot-discord.glitch.me/";
const response = proxyurl + url;
fetch(proxyurl + url)
  .then(response => response.json())
  .then(
    contents => (document.getElementById("uptime2").innerHTML = contents.uptime)
  )
  .catch(err =>
    console.log(err + "Can’t access " + url + " response. Blocked by browser?")
  );
