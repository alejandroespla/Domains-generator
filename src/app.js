
window.onload = function() {
  //write your code here

  let domainElement = document.querySelector('#domain'); 

  let pronoun = ['the', 'our', 'a', 'his', 'notyours', 'takea'];
  let adj = ['great', 'big', 'small', 'huge', 'ridiculous', ];
  let noun = ['jogger', 'racoon', 'car', 'mother', 'friend', 'house'];
  let extension = ['.com', '.es', '.net', '.org', '.edu', '.us']

  let pronounIndex = Math.floor(Math.random() * pronoun.length);  
  let adjIndex = Math.floor(Math.random() * adj.length);  
  let nounIndex = Math.floor(Math.random() * noun.length);  
  let extensionIndex = Math.floor(Math.random() * extension.length);  
  
  let domain = `${pronoun[pronounIndex]} ${adj[adjIndex]} ${noun[nounIndex]} ${extension[extensionIndex]}`;  
  domainElement.textContent = domain;
};
