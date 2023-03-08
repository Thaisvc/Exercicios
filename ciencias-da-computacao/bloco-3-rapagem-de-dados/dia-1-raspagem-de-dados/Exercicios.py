import requests
import parsel
from pymongo import MongoClient

#1
response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)

#2
response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")

#3
response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response.text

#4
URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")

#5
URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()
availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, cover, availability, sep=",")

#6
category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
        

#7
with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    for category in db.books.aggregate(pipelines):
        print(category["_id"], category["count"], sep=": ")       
        