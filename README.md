# 🎬 CineMatch - AI-Powered Movie Recommendation System

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](YOUR_DEPLOYED_URL_HERE)
[![Python](https://img.shields.io/badge/python-3.11-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/flask-3.0-lightgrey.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> A modern, feature-rich movie recommendation system powered by Machine Learning, featuring personalized recommendations, dark/light themes, and a beautiful responsive UI.

## 🌟 Live Demo

**Try it now:** [YOUR_DEPLOYED_URL_HERE](#)

## ✨ Features

### 🎨 Modern UI/UX
- 🌓 **Dark/Light Mode** - Toggle themes with persistent storage
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Beautiful Design** - Gradient colors, smooth animations, modern card layout
- ⚡ **Fast Performance** - Optimized loading and rendering

### 🎬 Movie Discovery
- 🔥 **Trending Movies** - Discover what's hot right now
- ⭐ **Popular Movies** - Browse the most popular films
- 🎯 **Smart Search** - Find movies instantly by title
- 🎭 **Genre Filtering** - Action, Romance, Comedy, Thriller, Horror, Drama, Sci-Fi, and more

### 🤖 AI-Powered Recommendations
- 💝 **Personalized "For You"** - ML-based recommendations tailored to your taste
- 👤 **User Profiles** - Support for 1000 unique users (ID: 1-1000)
- 🧠 **Content-Based Filtering** - TF-IDF + Cosine Similarity algorithm
- 📊 **Learning System** - Recommendations improve as you interact

### 📊 Dataset
- **62,423 Movies** from MovieLens
- **20+ Genre Categories**
- **Release Year Information**

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- pip

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/cinematch.git
cd cinematch
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Run the application**
```bash
python app.py
```

4. **Open in browser**
```
http://localhost:5000
```

## 🎮 How to Use

1. **Enter User ID** - Type any number from 1-1000 and click "Load"
2. **Browse Movies** - Explore Trending, Popular, or Browse tabs
3. **Filter by Genre** - Click genre buttons to filter movies
4. **Search** - Type movie name in search bar
5. **Get Recommendations** - Click any movie to see similar films
6. **Toggle Theme** - Click 🌙/☀️ icon for dark/light mode

## 🛠️ Technology Stack

### Backend
- **Flask** - Python web framework
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **Scikit-learn** - Machine learning (TF-IDF, Cosine Similarity)

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Fonts** - Poppins typography

### Deployment
- **Gunicorn** - Production WSGI server
- **Heroku/Render** - Cloud platform

## 📁 Project Structure

```
cinematch/
├── app.py                 # Flask backend with ML
├── requirements.txt       # Python dependencies
├── Procfile              # Deployment configuration
├── runtime.txt           # Python version
├── movies.csv            # Movie dataset (62K+ movies)
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── style.css         # Styling with themes
│   └── script.js         # Interactive features
└── README.md             # This file
```

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

2. **Login to Heroku**
```bash
heroku login
```

3. **Create Heroku app**
```bash
heroku create your-app-name
```

4. **Deploy**
```bash
git push heroku main
```

5. **Open app**
```bash
heroku open
```

### Deploy to Render

1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
5. Click "Create Web Service"

### Deploy to Railway

1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Python and deploys

## 🎯 Key Features Explained

### Machine Learning Algorithm
- **TF-IDF Vectorization** - Converts movie genres into numerical vectors
- **Cosine Similarity** - Calculates similarity between movies
- **On-Demand Computation** - Memory-efficient, computes only when needed
- **Content-Based Filtering** - Recommends based on movie characteristics

### User System
- **1000 Unique Users** - Each User ID (1-1000) gets unique recommendations
- **Consistent Recommendations** - Same User ID = Same initial recommendations
- **Learning Capability** - System learns from your movie clicks
- **Session-Based** - History maintained during session

## 📸 Screenshots

### Light Mode
![Light Mode](https://via.placeholder.com/800x400?text=Light+Mode+Screenshot)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x400?text=Dark+Mode+Screenshot)

### Mobile View
![Mobile](https://via.placeholder.com/400x800?text=Mobile+View)

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Full-stack web development (Flask + HTML/CSS/JS)
- ✅ Machine Learning implementation (Recommendation Systems)
- ✅ RESTful API design
- ✅ Responsive UI/UX design
- ✅ Data processing with Pandas
- ✅ Modern CSS (Grid, Flexbox, Variables)
- ✅ Vanilla JavaScript (ES6+, Async/Await)
- ✅ Cloud deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

## 🙏 Acknowledgments

- Dataset: [MovieLens](https://grouplens.org/datasets/movielens/)
- Icons: Emoji
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## 📊 Stats

- **62,423** Movies
- **20+** Genres
- **1000** User Profiles
- **100+** Features

## 🔮 Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Rating system (5-star ratings)
- [ ] Watchlist functionality
- [ ] Movie details from TMDB API
- [ ] Trailer integration (YouTube)
- [ ] Social features (share, comment)
- [ ] Advanced filters (year, rating, duration)
- [ ] Collaborative filtering
- [ ] Movie posters from API

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and Python
