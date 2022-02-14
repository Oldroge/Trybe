from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# lets test with the first page
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recover the attribute href from first element that combine with the selector
href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

# download the details page content 
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recover the product description 
# ~ means sister tag
description = detail_selector.css("#product_description ~ p::text").get()
print(description)
