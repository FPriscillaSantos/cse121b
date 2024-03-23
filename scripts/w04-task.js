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
        'Watch K-dramas and Run BTS',
        'To read',
        'Listen to music',
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


/* Hobbies List */


/* Places Lived DataList */


