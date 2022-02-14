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

# If the server where have made request it's crashed for some intern problem, the request should delay response.
# For 10 seconds havent sure if request will return
response = requests.get("https://httpbin.org/delay/10")
print(response)

# The way is define a timeout, that define a time where will get the response what if response delay, return an exception:

try:
    # resource delay a lot to response
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # lets make a new request
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)
