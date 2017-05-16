$(function () {
    // new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    new Chart(document.getElementById("bar_chart_1").getContext("2d"), getChartJs('bar'));
    new Chart(document.getElementById("bar_chart_2").getContext("2d"), getChartJs('bar2'));
    // new Chart(document.getElementById("bar_chart_2").getContext("2d"), getChartJs('coverbar'));
    // new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    // new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
});

function getChartJs(type) {
    var config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(233, 30, 99, 0.75)',
                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: true
            }
        }
    }
    else if (type === 'bar') {
        config = {
            type: 'horizontalBar',
            data: {
                labels: ["github.ccom/Luxurioust/aurora/github.ccom/Luxurioust/auroragithub.ccom/Luxurioust/aurora", "Path2", "Path3", "Path4", "Path5", "Path6", "Path7"],
                datasets: [{
                    label: "Time cost",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
                }],

            },
            options: {
                responsive: true,
                legend: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        barPercentage: 0.5
                    }]
                }
            }
        }
    }
    else if (type === 'bar2') {
        config = {
            type: 'horizontalBar',
            data: {
                labels: ["github.ccom/Luxurioust/aurora/github.ccom/Luxurioust/auroragithub.ccom/Luxurioust/aurora", "Path2", "Path3", "Path4", "Path5", "Path6", "Path7","github.ccom/Luxurioust/aurora/github.ccom/Luxurioust/auroragithub.ccom/Luxurioust/aurorasdaa", "Path21", "Path31", "Path41", "Path15", "Path61", "Path71"],
                datasets: [{
                        label: "My Second dataset",
                        data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90],
                        borderColor: 'rgba(233, 30, 99, 0.75)',
                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                        pointBorderWidth: 1
                    }],

            },
            options: {
                responsive: true,
                legend: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        barPercentage: 0.5
                    }]
                }
            }
        }
    }
    else if (type === 'coverbar') {
        config = {
            type: 'horizontalBar',
            data: {
                labels: ["Path1", "Path2", "Path3", "Path4", "Path5", "Path6", "Path7"],
                datasets: [{
                    label: "Coverage",
                    data: [23, 45, 37, 61, 56, 11, 4],
                    borderColor: 'rgba(233, 30, 99, 0.75)',
                    backgroundColor: 'rgba(233, 30, 99, 0.3)',
                }]
            },
            options: {
                responsive: true,
                legend: false,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        barPercentage: 0.4
                    }]
                }
            }
        }
    }
    else if (type === 'radar') {
        config = {
            type: 'radar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 25, 90, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.8)',
                    backgroundColor: 'rgba(0, 188, 212, 0.5)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.8)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [72, 48, 40, 19, 96, 27, 100],
                        borderColor: 'rgba(233, 30, 99, 0.8)',
                        backgroundColor: 'rgba(233, 30, 99, 0.5)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.8)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'pie') {
        config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [225, 50, 100, 40],
                    backgroundColor: [
                        "rgb(233, 30, 99)",
                        "rgb(255, 193, 7)",
                        "rgb(0, 188, 212)",
                        "rgb(139, 195, 74)"
                    ],
                }],
                labels: [
                    "Pink",
                    "Amber",
                    "Cyan",
                    "Light Green"
                ]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}