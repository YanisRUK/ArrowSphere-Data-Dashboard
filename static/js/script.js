document.addEventListener("DOMContentLoaded", function() {
  console.log("script.js loaded");
  let pricingData = null;
  let chartInstance = null;
  let licenseNames = [];
  let monthlyPrices = [];
  let annualPrices = [];
  let threeYearPrices = [];

  // Build the datasets array based on the checkboxes
  function buildDatasets() {
    let datasets = [];
    if(document.getElementById("chkMonthly").checked) {
      datasets.push({
        label: 'Monthly Price',
        data: monthlyPrices,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      });
    }
    if(document.getElementById("chkAnnual").checked) {
      datasets.push({
        label: 'Annual Price',
        data: annualPrices,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      });
    }
    if(document.getElementById("chkThreeYear").checked) {
      datasets.push({
        label: '3-Year Price',
        data: threeYearPrices,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      });
    }
    return datasets;
  }

  // Update the chart when checkbox selections change
  function updateChart() {
    if(!chartInstance) return;
    chartInstance.data.datasets = buildDatasets();

    // Update the chart title based on selected options
    let selected = [];
    if(document.getElementById("chkMonthly").checked) selected.push("Monthly");
    if(document.getElementById("chkAnnual").checked) selected.push("Annual");
    if(document.getElementById("chkThreeYear").checked) selected.push("3-Year");
    chartInstance.options.plugins.title.text = "402 - Microsoft Licensing Data Dashboard (" + selected.join(" & ") + ")";
    chartInstance.update();
  }

  // Add event listeners to the checkboxes
  document.getElementById("chkMonthly").addEventListener("change", updateChart);
  document.getElementById("chkAnnual").addEventListener("change", updateChart);
  document.getElementById("chkThreeYear").addEventListener("change", updateChart);

  // Fetch the pricing data from the API
  fetch('/api/pricing')
    .then(response => response.json())
    .then(data => {
      console.log("Fetched pricing data:", data);
      pricingData = data;
      
      // Process the data: group by license type
      licenseNames = pricingData.licenses.map(item => item.name);
      monthlyPrices = pricingData.licenses.map(item => item.pricing.monthly || 0);
      annualPrices = pricingData.licenses.map(item => item.pricing.annual || 0);
      threeYearPrices = pricingData.licenses.map(item => item.pricing.three_year || 0);
      
      // Create the chart with initial datasets (all options selected by default)
      const ctx = document.getElementById('pricingChart').getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: licenseNames,
          datasets: buildDatasets()
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Price (£)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'License Type'
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Microsoft 365 E3 v Microsoft 365 E5 - Pricing per User"
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += '£' + context.parsed.y;
                  }
                  return label;
                }
              }
            }
          }
        }
      });
    })
    .catch(error => console.error('Error fetching pricing data:', error));
});