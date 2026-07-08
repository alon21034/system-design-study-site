function createLanguageToggle() {
  if (document.querySelector('.language-toggle')) return;
  const link = document.createElement('a');
  link.className = 'language-toggle';
  link.href = '/en.html';
  link.textContent = 'EN';
  document.body.appendChild(link);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createLanguageToggle);
} else {
  createLanguageToggle();
}
