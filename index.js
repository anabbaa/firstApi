function fetchApi() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let userCard = "<h2>Comments API response </h2>";
        data.forEach((comm)=>{
            let {postid, id , name, email, body} = comm;
            userCard += `
        <div id=${id}>
        <span> ${postid}</span>
        <h3>${name}</h3>
        <span> ${email}</span>
        <span> ${body}</span>
        </div>
        `;
        });
        document.querySelector(".result").innerHTML = userCard;
  })

.catch((err) => console.log(err));
}

function fetchJsonFile() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let userCard = "<h2>todo API response </h2>";
        data.forEach((todo)=>{
          let { userId, id, title, completed} = todo;
          userCard += `
          <div id=${id}>
          <span> ${userId}</span>
          <span> ${title}</span>
          <span> ${completed}</span>
          </div>
          `;
        });
        document.querySelector(".result").innerHTML = userCard;
      })
      .catch((err) => console.log(err));
  }