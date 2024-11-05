const ctxImpressions = document.getElementById('impressionsChart').getContext('2d');
const ctxClicks = document.getElementById('clicksChart').getContext('2d');

new Chart(ctxImpressions, {
    type: 'line',
    data: {
        labels: ['1 sept', '4 sept', '7 sept', '10 sept', '13 sept', '16 sept', '19 sept', '22 sept', '25 sept', '28 sept'],
        datasets: [{
            label: 'Total de impresiones',
            data: [60, 70, 80, 65, 75, 85, 90, 95, 85, 80],
            borderColor: '#4CAF50',
            fill: false
        }]
    }
});

new Chart(ctxClicks, {
    type: 'line',
    data: {
        labels: ['1 sept', '4 sept', '7 sept', '10 sept', '13 sept', '16 sept', '19 sept', '22 sept', '25 sept', '28 sept'],
        datasets: [{
            label: 'Total de clics',
            data: [30, 35, 40, 33, 37, 42, 44, 43, 41, 39],
            borderColor: '#FF5733',
            fill: false
        }]
    }
});

document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#date-range-picker", {
        mode: "range",
        dateFormat: "d M Y",  
        locale: "es"          
    });
});