from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import random
import os

app = Flask(__name__)
CORS(app)

# Load and process data
df = pd.read_csv('movies.csv')
df['year'] = df['title'].str.extract(r'\((\d{4})\)')
df['clean_title'] = df['title'].str.replace(r'\s*\(\d{4}\)', '', regex=True)
df['genres_list'] = df['genres'].str.split('|')

# Create TF-IDF matrix (don't compute full similarity matrix)
tfidf = TfidfVectorizer(stop_words='english')
df['genres_str'] = df['genres'].str.replace('|', ' ')
tfidf_matrix = tfidf.fit_transform(df['genres_str'])

# Simulate user preferences and ratings
user_data = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/movies')
def get_movies():
    genre = request.args.get('genre', '')
    search = request.args.get('search', '')
    limit = int(request.args.get('limit', 50))
    
    filtered_df = df.copy()
    
    if genre and genre != 'all':
        filtered_df = filtered_df[filtered_df['genres'].str.contains(genre, case=False, na=False)]
    
    if search:
        filtered_df = filtered_df[filtered_df['clean_title'].str.contains(search, case=False, na=False)]
    
    movies = filtered_df.head(limit)[['movieId', 'title', 'genres', 'year']].to_dict('records')
    return jsonify(movies)

@app.route('/api/recommendations/<int:movie_id>')
def get_recommendations(movie_id):
    try:
        idx = df[df['movieId'] == movie_id].index[0]
        # Compute similarity only for this movie
        sim_scores = cosine_similarity(tfidf_matrix[idx], tfidf_matrix).flatten()
        sim_indices = sim_scores.argsort()[::-1][1:21]
        recommendations = df.iloc[sim_indices][['movieId', 'title', 'genres', 'year']].to_dict('records')
        return jsonify(recommendations)
    except:
        return jsonify([])

@app.route('/api/user/<user_id>/recommendations')
def get_user_recommendations(user_id):
    # Validate user_id is between 1-1000
    try:
        uid = int(user_id)
        if uid < 1 or uid > 1000:
            return jsonify({'error': 'User ID must be between 1 and 1000'}), 400
    except ValueError:
        return jsonify({'error': 'Invalid User ID'}), 400
    
    if user_id not in user_data or not user_data[user_id]:
        # Generate recommendations based on user_id seed for consistency
        random.seed(int(user_id))
        popular = df.sample(20)[['movieId', 'title', 'genres', 'year']].to_dict('records')
        random.seed()  # Reset seed
        return jsonify(popular)
    
    user_movies = user_data[user_id]
    all_recommendations = []
    
    for movie_id in user_movies[-3:]:
        try:
            idx = df[df['movieId'] == movie_id].index[0]
            sim_scores = cosine_similarity(tfidf_matrix[idx], tfidf_matrix).flatten()
            sim_indices = sim_scores.argsort()[::-1][1:8]
            all_recommendations.extend(sim_indices.tolist())
        except:
            pass
    
    unique_recommendations = list(set(all_recommendations))[:20]
    recommendations = df.iloc[unique_recommendations][['movieId', 'title', 'genres', 'year']].to_dict('records')
    return jsonify(recommendations)

@app.route('/api/user/<user_id>/add', methods=['POST'])
def add_user_movie(user_id):
    # Validate user_id is between 1-1000
    try:
        uid = int(user_id)
        if uid < 1 or uid > 1000:
            return jsonify({'error': 'User ID must be between 1 and 1000'}), 400
    except ValueError:
        return jsonify({'error': 'Invalid User ID'}), 400
    
    movie_id = request.json.get('movieId')
    if user_id not in user_data:
        user_data[user_id] = []
    if movie_id not in user_data[user_id]:
        user_data[user_id].append(movie_id)
    return jsonify({'success': True})

@app.route('/api/trending')
def get_trending():
    trending = df.sample(20)[['movieId', 'title', 'genres', 'year']].to_dict('records')
    return jsonify(trending)

@app.route('/api/popular')
def get_popular():
    popular = df[df['year'].notna()].sort_values('year', ascending=False).head(20)[['movieId', 'title', 'genres', 'year']].to_dict('records')
    return jsonify(popular)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
