function showPage(pageId) {
  const pages = document.querySelectorAll('.page');

  // Hide all pages
  pages.forEach(page => page.classList.remove('active'));

  // Show only the selected one
  document.getElementById(pageId).classList.add('active');
}
