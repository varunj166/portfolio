export function setFooterYear() {
  const footer = document.getElementById('footer-text');
  const year = new Date().getFullYear();

  footer.innerHTML = '&copy; Varun Jain, ' + year;
}
