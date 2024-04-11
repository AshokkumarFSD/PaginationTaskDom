fetch('./pagination.json')
    .then((response) => response.json())
    .then((json) =>
    {
       createPageElement(json);
    }
);

let noOfElementPerPage = 5;

function createPageElement(dataArray)
{
    let totalLengthOfArray = dataArray.length;
    let noOfPages = totalLengthOfArray/noOfElementPerPage;

    let header = document.createElement("div");
    let pagetitle = document.createElement("h1");
    pagetitle.setAttribute("id","pageTitle");
    pagetitle.innerText = "Page No : 1"
    header.append(pagetitle);
    const headerElement = document.getElementById('header');
    headerElement.append(pagetitle);
    headerElement.setAttribute("class","header");

    dispalyPage(1,dataArray);


    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","button_container");
    for(i=1;i<=noOfPages;i++)
    {
        let pageButton = document.createElement("button");
        pageButton.innerText = ""+i;
        pageButton.setAttribute("id",i);
        pageButton.setAttribute("class","page_button_style");
        pageButton.addEventListener("click",(event)=>{
            dispalyPage(event.target.id,dataArray);
        });
        newDiv.append(pageButton);
    }
    document.body.append(newDiv);
}

function dispalyPage(page=1,dataArray)
{
   let endIndex = page*noOfElementPerPage;
   let startIndex = endIndex - noOfElementPerPage;
   
   const pagetitle = document.getElementById('pageTitle');
   pagetitle.innerText = "Page No : "+page;

   const parentElement = document.getElementById('data_dispaly_container');
   while (parentElement.firstChild) {
       parentElement.removeChild(parentElement.firstChild);
   }
   parentElement.setAttribute("class","card_contianer");
   dataArray.slice(startIndex,endIndex).map((val,index)=>{
    createSingleData(val);
   });
}

function createSingleData({id,name,email})
{
    const parentElement = document.getElementById('data_dispaly_container');
    let singleDataContainer = document.createElement("div");
    let displayName = document.createElement("h3");
    let dispalyEmail = document.createElement("h5");

    displayName.innerText = name;
    dispalyEmail.innerText = email;

    singleDataContainer.append(displayName);
    singleDataContainer.append(dispalyEmail);
    singleDataContainer.setAttribute("class","single_card")
    parentElement.append(singleDataContainer);
}