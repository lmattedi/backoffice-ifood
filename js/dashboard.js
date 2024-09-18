document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');

    const lucrosCtx = document.getElementById('lucrosChart').getContext('2d');
    const lucrosChart = new Chart(lucrosCtx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Lucros',
                data: [12000, 15000, 18000, 22000, 20000, 24000],
                backgroundColor: '#991B1F'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const despesasCtx = document.getElementById('despesasChart').getContext('2d');
    const despesasChart = new Chart(despesasCtx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Despesas',
                data: [8000, 9000, 11000, 15000, 13000, 17000],
                backgroundColor: '#991B1F',
                borderColor: '#991B1F',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
menuToggle.addEventListener('click', function () {
    wrapper.classList.toggle('toggled');
});
