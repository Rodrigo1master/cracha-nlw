const linksSocialMedia = {
  github: '',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

//function changeSocialMediaLinks() {
//userName.textContent = 'Rodrigo do Vale '
// for (let li of socialLinks.childrem) {
// const social = li.getAttribute('class')
//li.childrem[0].href = `https://${social`.com/${linksSocialMedia[social]}
//}
//}

//changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/Rodrigo1master'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
