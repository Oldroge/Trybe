from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)

# The title is in the title attribute in the ancor element (<a>)
# Inside h3 in elements that have class product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()

# The prices is in the price_color class text
# That is found inside .product_price class
prices = selector.css(".product_price .price_color::text").getall()

# combine all we can search the products
# and then search the values individually
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
