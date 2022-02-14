import requests

response = requests.get("https://www.betrybe.com")
print(response.status_code) # return status code

print(response.content) # bytes received as response

print(response.headers['Content-type']) # html format content

print(response.text) # Content received from request

# post type request
response1 = requests.post("http://httpbin.org/post", data="some content")
print(response1.text)

# request send header
response2 = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response2.text)

# request to binary resources
response3 = requests.get("http://httpbin.org/image/png")
print(response3.content)

# JSON resource
response = requests.get("http://httpbin.org/get")
# Equivalent to json.loads(response.content)
print(response.json())

# We can too ask that the answer throws an exception case the status dont be OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()