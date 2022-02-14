import requests
from time import sleep

# From tith request it are blocked to access the resource 
# status code 429: Too many requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    sleep(6)
# A good way to solve this problem is to set 6 seconds break for each request
# OBS: This example site have a rate limit by 10 requests per minute  