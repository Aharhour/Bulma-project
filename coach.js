document.addEventListener('DOMContentLoaded', function() {
    const assignmentsContainer = document.getElementById('assignments');
  
    const assignments = [
      { id: 1, title: 'sam: Rondje hartlopen', status: 'pending' },
      { id: 2, title: 'Bert: Huiswerk maken', status: 'pending' },
      { id: 3, title: 'Janne: Haar de Hema', status: 'pending' },
      { id: 4, title: 'Sanne: Voor de examens leren', status: 'pending' },
      { id: 5, title: 'Bonny: Uitzieken vandaag', status: 'pending' },
      { id: 6, title: 'Adil: Gamen...', status: 'pending' }
    ];
  
    function renderAssignments() {
      assignmentsContainer.innerHTML = '';
      assignments.forEach(assignment => {
        const card = document.createElement('div');
        card.classList.add('column', 'is-one-third');
  
        card.innerHTML = `
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                ${assignment.title}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Status: ${assignment.status}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item accept-button" data-id="${assignment.id}">Accept</a>
              <a href="#" class="card-footer-item reject-button" data-id="${assignment.id}">Reject</a>
            </footer>
          </div>
        `;
  
        card.querySelector('.accept-button').addEventListener('click', function(event) {
          event.preventDefault();
          handleAssignmentAction(assignment.id, 'accepted');
        });
  
        card.querySelector('.reject-button').addEventListener('click', function(event) {
          event.preventDefault();
          handleAssignmentAction(assignment.id, 'rejected');
        });
  
        assignmentsContainer.appendChild(card);
      });
    }
  
    function handleAssignmentAction(assignmentId, action) {
      const assignmentIndex = assignments.findIndex(assign => assign.id === assignmentId);
      if (assignmentIndex !== -1) {
        assignments[assignmentIndex].status = action;
        renderAssignments();
      }
    }
  
    renderAssignments();
  });