let currentGenre = 'all';
let currentTab = 'trending';
let userId = null;

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// User ID
const userIdInput = document.getElementById('userId');
const loadUserBtn = document.getElementById('loadUserBtn');

loadUserBtn.addEventListener('click', () => {
    const inputValue = parseInt(userIdInput.value);
    if (inputValue >= 1 && inputValue <= 1000) {
        userId = inputValue;
        alert(`User ID ${userId} loaded! Check "For You" tab for personalized recommendations.`);
        if (currentTab === 'foryou') loadForYou();
    } else {
        alert('Please enter a valid User ID between 1 and 1000');
    }
});

userIdInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadUserBtn.click();
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGenre = btn.dataset.genre;
        loadMovies();
    });
});

// Tab Buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.tab;
        loadContent();
    });
});

// Search
document.getElementById('searchBtn').addEventListener('click', () => {
    loadMovies();
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadMovies();
});

// Modal
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Load Content Based on Tab
function loadContent() {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '<div class="loading">Loading...</div>';
    
    switch(currentTab) {
        case 'trending':
            loadTrending();
            break;
        case 'popular':
            loadPopular();
            break;
        case 'foryou':
            loadForYou();
            break;
        case 'browse':
            loadMovies();
            break;
    }
}

async function loadMovies() {
    const search = document.getElementById('searchInput').value;
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '<div class="loading">Loading...</div>';
    
    try {
        const response = await fetch(`/api/movies?genre=${currentGenre}&search=${search}&limit=50`);
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        container.innerHTML = '<div class="loading">Error loading movies</div>';
    }
}

async function loadTrending() {
    const container = document.getElementById('moviesContainer');
    try {
        const response = await fetch('/api/trending');
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        container.innerHTML = '<div class="loading">Error loading trending movies</div>';
    }
}

async function loadPopular() {
    const container = document.getElementById('moviesContainer');
    try {
        const response = await fetch('/api/popular');
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        container.innerHTML = '<div class="loading">Error loading popular movies</div>';
    }
}

async function loadForYou() {
    const container = document.getElementById('moviesContainer');
    if (!userId) {
        container.innerHTML = '<div class="loading">Please enter a User ID (1-1000) and click Load to get personalized recommendations</div>';
        return;
    }
    container.innerHTML = '<div class="loading">Loading your personalized recommendations...</div>';
    try {
        const response = await fetch(`/api/user/${userId}/recommendations`);
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        container.innerHTML = '<div class="loading">Error loading recommendations</div>';
    }
}

function displayMovies(movies) {
    const container = document.getElementById('moviesContainer');
    
    if (movies.length === 0) {
        container.innerHTML = '<div class="loading">No movies found</div>';
        return;
    }
    
    container.innerHTML = movies.map(movie => {
        const genres = movie.genres.split('|').slice(0, 3);
        const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return `
            <div class="movie-card" onclick="showMovieDetails(${movie.movieId})">
                <div class="movie-poster" style="background: linear-gradient(135deg, ${randomColor}, ${colors[(colors.indexOf(randomColor) + 1) % colors.length]})">
                    <span style="font-size: 3rem; filter: brightness(1.2);">🎬</span>
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    ${movie.year ? `<div class="movie-year">📅 ${movie.year}</div>` : ''}
                    <div class="movie-genres">
                        ${genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

async function showMovieDetails(movieId) {
    modal.style.display = 'block';
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '<div class="loading">Loading recommendations...</div>';
    
    // Add to user history if user ID is set
    if (userId) {
        await fetch(`/api/user/${userId}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ movieId })
        });
    }
    
    try {
        const response = await fetch(`/api/recommendations/${movieId}`);
        const recommendations = await response.json();
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">Similar Movies You Might Like</h2>
            </div>
            <div class="recommendations-grid">
                ${recommendations.map(movie => {
                    const genres = movie.genres.split('|').slice(0, 2);
                    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    return `
                        <div class="movie-card" onclick="showMovieDetails(${movie.movieId})">
                            <div class="movie-poster" style="background: linear-gradient(135deg, ${randomColor}, ${colors[(colors.indexOf(randomColor) + 1) % colors.length]}); height: 250px;">
                                <span style="font-size: 2rem;">🎬</span>
                            </div>
                            <div class="movie-info">
                                <div class="movie-title">${movie.title}</div>
                                <div class="movie-genres">
                                    ${genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } catch (error) {
        modalBody.innerHTML = '<div class="loading">Error loading recommendations</div>';
    }
}

// Initial Load
loadContent();
