const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');// Agregue el # para que tambien sea un ID 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username){// Agregue el async y el response.json()
  try{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data= await response.json();
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
} catch (err){// puse el try catch para que pruebe cada una y ejecute el catch en una excepcion

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
}
}
//aqui se que falta algo pero no se muy bien como ponerlo :'0 
displayUser('stolinski').catch(handleError);