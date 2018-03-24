document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);

document.getElementById('button3').addEventListener('click',getAPI);

function getText(){
  fetch('test.txt').then(res => res.text()).then(text => {
    console.log(text);
    document.getElementById('output').innerHTML = text;
  }).catch(err => console.log(err));
}

function getJson(){
  fetch('posts.json').then(res => res.json()).then(function(json){
    console.log(json);
    let output = '';
    json.forEach(function(post){
      output += ` 
        <li>${post.title}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
   
  }).catch(err => console.log(err));
}

function getAPI(){
  fetch('https://api.github.com/users').then(res => res.json()).then(function(json){
    console.log(json);
    let output = '';
    json.forEach(function(user){
      output += ` 
        <li>${user.login}</li>
      `;
    });
    document.getElementById('output').innerHTML = output;
   
  }).catch(err => console.log(err));
}