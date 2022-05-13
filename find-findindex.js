/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  const user = usersArray.find(function(obj){
    for (let key in obj) {
      if (obj[key] === username){
        return obj;
      }
    }
    return undefined; 
  })
  return user; 
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const remove = usersArray.findIndex(function(obj){
    for (let key in obj) {
      if(obj[key] === username) {
        return obj[key];
      }
    }
  })
    if (remove !== -1){
      let returnValue = usersArray[remove];
      usersArray.splice(remove, 1);
      return returnValue;
    } else {
      return undefined; 
    }
}