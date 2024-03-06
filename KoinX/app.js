var ctx = document.getElementById('distributionChart').getContext('2d');
var distributionChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [80, 20],
            backgroundColor: [
                'rgba(252, 211, 77, 0.8)',
                'rgba(59, 130, 246, 0.8)'
            ],
            borderColor: [
                'rgba(252, 211, 77, 1)',
                'rgba(59, 130, 246, 1)'
            ],
            borderWidth: 1,
        }],
    },
    options: {
        cutoutPercentage: 60,
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
    }
});