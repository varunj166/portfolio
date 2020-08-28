export function setFooterYear() {
  const footerYear = document.getElementById('footer-year');
  if (!footerYear) {
    return;
  }

  footerYear.innerText = '' + new Date().getFullYear();
}
