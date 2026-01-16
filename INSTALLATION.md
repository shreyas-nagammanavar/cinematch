# 🚀 CineMatch - Installation & Deployment Guide

## 📋 Prerequisites

### Required Software
- Python 3.7 or higher
- pip (Python package manager)
- Web browser (Chrome, Firefox, Safari, Edge)

### Check Your Python Version
```bash
python --version
```

## 🔧 Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd C:\Users\SHREYAS\Downloads\movie_rs
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

Or install individually:
```bash
pip install flask flask-cors pandas numpy scikit-learn
```

### Step 3: Verify Dataset
```bash
python -c "import pandas as pd; print('Movies:', len(pd.read_csv('movies.csv')))"
```

Expected output: `Movies: 62423`

### Step 4: Run the Application
```bash
python app.py
```

### Step 5: Open in Browser
Navigate to: `http://localhost:5000`

## 🎯 Quick Start (Windows)

Simply double-click: `start.bat`

## 🐧 Linux/Mac Instructions

### Create Virtual Environment (Recommended)
```bash
python3 -m venv venv
source venv/bin/activate  # On Mac/Linux
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run Application
```bash
python app.py
```

## 🌐 Deployment Options

### Option 1: Local Network Access

Edit `app.py`, change the last line to:
```python
app.run(debug=False, host='0.0.0.0', port=5000)
```

Access from other devices: `http://YOUR_IP:5000`

### Option 2: Heroku Deployment

1. Create `Procfile`:
```
web: gunicorn app:app
```

2. Add to `requirements.txt`:
```
gunicorn==21.2.0
```

3. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

### Option 3: PythonAnywhere

1. Upload files to PythonAnywhere
2. Create web app with Flask
3. Set working directory
4. Reload web app

### Option 4: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

Build and run:
```bash
docker build -t cinematch .
docker run -p 5000:5000 cinematch
```

### Option 5: AWS EC2

1. Launch EC2 instance (Ubuntu)
2. Install Python and dependencies
3. Upload project files
4. Run with nohup:
```bash
nohup python app.py &
```

### Option 6: Google Cloud Run

1. Create `Dockerfile` (see above)
2. Build and push to Container Registry
3. Deploy to Cloud Run
4. Access via provided URL

## 🔒 Production Configuration

### Security Settings

Edit `app.py`:
```python
# Change debug to False
app.run(debug=False)

# Add secret key
app.secret_key = 'your-secret-key-here'

# Enable HTTPS
# Use reverse proxy (nginx) or cloud provider SSL
```

### Performance Optimization

1. **Enable Caching**:
```python
from flask_caching import Cache
cache = Cache(app, config={'CACHE_TYPE': 'simple'})
```

2. **Use Production Server**:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

3. **Compress Responses**:
```python
from flask_compress import Compress
Compress(app)
```

### Environment Variables

Create `.env` file:
```
FLASK_ENV=production
SECRET_KEY=your-secret-key
PORT=5000
```

Load in `app.py`:
```python
from dotenv import load_dotenv
load_dotenv()
```

## 🐛 Troubleshooting

### Issue: Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Issue: Module Not Found
```bash
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

### Issue: Dataset Not Loading
```bash
# Verify file exists
dir movies.csv  # Windows
ls movies.csv   # Linux/Mac

# Check file size
python -c "import os; print(os.path.getsize('movies.csv'))"
```

### Issue: CORS Errors
Ensure `flask-cors` is installed:
```bash
pip install flask-cors
```

### Issue: Slow Performance
- Reduce dataset size in `app.py`
- Enable caching
- Use production server (gunicorn)

## 📊 System Requirements

### Minimum
- CPU: 1 core
- RAM: 512 MB
- Storage: 100 MB
- Python: 3.7+

### Recommended
- CPU: 2+ cores
- RAM: 2 GB
- Storage: 500 MB
- Python: 3.9+

## 🔄 Updating the Application

### Update Dependencies
```bash
pip install --upgrade -r requirements.txt
```

### Update Dataset
Replace `movies.csv` with new data, then restart:
```bash
python app.py
```

### Clear Cache
Delete browser cache or:
```bash
# Add to app.py
@app.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response
```

## 🧪 Testing

### Test Backend
```bash
python -c "from app import app; print('Backend OK')"
```

### Test API Endpoints
```bash
# Using curl
curl http://localhost:5000/api/movies
curl http://localhost:5000/api/trending
curl http://localhost:5000/api/popular
```

### Test Frontend
Open browser and check:
- Page loads correctly
- Theme toggle works
- Search functionality
- Movie cards display
- Modal opens on click

## 📈 Monitoring

### Check Server Status
```bash
# View logs
tail -f app.log

# Monitor resources
top  # Linux/Mac
taskmgr  # Windows
```

### Performance Metrics
- Response time: < 200ms
- Page load: < 2s
- Memory usage: < 500MB

## 🔐 Security Checklist

- [ ] Debug mode disabled in production
- [ ] Secret key set
- [ ] HTTPS enabled
- [ ] CORS configured properly
- [ ] Input validation added
- [ ] Rate limiting implemented
- [ ] Error messages don't expose internals

## 📱 Mobile Testing

Test on:
- iOS Safari
- Android Chrome
- Various screen sizes (320px - 1920px)

## 🎉 Success Indicators

✓ Server starts without errors
✓ Homepage loads in browser
✓ Movies display correctly
✓ Search works
✓ Recommendations load
✓ Theme toggle functions
✓ Responsive on mobile

## 📞 Support

If you encounter issues:
1. Check troubleshooting section
2. Verify all dependencies installed
3. Check Python version compatibility
4. Review error messages in terminal
5. Check browser console for frontend errors

## 🎓 Learning Resources

- Flask Documentation: https://flask.palletsprojects.com/
- Pandas Documentation: https://pandas.pydata.org/
- Scikit-learn: https://scikit-learn.org/
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/

---

**You're all set! Enjoy your movie recommendation system!** 🎬🍿
