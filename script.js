const fromamount = document.querySelector('.amount');
const convertedamount = document.querySelector('.convertedamount');
const fromcurrencys = document.querySelector('.fromcurrency');
const tocurrencys = document.querySelector('.tocurrency');

const result = document.querySelector('.result');
const convertContainer = document.querySelector('.converter-container');

// ARRAY TO POPULATE THE SELECT TAGS WITH THESE COUNTRIES
const countries =[
    { code: "AUD", name: "Australian Dollar" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "INR", name: "Indian Rupee" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PLN", name: "Polish Złoty" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "USD", name: "United States Dollar" },
    { code: "VND", name: "Vietnamese đồng" },
    { code: "ZAR", name: "South African Rand" }
  ];
  
  
//SHOWING COUNTRIES FROM ARRAY SELECT TAG

countries.forEach(country =>{

    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = option2.value =  country.code;
    option1.textContent = option2.textContent= `${country.code}(${country.name})`;
    fromcurrencys.appendChild(option1);
    tocurrencys.appendChild(option2);


    fromcurrencys.value = "USD";
    tocurrencys.value = "INR";
})

const getexchangerate = async() =>{
    const amount = parseFloat(fromamount.value);
    const fromcurren = fromcurrencys.value;
    const tocurren = tocurrencys.value;
    result.textContent = "fetching exchange rates...."

    try{
        const response =await fetch(`https://api.exchangerate-api.com/v4/latest/${fromcurren}`);
        const data =await response.json();
    
        const conversiorate = data.rates[tocurren];
        const convertedamounts = (amount * conversiorate).toFixed(2);

        if(typeof conversiorate === 'undefined'){
            result.textContent = "Invalid currency code";
            convertedamount = "";
        }else{
            convertedamount.value = convertedamounts;
    
            result.textContent = `${amount} ${fromcurren} = ${convertedamounts} ${tocurren}`;
        }
    
      

    }catch(error){
        convertContainer.innerHTM = `<h2>Error while fetching while exchange rates!!!</h2>`;
    }


}


fromamount.addEventListener('input' , getexchangerate);
fromcurrencys.addEventListener('change' , getexchangerate);
tocurrencys.addEventListener('change' , getexchangerate);
window.addEventListener('load' , getexchangerate);



