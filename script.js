function loadComments() {
    const container = document.getElementById('commentsContainer');
    const comments = JSON.parse(localStorage.getItem('atsauksmes')) || [];
  
    if (comments.length === 0) {
      container.innerHTML = "<p>Vēl nav atsauksmes.</p>";
      return;
    }
  
    comments.forEach(c => {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<p>${c.comment}</p>
                       <div class="meta">${c.name} – ${c.time}</div>`;
      container.appendChild(div);
    });
  }
  
  window.addEventListener('load', loadComments);
  