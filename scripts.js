const ctxImpressions = document.getElementById('impressionsChart').getContext('2d');
const ctxClicks = document.getElementById('clicksChart').getContext('2d');

new Chart(ctxImpressions, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'Impresiones',
            data: [60, 70, 80, 65, 75, 85, 90, 95, 85, 80],
            borderColor: '#4CAF50',
            fill: false,
            pointRadius: 1,
            borderWidth: 2 
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

new Chart(ctxClicks, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'Clics',
            data: [30, 35, 40, 33, 37, 42, 44, 43, 41, 39],
            borderColor: '#FF5733',
            fill: false,
            pointRadius: 1, 
            borderWidth: 2 
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#date-range-picker", {
        mode: "range",
        dateFormat: "d M Y",  
        locale: "es"          
    });
});