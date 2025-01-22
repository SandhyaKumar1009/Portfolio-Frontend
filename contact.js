document.querySelector('.contact__form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email. Please check the console for more details.');
    }
  });
  