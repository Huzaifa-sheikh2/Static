function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active');
  });

  // Show only the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = 'block';
    selectedPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top for mobile
  }

  // Highlight active nav link
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(links).find(link =>
    link.getAttribute('onclick')?.includes(pageId)
  );
  if (activeLink) activeLink.classList.add('active');
}

// Load home page first
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});


function toggleMenu() {
  const navLinks = document.querySelector('.navbar ul');
  navLinks.classList.toggle('show');
}
