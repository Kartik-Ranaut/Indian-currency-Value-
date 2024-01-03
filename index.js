let apikey = "cur_live_W25fZ2Tdsob6PsBLb6PCRErsPs2JRmdrnjZijrQu";

getdetails();
let convertbox = document.querySelectorAll(".cur");
let revconvertbox =document.querySelectorAll(".revcur");
async function getdetails(){
    data= await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_W25fZ2Tdsob6PsBLb6PCRErsPs2JRmdrnjZijrQu&currencies=EUR%2CUSD%2CCAD%2CCNY%2CGBP%2CJPY&base_currency=INR`);
    converted= await data.json();
    convertbox.forEach((element)=>{
        if(element.classList[0]=='usd')
            element.innerHTML+=converted.data.USD.value;
        else if(element.classList[0]=='eur')
        element.innerHTML+=converted.data.EUR.value;
        else if(element.classList[0]=='gbp')
        element.innerHTML+=converted.data.GBP.value;
        else if(element.classList[0]=='cny')
        element.innerHTML+=converted.data.CNY.value;
        else if(element.classList[0]=='cad')
        element.innerHTML+=converted.data.CAD.value;
        else if(element.classList[0]=='jpy')
        element.innerHTML+=converted.data.JPY.value;
    })
    revconvertbox.forEach((element)=>{
        if(element.classList[0]=='usd')
            element.innerHTML+=1/converted.data.USD.value;
        else if(element.classList[0]=='eur')
        element.innerHTML+=1/converted.data.EUR.value;
        else if(element.classList[0]=='gbp')
        element.innerHTML+=1/converted.data.GBP.value;
        else if(element.classList[0]=='cny')
        element.innerHTML+=1/converted.data.CNY.value;
        else if(element.classList[0]=='cad')
        element.innerHTML+=1/converted.data.CAD.value;
        else if(element.classList[0]=='jpy')
        element.innerHTML+=1/converted.data.JPY.value;

        element.innerHTML+=' Rs.';
    })
    console.log(converted.data.USD.value);
}

let convertbutton=document.getElementById("outputClick");
let outputconvert=document.getElementById("outputConvert");
let selection=document.getElementById("selection");
let inputvalue=document.getElementById("inputvalue");
async function details(){
    data= await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_wxBYZ2gFBnmMrOVj3UbM866J1P3tJyGApjdQfC8u&currencies=EUR%2CUSD%2CCAD%2CCNY%2CGBP%2CJPY&base_currency=INR`);
    converted= await data.json();
    return converted;
    
}
convertbutton.addEventListener('click',async function datafun(){

    let optionvalue=selection.value;
    let inputval=inputvalue.value;
    outputconvert.value=`${optionvalue}`;
    data =await details();
    console.log(data.data.USD);

    if(optionvalue=='usd')
            outputconvert.value=inputval*(1/data.data.USD.value);
        else if(optionvalue=='eur')
        outputconvert.value=inputval*(1/data.data.EUR.value);
        else if(optionvalue=='gbp')
        outputconvert.value=inputval*(1/data.data.GBP.value);
        else if(optionvalue=='cny')
        outputconvert.value=inputval*(1/data.data.CNY.value);
        else if(optionvalue=='cad')
        outputconvert.value=inputval*(1/data.data.CAD.value);
        else if(optionvalue=='jpy')
        outputconvert.value=inputval*(1/data.data.JPY.value);
})
