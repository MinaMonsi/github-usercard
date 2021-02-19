/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

axios.get("https://api.github.com/users/MinaMonsi").then(response => {
  const userData = response.data;
  console.log("userData", userData);
  const card = cardMaker(userData);
  console.log("card");
})
.catch(err => {
  console.log(err)
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(userData){
  //Creating card div
  const cards = document.querySelector('.cards');
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const img = document.createElement('img');
  //creating cardInfo div
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const h3 = document.createElement('h3');
  h3.classList.add('name')
  //creating <p> & <a> for cardInfo
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const aTag = document.createElement('a');
  const paragraph4 = document.createElement('p');
  const paragraph5 = document.createElement('p');
  const paragraph6 = document.createElement('p');
  
  //appending elements & adding text
  cardDiv.appendChild(img);
  img.src = `${userData.avatar_url}`;
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(paragraph1);
  paragraph1.classList.add('username');
  cardInfo.appendChild(paragraph2);
  paragraph2.textContent = `Name: ${userData.name}`;
  cardInfo.appendChild(paragraph3);
  paragraph3.textContent = `Profile: ${userData.html_url}`;
  cardInfo.appendChild(aTag);
  cardInfo.appendChild(paragraph4);
  paragraph4.textContent = `Followers: ${userData.followers}`
  cardInfo.appendChild(paragraph5);
  paragraph5.textContent = `Following: ${userData.following}`
  cardInfo.appendChild(paragraph6);
  paragraph6.textContent = `Bio: ${userData.bio}`;

  cards.appendChild(cardDiv);

  return cardDiv

}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
