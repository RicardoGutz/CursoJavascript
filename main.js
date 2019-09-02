axios
  .get("https://api.github.com/users/RicardoGutz")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
