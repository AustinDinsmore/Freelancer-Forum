//creating initial array
const freelancers = [
    { name: "Leo", occupation: "Teacher", price: "$30"},
    { name: "Nichole", occupation: "Programmer", price: "$75"},
    { name: "Luna", occupation: "Writter", price: "$50"},
];

//creating secondary array
const newFreelancers = [
    { name: "Kathy", occupation: "Journalist", price: "$66"},
    { name: "Jesus", occupation: "Commedian", price: "$81"},
    { name: "Charles", occupation: "Song Writter", price: "$125"},
    { name: "Sarah", occupation: "Programmer", price: "$80"},
];

function init(){
//linking js to id in the body of the HTML
    const root = document.querySelector("#root");
//creating & adding header
    const forumTitle = document.createElement("h1");
    forumTitle.innerText = "Freelancer Forum";
    root.append(forumTitle);

//create table with freelancers
    const forumTable = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

//create header row for table
    for (let key of Object.keys(freelancers[0])){
        const th = document.createElement("th");
        th.innerText = key;
        thead.appendChild(th);
    }

//adding initial freelancers to table
    forumTable.appendChild(thead);
    forumTable.appendChild(tbody);
    root.appendChild(forumTable);

    //call data for table
    renderFreelancers();
}

function renderFreelancers(){
    const forumTable = document.querySelector("tbody");
    const forumElements = freelancers.map((freelancer) => {

        const row = document.createElement("tr");

        const f_name = document.createElement("td");
        f_name.innerText = freelancer.name;

        const f_occupation = document.createElement("td");
        f_occupation.innerText = freelancer.occupation;

        const f_price = document.createElement("td");
        f_price.innerText = freelancer.price;
        
        row.appendChild(f_name);
        row.appendChild(f_occupation);
        row.appendChild(f_price);

        return row;
    });
    forumTable.replaceChildren(...forumElements);
      //get average price
    const total = freelancers.reduce((acc, freelancer) => acc + parseInt(freelancer.price.slice(1)), 0);
    
    const average = total / freelancers.length;

    //replace average price text
    const p = document.querySelector(".p");
    p.innerText = "";
    p.innerText = "The average starting price is $" + Math.round(average) + ".";
}

//adding newFreelancers into the table
function addFreelancer () {

        //stop when freelancers array has 10 freelancers
        if (freelancers.length >= 10) {
            return;
        }

        //get random freelancer from newFreelancers array
        const newFreelancer =
            newFreelancers[Math.floor(Math.random() * newFreelancers.length)];

        //add newFreelancer to freelancers array
        freelancers.push(newFreelancer);

        //re-render the freelancers table in the body
        renderFreelancers();
}

setInterval(addFreelancer, 1000);
init();