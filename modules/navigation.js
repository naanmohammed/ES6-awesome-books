 const hideSectionsOnClick = () => {
  const listSection = document.getElementById('all-books');
  const addNewSection = document.getElementById('add-book');
  const contactSection = document.getElementById('contact-us');

  document.getElementById('list-link').addEventListener('click', () => {
    listSection.style.display = 'block';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  document.getElementById('add-link').addEventListener('click', () => {
    listSection.style.display = 'none';
    addNewSection.style.display = 'block';
    contactSection.style.display = 'none';
  });

  document.getElementById('contact-link').addEventListener('click', () => {
    listSection.style.display = 'none';
    addNewSection.style.display = 'none';
    contactSection.classList.add('show');
    contactSection.style.display = 'flex';
  });
};

export default hideSectionsOnClick();