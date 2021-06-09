// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getSecret() {
  const responseFromServer = await fetch('/secret');
  const textFromResponse = await responseFromServer.text();

  const secretText = document.getElementById('secret');
  secretText.innerHTML = textFromResponse;
}

async function getRandomFact() {
  const responseFromServer = await fetch('/fact');
  const factResponse = await responseFromServer.json();

  const facts = document.getElementById('fact-container');
  facts.innerText = factResponse[Math.floor(Math.random() * factResponse.length)].fact;
}

function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 37.373879, lng: -121.861991}, zoom: 4});

  const hawaii = { lat: 20.902310, lng: -156.372710};
  const mex = { lat: 20.695997, lng: -103.835587}; 
  const tulum = {lat: 20.104851, lng: -87.478951};
  const disney = {lat: 28.373070, lng: -81.556938};
  const pisa = {lat: 43.716667, lng: 10.400000};
  const col = {lat: 41.8902, lng: 12.4922};
  const space  = {lat: 47.6205, lng: -122.3493};

  
  const infowindow = new google.maps.InfoWindow({
    content: "<img src = \"images/IMG_1483.JPG\" style=\"width:500px;height:auto;\"/>",
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: "<img src = \"images/IMG_0961.JPG\" style=\"width:auto;height:500px;\"/>",
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: "<img src = \"images/Tulum.png\" style=\"width:500px;height:auto;\"/>",
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: "<img src = \"images/Disney.png\" style=\"width:500px;height:auto;\"/>",
  });
  const infowindow5 = new google.maps.InfoWindow({
    content: "<img src = \"images/Pisa.png\" style=\"width:500px;height:auto;\"/>",
  });
  const infowindow6 = new google.maps.InfoWindow({
    content: "<img src = \"images/Rome.png\" style=\"width:500px;height:auto;\"/>",
  });
  const infowindow7 = new google.maps.InfoWindow({
    content: "<img src = \"images/SpaceNeedle.png\" style=\"width:500px;height:auto;\"/>",
  });

  const marker = new google.maps.Marker({
    position: hawaii,
    map,
    title: "Hawaii",
  });
  const marker2 = new google.maps.Marker({
    position: mex,
    map,
    title: "Mexico",
  });
  const marker3 = new google.maps.Marker({
    position: tulum,
    map,
    title: "Tulum",
  });
  const marker4 = new google.maps.Marker({
    position: disney,
    map,
    title: "Disney",
  });
  const marker5 = new google.maps.Marker({
    position: pisa,
    map,
    title: "Pisa",
  });
  const marker6 = new google.maps.Marker({
    position: col,
    map,
    title: "Collesum",
  });
  const marker7 = new google.maps.Marker({
    position: space,
    map,
    title: "Space Needle",
  });
  
  


  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  marker2.addListener("click", () => {
    infowindow2.open(map, marker2);
  });
  marker3.addListener("click", () => {
    infowindow3.open(map, marker3);
  });
  marker4.addListener("click", () => {
    infowindow4.open(map, marker4);
  });
  marker5.addListener("click", () => {
    infowindow5.open(map, marker5);
  });
  marker6.addListener("click", () => {
    infowindow6.open(map, marker6);
  });
  marker7.addListener("click", () => {
    infowindow7.open(map, marker7);
  });
}
