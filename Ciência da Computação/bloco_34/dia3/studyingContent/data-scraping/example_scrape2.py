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
    
    # search the product details
    detail_href = product.css("h3 a::attr(href)").get()
    detail_page_url = URL_BASE + detail_href

    # Baixa o conteúdo da página de detalhes
    # download the details page content
    detail_response = requests.get(detail_page_url)
    detail_selector = Selector(text=detail_response.text)

    # Extract the product description
    description = detail_selector.css("#product_description ~ p::text").get()
    print(description)

    # Discover which is the next page
    next_page_url = selector.css(".next a::attr(href)").get()
