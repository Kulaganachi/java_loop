let users=[
    {
        id:1,
        name:"Priya",
        active:true

    },
    {
        id:2,
        name:"Hema",
        active:false

    },
    {
        id:3,
        name:"Vishnu",
        active:true
    },
    {
        id:4,
        name:"Leela",
        active:false
    },
    {
        id:5,
        name:"Kulaganachi",
        active:true
    }
];
// for(let i=0;i<users.length;i++)
// {
//     console.log("User Details:"+i);
//     console.log(users[i]["id"])
//     console.log(users[i]["name"])
//     console.log(users[i]["active"])

    
// }
//console.log(users[0]);
// let obj={
//     "id":1,
//     "user":"Priya",
//     "active":true
// }
// // for(let i in obj){
// //     console.log(i);
// // }
// // for(let i in obj){
// //          console.log(i,obj[i]);
// //      }
// //for(let i in obj){
//         console.log(obj[i]);
//     }
// 
// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i].id,users[i].name,users[i].dept,users[i].active)
//    // console.log(users[i].name)
//     //console.log(users[i].dept)
//     //console.log(users[i].active)
// }
for(let i=0;i<users.length;i++){
    console.log("User Details:"+i);

    let result="";
    for(let temp in users[i]){
        result+=users[i][temp]+="||";

    }
    console.log(result);
}