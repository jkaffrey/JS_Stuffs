'use strict';

var people = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      age: 22,
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      age: 57,
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      age: 32,
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
};

// console.log(people.users[0].email);
// for (var i = 0; i < people.users.length; i++) {
//
//   if (people.users[i].user_id === 5)
//     console.log(people.users[i].title);
// }
//
// console.log(people.users[0].user_id);

var agesTotal = 0;
for (var i = 0; i < people.users.length; i++) {

  console.log("----------------------");
  //console.log(Object.keys(people.users[i]));
  Object.keys(people.users[i]).forEach(function (key, index) {

    if (key === 'user_id' || key === 'name' || key === 'age' || key === 'email' || key === 'title' || key === 'photo_url') {

      console.log(key + ":" + people.users[i][key]);
    }

    if (key === 'age') {

      agesTotal += people.users[i][key];
      //peopleCnt++;
    }
  });
}

console.log("Average Age: " + (agesTotal / people.users.length));
