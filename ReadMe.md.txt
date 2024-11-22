# API Form

## Description
This project is a simple web page with a form that allows users to select different data types (Posts, Comments, Todos, Users) and fetch data from the JSONPlaceholder API based on the selected options.

## Features
- Form with checkboxes for Posts, Comments, Todos, and Users.
- Submit button to fetch and display data.
- Clear button to reset the form and clear the displayed data.
- Form validation to ensure at least one checkbox is selected before submission.
- Separate or combined data display based on the selected options.

## Technical Details
- HTML5, CSS3, and ES6 are used.
- No additional frameworks, libraries, or packages are used.

## Challenges
- Handling asynchronous API calls and combining data from different endpoints.
- Ensuring the form validation and clear button functionality work as expected.

## How to Use
1. Open `homework.html` in a web browser.
2. Select one or more checkboxes.
3. Click the Submit button to fetch and display data.
4. Click the Clear button to reset the form and clear the displayed data.


## https://jsonplaceholder.typicode.com/Comments  Sample data
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }]

## https://jsonplaceholder.typicode.com/Todos  Sample data

[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  }]


## https://jsonplaceholder.typicode.com/Users Sample data

[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }]

## https://jsonplaceholder.typicode.com/Posts  Sample data
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }]

