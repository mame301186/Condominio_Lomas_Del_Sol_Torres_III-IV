// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChartSecond);
google.charts.setOnLoadCallback(drawChartThird);
google.charts.setOnLoadCallback(drawChartFourth);
google.charts.setOnLoadCallback(drawChartFifth);
google.charts.setOnLoadCallback(drawChartSixth);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Cuotas');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Ordinaria', 3],
        ['Cisternas', 1],
        ['Extra. Pozo', 1],
        ['Extra. Techo', 1],
        ['Extra. Pintura', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución de Morosidad',
        'height': '400'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChartSecond() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Cuotas');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['T3-P1A', 3],
        ['T4-PBA', 1],
        ['T4-P2A', 1],
        ['T4-P2B', 1],
        ['T4-P2C', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución por Aptos: Ordinarias',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_2'));
    chart.draw(data, options);
}

function drawChartThird() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Cuotas');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['T3-P1A', 3],
        ['T3-PBA', 1],
        ['T3-P2A', 1],
        ['T4-P2B', 1],
        ['T4-P2C', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución por Aptos: Cisternas',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_3'));
    chart.draw(data, options);
}

function drawChartFourth() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['T3-P1A', 3],
        ['T4-PBA', 1],
        ['T3-P2A', 1],
        ['T4-P2B', 1],
        ['T3-P2C', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución por Aptos: Pozo',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_4'));
    chart.draw(data, options);
}

function drawChartFifth() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['T3-P1A', 3],
        ['T4-PBA', 1],
        ['T3-P2A', 1],
        ['T4-P2B', 1],
        ['T3-P2C', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución por Aptos: Techo',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_5'));
    chart.draw(data, options);
}

function drawChartSixth() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['T3-P1A', 3],
        ['T4-PBA', 1],
        ['T3-P2A', 1],
        ['T4-P2B', 1],
        ['T3-P2C', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Distribución por Aptos: Arboles',
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div_6'));
    chart.draw(data, options);
}