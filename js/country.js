document.getElementById('select-container').addEventListener('change', function (event) {
    const searchText = event.target.value;
    loadData(searchText)
});

const loadData = async (searchText) => {
    try {
        const url = `https://restcountries.com/v3.1/lang/${searchText}`
        const res = await fetch(url);
        const data = await res.json();
        displayData(data)
    }
    catch (err) {
        console.log(err)
    }
}
const displayData = (countries) => {
    const container = document.getElementById('container');
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl');
        div.innerHTML = `
         <figure class="px-10 pt-10">
             <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                class="rounded-xl" />
         </figure>
         <div
           class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>          
                <p>If a dog chews shoes
                    whose shoes does he
                    choose?</p>
                <div class="card-actions">
                    <button
                        class="btn btn-primary">Buy
                        Now</button>
                </div>
         </div>
        `
    });
}
loadData('german')