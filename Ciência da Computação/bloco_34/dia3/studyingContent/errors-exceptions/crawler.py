import requests

# From tith request it are blocked to access the resource 
# status code 429: Too many requests
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
