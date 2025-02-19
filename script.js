document.getElementById('send-booking').addEventListener('click', function () {
    const sessionType = document.getElementById('session-type').value;
    const date = document.getElementById('date').value;
    const details = document.getElementById('details').value;

    if (!sessionType || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    const email = "your-email@example.com";
    const subject = `Booking Request: ${sessionType} Session on ${date}`;
    const body = `Session Type: ${sessionType}%0A` +
                 `Preferred Date: ${date}%0A` +
                 `Details: ${details}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
