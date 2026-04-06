// Hamburger toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
// Shrink nav on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(nav) nav.style.height = window.scrollY > 50 ? '54px' : '66px';
});
// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// CURB-65 Calculator
function calculateCURB() {
  const age = parseInt(document.getElementById('age').value);
  const bun = parseInt(document.getElementById('bun').value);
  const rr = parseInt(document.getElementById('rr').value);
  const bp = parseInt(document.getElementById('bp').value);
  const confusion = parseInt(document.getElementById('confusion').value);
  
  const score = age + bun + rr + bp + confusion;
  
  let recommendation = '';
  if (score === 0) {
    recommendation = 'Low risk: Consider outpatient treatment.';
  } else if (score === 1) {
    recommendation = 'Low risk: Consider outpatient treatment.';
  } else if (score === 2) {
    recommendation = 'Moderate risk: Consider inpatient treatment.';
  } else if (score >= 3) {
    recommendation = 'High risk: Consider ICU admission.';
  }
  
  document.getElementById('curb-result').innerHTML = `<h4>Score: ${score}</h4><p>${recommendation}</p>`;
}

// BMI Calculator
function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
  const weight = parseFloat(document.getElementById('weight').value);
  
  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(1);
    
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    
    document.getElementById('bmi-result').innerHTML = `<h4>BMI: ${bmi}</h4><p>Category: ${category}</p>`;
  } else {
    document.getElementById('bmi-result').innerHTML = '<p>Please enter valid height and weight.</p>';
  }
}

// BODE Index Calculator
function calculateBODE() {
  const fev1 = parseFloat(document.getElementById('fev1').value);
  const walkDistance = parseFloat(document.getElementById('walk_distance').value);
  const dyspnea = parseInt(document.getElementById('dyspnea').value);
  const bmi = parseFloat(document.getElementById('bmi_bode').value);
  
  let score = 0;
  
  // FEV1 score
  if (fev1 >= 65) score += 0;
  else if (fev1 >= 50) score += 1;
  else if (fev1 >= 36) score += 2;
  else score += 3;
  
  // Walk distance score
  if (walkDistance >= 350) score += 0;
  else if (walkDistance >= 250) score += 1;
  else if (walkDistance >= 150) score += 2;
  else score += 3;
  
  // Dyspnea score
  score += dyspnea;
  
  // BMI score
  if (bmi >= 21) score += 0;
  else score += 1;
  
  let severity = '';
  if (score <= 2) severity = 'Low risk (Stage I)';
  else if (score <= 4) severity = 'Moderate risk (Stage II)';
  else if (score <= 6) severity = 'High risk (Stage III)';
  else severity = 'Very high risk (Stage IV)';
  
  document.getElementById('bode-result').innerHTML = `<h4>BODE Score: ${score}</h4><p>Severity: ${severity}</p>`;
}

// Pack-Years Calculator
function calculatePackYears() {
  const cigsPerDay = parseFloat(document.getElementById('cigs_per_day').value);
  const yearsSmoked = parseFloat(document.getElementById('years_smoked').value);
  
  if (cigsPerDay > 0 && yearsSmoked > 0) {
    const packYears = (cigsPerDay / 20) * yearsSmoked;
    
    let risk = '';
    if (packYears < 10) risk = 'Low risk';
    else if (packYears < 20) risk = 'Moderate risk';
    else if (packYears < 30) risk = 'High risk';
    else risk = 'Very high risk';
    
    document.getElementById('smoking-result').innerHTML = `<h4>Pack-Years: ${packYears.toFixed(1)}</h4><p>Risk Level: ${risk}</p>`;
  } else {
    document.getElementById('smoking-result').innerHTML = '<p>Please enter valid values.</p>';
  }
}
