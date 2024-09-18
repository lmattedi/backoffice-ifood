document.addEventListener('DOMContentLoaded', function () {

    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Relatorio de Vendas',
                data: [55256, 62852.36, 57975.21, 71278.45, 32652.89, 81485.32],
                backgroundColor: '#8B0000',
                borderColor: '#8B0000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) { return 'R$ ' + value.toLocaleString('pt-BR'); }
                    }
                }
            }
        }
    });

    const funnelCtx = document.getElementById('funnelChart').getContext('2d');
    const funnelChart = new Chart(funnelCtx, {
        type: 'bar',
        data: {
            labels: ['Impressões', 'Visitantes', 'Added to Cart', 'Iniciou Checkout', 'Pagamento'],
            datasets: [{
                label: 'Jornada de Compra',
                data: [1000000, 800000, 110000, 150000, 120000],
                backgroundColor: '#8B0000',
                borderColor: '#8B0000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            label += new Intl.NumberFormat('pt-BR').format(context.parsed.y);
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false } },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) { return value.toLocaleString('pt-BR'); }
                    }
                }
            }
        }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');

    menuToggle.addEventListener('click', function () {
        wrapper.classList.toggle('toggled');
    });
});

