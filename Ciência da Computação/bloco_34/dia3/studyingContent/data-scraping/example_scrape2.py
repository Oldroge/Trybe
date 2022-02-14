from parsel import Selector
import requests

# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Search next content page 
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # print products of a certain page
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Discover which is the next page
    next_page_url = selector.css(".next a::attr(href)").get()
