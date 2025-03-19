import pandas as pd
import numpy as np
import random

categories = ["Weapons", "Costumes", "Powers"]

np.random.seed(42)
product_data = []

for i in range(1000):
    product = {
        "name": f"Product {i+1}",
        "price": random.randint(100, 20000),
        "category": random.choice(categories),
        "popularity": random.randint(1, 10),
        "durability": random.randint(1, 10)
    }
    product_data.append(product)

df_products = pd.DataFrame(product_data)

from sklearn.preprocessing import LabelEncoder
label_encoder = LabelEncoder()
df_products['category_encoded'] = label_encoder.fit_transform(df_products['category'])

df_products.to_csv('products_data.csv', index=False)
