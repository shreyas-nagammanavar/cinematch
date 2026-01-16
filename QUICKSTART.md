# 🚀 Quick Start - Deploy in 15 Minutes

## Step 1: Create GitHub Repository (2 min)
1. Go to https://github.com/new
2. Name: `cinematch`
3. Public ✅
4. Create repository
5. Copy the URL

## Step 2: Upload Code (2 min)
Double-click: `upload_to_github.bat`
- Enter your GitHub username
- Enter repository name: `cinematch`
- Done!

## Step 3: Deploy on Render (10 min)
1. Go to https://render.com
2. Sign up with GitHub
3. New + → Web Service
4. Select `cinematch` repo
5. Settings:
   - Build: `pip install -r requirements.txt`
   - Start: `gunicorn app:app`
   - Free tier
6. Create Web Service
7. Wait 5 minutes
8. Copy your live URL!

## Step 4: Update README (1 min)
1. Open `README.md`
2. Replace `YOUR_DEPLOYED_URL_HERE` with your URL
3. Replace `YOUR_USERNAME` with your GitHub username
4. Save and push:
```bash
git add README.md
git commit -m "Add live link"
git push origin main
```

## 🎉 Done!
Share your link:
`https://cinematch-xxxx.onrender.com`

---

**Need detailed help?** See `DEPLOYMENT.md` or `CHECKLIST.md`
