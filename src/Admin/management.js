const usersData = [{
    id: 1,
    username: 'User 1',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 2,
    username: 'User 2',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 3,
    username: 'User 3',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 4,
    username: 'User 4',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 5,
    username: 'User 5',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 6,
    username: 'User 6',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 7,
    username: 'User 7',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 8,
    username: 'User 8',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 9,
    username: 'User 9',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}, {
    id: 10,
    username: 'User 10',
    dateJoined: 'May 1st 2025 11:45',
    avatar: null
}];

// SVG Icon untuk settings
const settingsIconSVG = `
            <svg class="settings-icon" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
        `;

// Function untuk render user row
function createUserRow(user) {
    return `
                <div class="user-row" data-user-id="${user.id}">
                    <div class="user-info">
                        <div class="user-avatar"></div>
                        <span class="username">${user.username}</span>
                    </div>
                    <span class="date-joined">${user.dateJoined}</span>
                    <div class="actions">
                        <button class="settings-btn" onclick="handleUserSettings(${user.id})" title="User Settings">
                            ${settingsIconSVG}
                        </button>
                    </div>
                </div>
            `;
}

// Function untuk render semua users
function renderUsers(users) {
    const userListElement = document.getElementById('user-list');

    if (users.length === 0) {
        userListElement.innerHTML = '<div class="loading">No users found</div>';
        return;
    }

    const usersHTML = users.map(user => createUserRow(user)).join('');
    userListElement.innerHTML = usersHTML;
}

// Function untuk handle settings button click
function handleUserSettings(userId) {
    const user = usersData.find(u => u.id === userId);
    if (user) {
        alert(`Settings for ${user.username}\nUser ID: ${userId}\nJoined: ${user.dateJoined}`);
        // Di sini bisa ditambahkan modal atau navigasi ke halaman settings user
    }
}

// Function untuk switch halaman sidebar (placeholder)
function switchPage(page) {
    // Reset active state
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });

    // Set active untuk halaman yang diklik
    event.target.classList.add('active');

    console.log(`Switching to ${page} page`);
    // Di sini bisa ditambahkan logika untuk load konten halaman yang berbeda
}

// Function untuk search users (bonus feature)
function searchUsers(searchTerm) {
    if (!searchTerm) {
        renderUsers(usersData);
        return;
    }

    const filteredUsers = usersData.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderUsers(filteredUsers);
}

// Function untuk sort users berdasarkan kriteria
function sortUsers(sortBy, order = 'asc') {
    const sortedUsers = [...usersData].sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];

        if (sortBy === 'dateJoined') {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        }

        if (order === 'asc') {
            return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
            return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
    });

    renderUsers(sortedUsers);
}

// Function untuk delete user
function deleteUser(userId) {
    if (confirm(`Are you sure you want to delete this user?`)) {
        const userIndex = usersData.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            usersData.splice(userIndex, 1);
            renderUsers(usersData);
            console.log(`User ${userId} deleted`);
        }
    }
}

// Function untuk add new user
function addUser(userData) {
    const newUser = {
        id: Math.max(...usersData.map(u => u.id)) + 1,
        username: userData.username,
        dateJoined: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        avatar: userData.avatar || null
    };

    usersData.push(newUser);
    renderUsers(usersData);
    console.log('New user added:', newUser);
}

// Initialize page ketika DOM sudah loaded
document.addEventListener('DOMContentLoaded', function() {
    // Langsung render users tanpa delay
    renderUsers(usersData);
});

// Export functions untuk digunakan di tempat lain jika diperlukan
window.ProLanceAdmin = {
    renderUsers,
    searchUsers,
    sortUsers,
    addUser,
    deleteUser,
    usersData
};