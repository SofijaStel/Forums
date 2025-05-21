//Palīgmateriāls MDN Web Docs
function loadComments() {
  const container = document.getElementById('commentsContainer'); // Atrod <div> kur būs komentāri
  const comments = JSON.parse(localStorage.getItem('atsauksmes')) || []; // Pārnes komentārus no localStorage

  if (comments.length === 0) {
    container.innerHTML = "<p>Vēl nav atsauksmes.</p>"; // Ja nav neviena, parāda paziņojumu
    return;
  }

  comments.forEach(c => {
    const div = document.createElement('div'); // Izveido jaunu <div>
    div.className = 'comment'; // Pievieno CSS klasi
    div.innerHTML = `
      <p>${c.comment}</p>
      <div class="meta">${c.name} – ${c.time}</div>`; // Ievieto tekstu
    container.appendChild(div); // Pievieno HTML dokumentā
  });
}

window.addEventListener('load', loadComments); // Kad lapa ielādējas, izsauc funkciju
