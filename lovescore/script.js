document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert(`Usuário ${username} cadastrado com sucesso!`);
    document.getElementById('signup').style.display = 'none';
    document.getElementById('browse').style.display = 'block';
    loadProfiles();
});

function loadProfiles() {
    const profiles = [
        { username: 'Ana', id: 1 },
        { username: 'Carlos', id: 2 },
        { username: 'Beatriz', id: 3 }
    ];
    const profilesDiv = document.getElementById('profiles');
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerHTML = `<span>${profile.username}</span><button onclick="match(${profile.id})">Match</button>`;
        profilesDiv.appendChild(profileDiv);
    });
}

function match(id) {
    alert(`Você deu match com o usuário ${id}!`);
    document.getElementById('browse').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
    document.getElementById('discussions').style.display = 'block';
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        document.getElementById('messages').appendChild(messageElement);
        messageInput.value = '';
    }
});

document.getElementById('discussionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const discussionInput = document.getElementById('discussionInput');
    const discussion = discussionInput.value;
    if (discussion.trim() !== '') {
        const discussionElement = document.createElement('div');
        discussionElement.textContent = discussion;
        document.getElementById('discussionsList').appendChild(discussionElement);
        discussionInput.value = '';
    }
});
