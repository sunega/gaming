
let back = document.getElementsByClassName("myfile");

const b="https://robohash.org";

const arr = [];

async function myvalue() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        arr.push(...data);
        console.log(data); 
        userListFunc(arr);

    }
    catch(Error){
        return Error;
    } 
} 
myvalue()


function userListFunc(users){
    for(let i=0; i < users.length; i++){

    
        let c = `${b}/${i}`
        let f = `<img src=${c} alt='robo'>`
        let card = document.createElement("div");
        card.setAttribute("class","cardlist");
        let imgview = document.createElement("div");
        imgview.setAttribute("class","myimg");
        

        let con = document.createElement("div");
        con.setAttribute("class","content");
        let contain ="";
        contain +=`<h2>Name:${users[i].name}</h2>
        <h3>Phone No:${users[i].phone}<h3>
        <p>Street:${users[i].address.street}</p>
        <p>Suite:${users[i].address.suite}</p>
        <p>City:${users[i].address.city}</p>
        `

        // console.log(dataarr[i].name);
        // console.log(dataarr[i].phone);
        // console.log(dataarr[i].address.street);
        // console.log(dataarr[i].address.suite);
        // console.log(dataarr[i].address.city);
        imgview.innerHTML=f;
        con.innerHTML=contain;
        card.appendChild(imgview);
        card.appendChild(con);
        back[0].appendChild(card);  
        
    }

}


function mysearch() {
    const searcher = document.getElementById("myinput").value.trim().toLowerCase();
    //console.log(searcher);
    let showCard = document.querySelectorAll(".cardlist");
    //console.log(showCard);
    showCard.forEach(mycard => {
    const Name = mycard.querySelector('h2').innerText.toLowerCase();
    const displayStyle = Name.includes(searcher) ? "" : "none";
    mycard.style.display = displayStyle;
    })
}
   