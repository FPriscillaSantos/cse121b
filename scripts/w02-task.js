// Declare and instantiate variables
const fullName = "Fabiana Priscilla Santos"; // Preencha com seu nome
const currentYear = new Date().getFullYear(); // Obtém o ano atual
const profilePicture = 'images/profile index image.jpeg'; // Preencha com o caminho e nome do seu arquivo de imagem de perfil

// Obtém elementos HTML
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

// Adiciona conteúdo ao documento
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

// Arrays
let favFoods = ['Milk pudding', 'Blackberry', 'Tapioca Biscuit', 'Bean', 'Strawberry'];
const newFavoriteFood = 'Caesar Salad'; 


// 5 comidas favoritas
const firstLine = favFoods.join(', ');
foodElement.innerHTML += `${firstLine}<br>`;

// 5 comidas favoritas + 1 nova comida favorita
favFoods.push(newFavoriteFood);
const secondLine = favFoods.join(', ');
foodElement.innerHTML += `${secondLine}<br>`;

// 5 comidas favoritas (excluindo a primeira)
const thirdLine = favFoods.slice(1).join(', ');
foodElement.innerHTML += `${thirdLine}<br>`;

// 4 comidas favoritas (excluindo a primeira)
const fourthLine = favFoods.slice(1, 5).join(', ');
foodElement.innerHTML += `${fourthLine}<br>`;






