@echo off
echo ========================================
echo   GitHub Upload Script
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo.
)

echo Adding all files...
git add .
echo.

echo Enter commit message (or press Enter for default):
set /p commit_msg="Commit message: "
if "%commit_msg%"=="" set commit_msg=Update CineMatch project

echo.
echo Committing changes...
git commit -m "%commit_msg%"
echo.

echo Enter your GitHub username:
set /p username="Username: "
echo.

echo Enter your repository name (default: cinematch):
set /p repo="Repository: "
if "%repo%"=="" set repo=cinematch
echo.

REM Check if remote exists
git remote | findstr origin >nul
if %errorlevel% equ 0 (
    echo Remote already exists, updating...
    git remote set-url origin https://github.com/%username%/%repo%.git
) else (
    echo Adding remote...
    git remote add origin https://github.com/%username%/%repo%.git
)

echo.
echo Setting branch to main...
git branch -M main
echo.

echo Pushing to GitHub...
git push -u origin main
echo.

if %errorlevel% equ 0 (
    echo ========================================
    echo   SUCCESS! Code uploaded to GitHub!
    echo ========================================
    echo.
    echo Your repository: https://github.com/%username%/%repo%
    echo.
    echo Next steps:
    echo 1. Go to Render.com and sign up
    echo 2. Create new Web Service
    echo 3. Connect your GitHub repo
    echo 4. Deploy!
    echo.
    echo See DEPLOYMENT.md for detailed instructions
) else (
    echo ========================================
    echo   ERROR! Please check your credentials
    echo ========================================
    echo.
    echo Make sure:
    echo 1. You created the repository on GitHub first
    echo 2. Your username is correct
    echo 3. You have internet connection
)

echo.
pause
