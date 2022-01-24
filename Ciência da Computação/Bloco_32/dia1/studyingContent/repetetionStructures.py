restaurants = [
    {"name": "Restaurant A", "nota": 4.5},
    {"name": "Restaurant B", "nota": 3.0},
    {"name": "Restaurant C", "nota": 4.2},
    {"name": "Restaurant D", "nota": 2.3},
]

# Find restaurants with rate bigger tha 3.0//
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)

# Count from 0 to 4
for index in range(5):
    print(index)

# Find all restaurant that doesnt the A restaurant
min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant['name'] != 'Restaurant A']
print(filtered_restaurants)
