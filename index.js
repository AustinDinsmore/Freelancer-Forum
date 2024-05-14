//creating initial array
const freelancers = [
    { name: "Leo", occupation: "Teacher", price: "$30"},
    { name: "Nichole", occupation: "Programmer", price: "$75"},
    { name: "Luna", occupation: "Writter", price: "$50"},
];

//creating secondary array
const newfreelancer = [
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
    const average = document.createElement("h2")
    average.innerText = "Average Freelancer Price: "
    root.append(average)
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
    forumTable.replaceChildren(...forumElements)
}

//adding newfree into the table
function addfreelancers(){
    const newfree = newfreelancer[Math.floor(Math.random() * newfreelancer.length)];
    // const newfreelancer = newfree.pop();
  

    freelancers.push(newfree);
  
    renderFreelancers();
}
setInterval(addfreelancers, 3000);



init();