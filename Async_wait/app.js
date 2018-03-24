// async function myFunc(){
//   //return 'Hello';

//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello'),1000);
//   });
  
//   const err = false;
//   if(!err){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   }else{
//     await Promise.reject(new Error('Something went wrong...'));
//   }


// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers(){
  // await response of fetching call
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed once it's resovled
  const data = await res.json();
  return data;
}

getUsers()
  .then(users => console.log(users));