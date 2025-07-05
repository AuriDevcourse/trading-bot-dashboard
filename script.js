document.addEventListener('DOMContentLoaded', function() {
    const statsDiv = document.getElementById('stats');
    const refreshBtn = document.getElementById('refresh');

    function loadStats() {
        // Placeholder for fetching stats from backend/API
        statsDiv.innerHTML = `<strong>Bot Status:</strong> Online<br><strong>Balance:</strong> $10,000<br><strong>Last Trade:</strong> BTC/USD - Buy @ $30,500`;
    }

    refreshBtn.addEventListener('click', loadStats);

    loadStats();
});
