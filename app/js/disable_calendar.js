var today = new Date().toISOString().split('T')[0];
document.getElementById("journey_date").setAttribute('min', today);