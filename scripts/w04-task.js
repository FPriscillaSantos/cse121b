/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "F Priscilla Santos",

    photo: 'images/profile index image.jpeg',

    favoriteFood: [
        'Milk pudding', 
        'Blackberry', 
        'Tapioca Biscuit', 
        'Bean', 
        'Strawberry'
    ],

    hobbies: [
        'To read',
        'Listen to music',
        'Watch K-drama',
        'To dance',
        'Play with my children'
    ],

    placesLived:[],
}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Ribeirão Preto, SP',
        length: '25 years'
    }
);

myProfile.placesLived.push(
    {
      place: 'São Paulo, SP',
      length: '5 anos'
    }
  );

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent =  myProfile.name;

/* Photo with attributes */
let image = document.querySelector('#photo');
image.setAttribute('src', myProfile.photo);
image.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food =>
    {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>
    {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector('#hobbies').appendChild(li);
    });

/* Places Lived DataList */
let placesList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    placesList.appendChild(dt);
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesList.appendChild(dd);
});

