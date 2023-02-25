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
    container.innerHTML = '';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl');
        div.innerHTML = `
         <figure class="px-10 pt-10">
             <img style="height: 100px; width: 200px;" src="${country.flags.png}"
                alt="Shoes"
                class="rounded-xl" />
         </figure>
         <div
           class="card-body">
            <h2 class="text-2xl font-medium text-center">${country.name.common}</h2>          
                <p class="text-center"><span class="font-semibold">Area</span> : ${country.area}</p>
                <div class="card-actions">
                    <button
                        class="btn btn-primary w-full">Details</button>
                </div>
         </div>
        `;
        container.appendChild(div)
    });
}
loadData('german')