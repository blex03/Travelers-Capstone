import random
import csv

# Define possible categories and their encoded values
categories = {
    "Costumes": 0,
    "Powers": 1,
    "Weapons": 2,
}

# Sample Avengers items (just a small subset for variety)
avengers_items = [
    ("Iron Man Armor", "Costumes", 99.99, 95, 80),
    ("Captain America's Shield", "Weapons", 49.99, 90, 85),
    ("Thor's Mjolnir Hammer", "Weapons", 29.99, 85, 90),
    ("Spider-Man Web Shooter", "Powers", 19.99, 100, 60),
    ("Black Widow's Gauntlets", "Weapons", 45.99, 85, 75),
    ("Hulk's Smash Fist", "Weapons", 22.99, 80, 95),
    ("Black Panther's Vibranium Suit", "Costumes", 120.00, 90, 95),
    ("Hawkeye's Bow and Arrows", "Weapons", 45.00, 75, 80),
    ("Ant-Man's Suit", "Costumes", 75.00, 80, 85),
    ("Scarlet Witch's Magic Powers", "Powers", 89.99, 85, 90),
    ("Doctor Strange's Cloak of Levitation", "Costumes", 55.00, 70, 90),
    ("Vision's Mind Stone", "Weapons", 55.99, 100, 95),
    ("Loki's Scepter", "Weapons", 49.99, 85, 80),
    ("Thor's Helmet", "Costumes", 40.00, 75, 80),
    ("Iron Spider Suit", "Costumes", 110.00, 95, 90),
    ("Wolverine's Claws", "Weapons", 17.99, 70, 85),
    ("Black Widow's Combat Boots", "Costumes", 30.00, 80, 80),
    ("Captain Marvel's Suit", "Costumes", 75.00, 90, 85),
    ("The Hulk's Gamma Gloves", "Weapons", 40.00, 85, 90),
    ("Iron Man's Arc Reactor", "Weapons", 55.00, 100, 80),
    ("Spider-Man's Suit", "Costumes", 50.00, 95, 75),
    ("Black Panther's Mask", "Costumes", 32.00, 85, 90),
    ("Green Goblin's Glider", "Weapons", 39.99, 80, 75),
    ("Iron Man's Repulsor Blasters", "Weapons", 29.99, 90, 85),
    ("Captain America's Vibranium Shield", "Weapons", 65.00, 100, 95),
    ("Thor's Stormbreaker Axe", "Weapons", 100.00, 85, 95),
    ("Hawkeye's Quiver", "Weapons", 25.00, 70, 85),
    ("The Falcon's Wings", "Weapons", 75.00, 80, 90),
    ("Winter Soldier's Arm", "Weapons", 60.00, 70, 90),
    ("Shuri's Vibranium Tech", "Powers", 40.99, 80, 95),
    ("Black Widow's Widow's Bite", "Weapons", 22.99, 80, 85),
    ("Hulkbuster Armor", "Costumes", 200.00, 100, 100),
    ("Vision's Solar Gem", "Weapons", 35.00, 90, 80),
    ("Doctor Strange's Eye of Agamotto", "Weapons", 50.00, 85, 90),
    ("Iron Man's Mark 50 Armor", "Costumes", 150.00, 95, 85),
    ("Captain Marvel's Photon Blasts", "Powers", 65.99, 90, 85),
    ("Thor's Lightning Powers", "Powers", 50.00, 95, 100),
    ("Iron Man's Unibeam", "Weapons", 75.00, 100, 80),
    ("Captain America's Tactical Gloves", "Costumes", 25.99, 75, 90),
    ("Thor's Battle Axe", "Weapons", 100.00, 85, 95),
    ("Ant-Man's Shrinking Powers", "Powers", 40.00, 80, 75),
    ("Black Widow's Tactical Vest", "Costumes", 55.00, 85, 90),
    ("Hawkeye's Targeting System", "Weapons", 20.00, 70, 75)
]

# Generate 1000 additional data points by duplicating and randomly modifying the sample data
num_records = 1000
random.seed(42)  # For reproducibility

data = []
for _ in range(num_records):
    item = random.choice(avengers_items)
    name, category, price, popularity, durability = item
    category_encoded = categories[category]
    
    # Randomly adjust price, popularity, and durability for variety
    price += random.uniform(-10, 10)  # Vary price by +-10
    popularity = min(max(popularity + random.randint(-5, 5), 60), 100)  # Keep popularity between 60 and 100
    durability = min(max(durability + random.randint(-10, 10), 50), 100)  # Keep durability between 50 and 100
    
    data.append([name, price, category, popularity, durability, category_encoded])

# Write the data to a CSV file
with open("avengers_data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "price", "category", "popularity", "durability", "category_encoded"])
    writer.writerows(data)

print("CSV file 'avengers_data.csv' has been created with 1000 data points.")
