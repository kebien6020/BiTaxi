/**
  * La global M contiene el objeto que representa a Matetialize CSS.
  */

const linkPerfil = document.querySelectorAll('.dropdown-trigger')
M.Dropdown.init(linkPerfil, {
  coverTrigger: false,
})
