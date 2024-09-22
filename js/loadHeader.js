// loadHeader.js
async function loadHeaderK() {
    try {
      const headerResponse = await fetch('/my_website/includes/header.html');
      if (!headerResponse.ok) {
        throw new Error('Failed to load header: ' + headerResponse.statusText);
      }
      const headerData = await headerResponse.text();
      document.getElementById('header').innerHTML = headerData;
    } catch (error) {
      console.error('Error loading header:', error);
    }
  }

  async function loadContactInfo() {
    try {
      const contactResponse = await fetch(/my_website/includes/contact-info.html');
      if (!contactResponse.ok) {
        throw new Error('Failed to load contact info: ' + contactResponse.statusText);
      }
      const contactData = await contactResponse.text();
      document.getElementById('contact-info').innerHTML = contactData;
    } catch (error) {
      console.error('Error loading contact info:', error);
    }
  }

  function loadFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'my_website/pages/favicon.ico';  // Make sure this path is correct
    link.type = 'image/x-icon';
    document.head.appendChild(link);
}
  
  
  // Call the loadHeader function
  loadHeaderK();
  loadContactInfo();
  loadFavicon();
  
