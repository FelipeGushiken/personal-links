const links = {
  github: "felipegushiken",
  youtube: "user/felipetjs",
  instagram: "fegushiken",
  facebook: "fe.gushiken"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class")
    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInformations() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userProfile.href = data.html_url
    userImage.src = data.avatar_url
    userId.textContent = data.login
  })
}

getGithubProfileInformations()