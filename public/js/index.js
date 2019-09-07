function getOptions() {
  return {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
        fontSize: 12
      },
      pointLabels: {
        fontSize: 12
      }
    }
  }
};

function getSkillsets() {
  var ctx = document.getElementById('feSlillset').getContext('2d');
  var feData = {
      labels: ['HTML/CSS', 'JavaScript', 'Next.js', 'Redux', 'React Native', 'React'],
      datasets: [{
        data: [3, 3, 1, 3, 2, 4],
        label: 'Front-end',
        backgroundColor: 'rgba(237, 146, 159, 0.2)',
        borderColor: 'rgba(237, 146, 159, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(237, 146, 159, 1)',
        pointBorderColor: '#fff'
      }]
  };
  var feRadarChart = new Chart(ctx, {
      type: 'radar',
      data: feData,
      options: getOptions(),
  });

  var ctx = document.getElementById('ssSlillset').getContext('2d');
  var ssData = {
    labels: ['Java', 'Python3', 'BigQuery', 'Oracle', 'WebSocket', 'Nginx'],
    datasets: [{
      data: [1, 1, 2, 1, 1, 1],
      label: 'Server Side',
      backgroundColor: 'rgba(121, 198, 182, 0.2)',
      borderColor: 'rgba(121, 198, 182, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(121, 198, 182, 1)',
      pointBorderColor: '#fff'
    }]
  };
  var ssRadarChart = new Chart(ctx, {
    type: 'radar',
    data: ssData,
    options: getOptions(),
  });

  var ctx = document.getElementById('devOpsSlillset').getContext('2d');
  var devOpsData = {
    labels: ['Slack', 'JIRA', 'GitHub/GitLab', 'Docker', 'Jenkins', 'Confluence'],
    datasets: [{
      data: [3, 2, 3, 1, 2, 2],
      label: 'Dev Ops',
      backgroundColor: 'rgba(255, 195, 93, 0.2)',
      borderColor: 'rgba(255, 195, 93, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255, 195, 93, 1)',
      pointBorderColor: '#fff'
    }]
  };
  var ssRadarChart = new Chart(ctx, {
    type: 'radar',
    data: devOpsData,
    options: getOptions(),
  });
}


