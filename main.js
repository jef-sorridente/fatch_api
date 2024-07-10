$(document).ready(function () {
  //Utilizando facth
  const endpoint = "https://api.github.com/users/jef-sorridente";

  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const fotoPerfil = json.avatar_url;
      const nome = json.name;
      const nomePerfil = json.login;
      const repositorios = json.public_repos;
      const seguidores = json.followers;
      const seguindo = json.following;
      const urlPerfil = json.html_url;

      $("#fotoPerfil").attr("src", fotoPerfil);
      $("#nome").text(nome);
      $("#nomePerfil").text(`@${nomePerfil}`);
      $("#repositorios").text(repositorios);
      $("#seguidores").text(seguidores);
      $("#seguindo").text(seguindo);
      $("#urlPerfil").attr("href", urlPerfil);
    })
    .catch(function (error) {
      alert(`Ocorreu um erro ao buscar os dados, erro: ${error}`);
    });
});
