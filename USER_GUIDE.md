# 🎬 CineMatch User Guide

## Quick Start

1. **Run the application**:
   - Double-click `start.bat` (Windows)
   - Or run: `python app.py`

2. **Open your browser**: Navigate to `http://localhost:5000`

## Features Guide

### 🌓 Dark/Light Mode
- Click the moon (🌙) or sun (☀️) icon in the top-right corner
- Your preference is saved automatically

### 👤 User ID
- Each user gets a unique ID automatically
- Enter your custom User ID to get personalized recommendations
- The system remembers your viewing history

### 📑 Tabs

**🔥 Trending**: See currently trending movies
**⭐ Popular**: Browse popular movies sorted by year
**💝 For You**: Personalized recommendations based on your history
**🎯 Browse**: Browse all movies with filters

### 🎭 Genre Filters
Click any genre button to filter movies:
- All
- Action
- Romance
- Comedy
- Thriller
- Horror
- Drama
- Sci-Fi

### 🔍 Search
- Type movie name in the search bar
- Press Enter or click Search button
- Works with partial matches

### 🎬 Movie Cards
- Click any movie card to see similar recommendations
- A modal popup shows 20 similar movies
- Click on recommended movies to explore further

### 💡 How Recommendations Work

1. **Content-Based Filtering**: Uses movie genres to find similar movies
2. **TF-IDF Algorithm**: Analyzes genre patterns
3. **Cosine Similarity**: Calculates similarity scores
4. **Personalized**: Based on your viewing history

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Adaptive grid layout
- Touch-friendly interface

## Tips for Best Experience

1. **Build Your Profile**: Click on movies you like to build your viewing history
2. **Explore Genres**: Try different genre filters to discover new movies
3. **Use For You Tab**: After viewing several movies, check the "For You" tab for personalized recommendations
4. **Dark Mode**: Use dark mode for comfortable viewing at night

## Keyboard Shortcuts

- **Enter**: Submit search
- **Esc**: Close modal (when focused)

## Troubleshooting

**Movies not loading?**
- Check if the server is running
- Refresh the page
- Check browser console for errors

**Recommendations not personalized?**
- Click on more movies to build your history
- Make sure you're using the same User ID

**Theme not saving?**
- Check if browser allows localStorage
- Try a different browser

Enjoy discovering amazing movies! 🍿
