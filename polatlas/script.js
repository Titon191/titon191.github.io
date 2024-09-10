document.getElementById('categorySelect').addEventListener('change', function() {
    const category = this.value;
    const dataDisplay = document.getElementById('dataDisplay');
    const dataChart = document.getElementById('dataChart');

    dataDisplay.innerHTML = '';
    dataChart.getContext('2d').clearRect(0, 0, dataChart.width, dataChart.height);

    if (category) {
        fetchDataFromGUS(category)
            .then(data => {
                displayData(data);
                displayChart(data);
            })
            .catch(error => {
                console.error('Błąd pobierania danych:', error);
                dataDisplay.innerHTML = '<p>Nie udało się pobrać danych.</p>';
            });
    }
});

async function fetchDataFromGUS(category) {
    let url;
    switch (category) {
        case 'demografia':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/460655/variable-data?format=json';
            break;
        case 'ekonomia':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/479250/variable-data?format=json';
            break;
        case 'urbanistyka':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/463654/variable-data?format=json';
            break;
        case 'edukacja':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/460575/variable-data?format=json';
            break;
        case 'socjologia':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/460599/variable-data?format=json';
            break;
        case 'srodowisko':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/460624/variable-data?format=json';
            break;
        case 'biznes':
            url = 'https://api.stat.gov.pl/v1/data/by-variable/460612/variable-data?format=json';
            break;
        default:
            throw new Error('Nieznana kategoria');
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Błąd sieci podczas pobierania danych');
    }

    const data = await response.json();
    return formatGUSData(data);
}

function formatGUSData(apiData) {
    // Przykładowe formatowanie danych na potrzeby wizualizacji
    return apiData.results.map(item => ({
        region: item.name,
        value: item.values[0] // Przyjęcie, że pierwszy element zawiera wartości
    }));
}

function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `Region: ${item.region}, Wartość: ${item.value}`;
        dataDisplay.appendChild(p);
    });
}

function displayChart(data) {
    const ctx = document.getElementById('dataChart').getContext('2d');
    const labels = data.map(item => item.region);
    const values = data.map(item => item.value);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Wartości',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
