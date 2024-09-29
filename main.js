function getCountry(country){

    const main = document.querySelector("main")
    const countriesContainer = document.querySelector(".countries")
    countriesContainer.setAttribute("style", "background-color: rgb(210, 223, 235); width: 200px;")
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send()
    request.addEventListener("load", ()=>{
        const [data] = JSON.parse(request.responseText);
        console.log(data)
        const currencies = data.currencies;
        const name = data.name;
        const countryName = Object.values(name)[0]
        const currenciesName = Object.values(currencies)[0].name
        const currenciesSymbol = Object.values(currencies)[0].symbol 
        
        const html = `
        <article style="font-family: 'Roboto', sans-serif; margin-right: 20px; margin-top:10px; @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');">
            <img class="country-flag" src="${data.flags.svg}" alt="" style="width:200px;  object-fit: cover;">
            <div class="county-data" style="border-radius: 10px;
                                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                                    max-width: 400px;
                                    overflow: hidden;
                                    transition: transform 0.3s;">
                <h3 class="county___name" style = "margin: 0;
        color: #333;">${data.name.common}</h3>
                <h4 class="country___region" style=" margin: 5px 0;
        color: #777;">${data.region}</h4>
                <p class="country___row" style="letter-spacing: 1px;"><span>👨‍👩‍👧‍👦</span>${data.population}</p>
                <p class="country___row" style="letter-spacing: 3px;"><span>🗣️</span>${countryName}</p>
                <p class="country___row" style="letter-spacing: 1px; font-weight: 500;"><span>💰</span>${currenciesSymbol} ${currenciesName}</p>
            </div>
        </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
    main.appendChild(countriesContainer).setAttribute("style", "display: flex; align-items: center;")
    body.style.backgroundColor = "rgba(241, 167, 142, 0.748)";
    

})
};





    const boxCountry = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
        "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
        "Chile", "China", "Colombia", "Comoros", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia"];
    
    const body = document.querySelector("body");
    const button = document.querySelector(".btn");
    
    
    let shownCountries = [];
    
    button.addEventListener("click", () => {
        let randomS;
    
        do {
            randomS = Math.floor(Math.random() * boxCountry.length);
        } while (shownCountries.includes(boxCountry[randomS]));
    
        shownCountries.push(boxCountry[randomS]);
        getCountry(boxCountry[randomS]);
    
        if (shownCountries.length === boxCountry.length) {
            alert("Все страны показаны!");
            shownCountries = [];
        }
    });

