function generateFriendsNickname() {
  let firstName = prompt("Enter your first name:");
  if(firstName.length>4){
    let slicedName = firstName.slice(0, 4);

  const surnames = ["Geller", "Tribbiani", "Buay", "Green", "Bing", "Wheeler", "Hannigan"];

  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

  const nickname = `${slicedName} ${randomSurname}`;

  console.log(`Your Friends Universe Nickname is: ${nickname}`);
  alert(`Your Friends Universe Nickname is: ${nickname}`);
  }
  else{
    console.error(`Your name length ${firstName} is not greater than 4`);
    alert(`Your name length ${firstName} is not greater than 4`);
  }

  
}

generateFriendsNickname();
