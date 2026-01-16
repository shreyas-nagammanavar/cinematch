# Configuration for CineMatch Movie Recommendation System

# Server Configuration
HOST = '0.0.0.0'  # Change to 'localhost' for local only
PORT = 5000
DEBUG = True

# Recommendation Settings
MAX_RECOMMENDATIONS = 20
DEFAULT_MOVIES_LIMIT = 50

# Genre Categories
GENRES = [
    'Action',
    'Romance', 
    'Comedy',
    'Thriller',
    'Horror',
    'Drama',
    'Sci-Fi',
    'Adventure',
    'Fantasy',
    'Mystery',
    'Crime',
    'Animation'
]

# UI Settings
DEFAULT_THEME = 'light'  # 'light' or 'dark'
MOVIES_PER_ROW = 5  # Adjust based on screen size
