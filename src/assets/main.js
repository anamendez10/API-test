const API = `https://rickandmortyapi.com/api/character`;
const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': 'https://anamendez10.github.io',
        'Access-Control-Allow-Methods': 'GET OPTIONS',
    }
}

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const characters = await fetchData(API);
        let view = `
        ${characters.results.map(character => `
            <!-- content -->
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${character.image}" alt="img" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${character.name}
                </h3>
                </div>
            </div>
        `).slice(0, 5).join('')}
        
        `;
        content.innerHTML = view;
    }
    catch(error){
        console.log(error);
    }
})();