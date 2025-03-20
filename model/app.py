from flask import Flask, request, jsonify
import pickle
import pandas as pd
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

# Load the model
with open('knn_model.pkl', 'rb') as file:
    knn = pickle.load(file)

# Load the data
df = pd.read_csv('avengers_data.csv')
print("Columns in the DataFrame:", df.columns)


# Fit the scaler on the original features
features = df[['price', 'popularity', 'durability', 'category_encoded']]
scaler = StandardScaler()
scaler.fit(features)

app = Flask(__name__)

# Endpoint to get recommended products
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    product_features = data.get('features')  # Features of the last added product

    # Ensure the number of features matches the model's expectation
    if len(product_features) != 4:
        return jsonify({"error": "Incorrect number of features provided."}), 400

    # Get indices and distances of nearest neighbors
    distances, indices = knn.kneighbors([product_features])

    # Ensure indices are within bounds
    if indices.max() >= len(df):
        return jsonify({"error": "Indices are out-of-bounds."}), 400

    # Get nearest neighbors data
    nearest_neighbors = df.iloc[indices[0]]

    # Return recommended products
    return jsonify(nearest_neighbors.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
