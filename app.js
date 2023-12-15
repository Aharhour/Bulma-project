document.addEventListener('DOMContentLoaded', function() {
    const clock = document.getElementById('clock');
  
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const time = `${hours}:${minutes}:${seconds}`;
      clock.textContent = time;
    }

    setInterval(updateTime, 1000);
  });