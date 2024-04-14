
// const url = "https://jsonplaceholder.typicode.com/posts";

// const template = (item) => `
// <h3>${item.title}</h3>
// <div>${item.body}</div>
// <p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
// `;

// const xhrPromise = (method, url) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
  
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };   
//   });

//   return promise;
// };

// console.log(xhrPromise("GET", url));

// xhrPromise("GET", url)
// .then(response => {
//     const posts = JSON.parse(response)
// 		let result = ''
//     posts.forEach(item => {
//         result += template(item)
//     })
//     document.getElementById("blog").innerHTML = result;
    
// })

// .then( () => {
//   const users  = document.querySelectorAll('.author');
//   users.forEach(user => {
//     xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
//     .then(response => {
//       let userName = JSON.parse(response)
//       console.log(userName.name)
//       user.textContent = userName.name
//     })
//   })

// });

// Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js

const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

// Функція для отримання даних за допомогою fetch
const fetchData = (url) => {
  return fetch(url) 
    .then(response => { 
      if (!response.ok) { 
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    });
};

console.log(fetchData(url)); 

// Отримання данних та генерація HTML для постів
fetchData(url)
  .then(posts => {
    let result = '';
    posts.forEach(item => {
      result += template(item); 
    });
    document.getElementById("blog").innerHTML = result; 
    return posts; 
  })
  // Отримання данних про користувачів
  .then(posts => {
    const userPromises = posts.map(post => {
      return fetchData(`https://jsonplaceholder.typicode.com/users/${post.userId}`); 
    });
    return Promise.all(userPromises); 
  })
  .then(users => {
    users.forEach((user, index) => {
      const userName = user.name;
      const authorSpan = document.querySelector(`[data-id="${index + 1}"]`); // Знаходження елементів з атрибутом data-id, які відповідають індексам користувачів
      if (authorSpan) {
        authorSpan.textContent = userName; 
      }
    });
  })
  // Обробка помилок
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error); 
  });
