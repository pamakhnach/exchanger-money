fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        const inputBY = document.querySelector('.input__BY');
        const inputUSD = document.querySelector('.input__USD');
        const inputEUR = document.querySelector('.input__EUR');
        const inputRUB = document.querySelector('.input__RUB');
        const inputPLN = document.querySelector('.input__PLN');
        
        const rateUSD = document.querySelector('.rate__USD');
        const rateEUR = document.querySelector('.rate__EUR');
        const rateRUB = document.querySelector('.rate__RUB');
        const ratePLN = document.querySelector('.rate__PLN');

        const numUSD = data[5].Cur_OfficialRate;
        const numEUR = data[6].Cur_OfficialRate;
        const numRUB = data[17].Cur_OfficialRate;
        const numPLN = data[7].Cur_OfficialRate;

        function rate() {
            rateUSD.innerHTML = numUSD;
            rateEUR.innerHTML = numEUR;
            rateRUB.innerHTML = numRUB + ' / 100';
            ratePLN.innerHTML = numPLN + ' / 10';
        }

        rate()

        inputBY.addEventListener("change", () => {
            BYInUSD();
        });

        function BYInUSD() {
            let cashBY = Number(inputBY.value);

            inputUSD.value = (cashBY / numUSD).toFixed(2);
            inputEUR.value = (cashBY / numEUR).toFixed(2);
            inputRUB.value = (cashBY / (numRUB / 100)).toFixed(2);
            inputPLN.value = (cashBY / (numPLN / 10)).toFixed(2);
            
        }
    })
    .catch(function(){
        
    });

    const date = document.querySelector('.date');
    let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    date.innerHTML = utc;