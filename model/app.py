from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load the model
with open('knn_model.pkl', 'rb') as file:
    knn = pickle.load(file)

# Load the data
df = pd.read_csv('avengers_data.csv')

# Assume the scaler was fitted on the training data
scaler = StandardScaler()
scaler.fit(df[['price', 'popularity', 'durability', 'category_encoded']])

# Assume label encoder was fitted on the training data
label_encoder = LabelEncoder()
df['category_encoded'] = label_encoder.fit_transform(df['category'])

# Endpoint to get recommended products
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json

    # Extract features from the JSON input
    price = data.get('price')
    popularity = data.get('popularity')
    durability = data.get('durability')
    category = data.get('category')

    # Encode the category
    category_encoded = label_encoder.transform([category])[0]

    # Create feature array
    product_features = [price, popularity, durability, category_encoded]

    # Scale the product features
    scaled_features = scaler.transform([product_features])

    # Get indices and distances of nearest neighbors
    distances, indices = knn.kneighbors(scaled_features)
    print(scaled_features)
    # Check if indices are within bounds
    if indices.max() >= len(df):
        return jsonify({"error": "Indices are out-of-bounds."}), 400

    # Get nearest neighbors data
    nearest_neighbors = df.iloc[indices[0]]

    # Return recommended products
    return jsonify(nearest_neighbors.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
