const currencyFirstE1=document.getElementById("currency-first");

const worthfirstE1=document.getElementById("worth-first");

const currencysecondE1=document.getElementById("currency-second");

const worthsecondE1=document.getElementById("worth-second");

const exchangerateE1=document.getElementById("exchange-rate");
updateRate()
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/046fd8586b78d29894b5f3d0/latest/${currencyFirstE1.value}`).then((res)=>res.json()).then((data)=>{const rate=data.conversion_rates[currencysecondE1.value];
        console.log(rate);
        exchangerateE1.innerText=`1 ${currencyFirstE1.value}=${
            rate + " "+ currencysecondE1.value
        }`;
            const amount = Number(worthfirstE1.value); 

            if (!isNaN(amount)) {
                worthsecondE1.value = amount * rate; 
            } else {
                worthsecondE1.value = "";
            }
    });
    
}

currencyFirstE1.addEventListener("change",updateRate);
currencysecondE1.addEventListener("change",updateRate);
worthfirstE1.addEventListener("input", updateRate);





