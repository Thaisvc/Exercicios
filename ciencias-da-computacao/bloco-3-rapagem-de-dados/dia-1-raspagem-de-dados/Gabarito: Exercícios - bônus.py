# Exercício 8: Agora um desafio! Vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as imagens de todas as bandeiras.





import requests
from parsel import Selector

BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(BASE_URL)
selector = Selector(response.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for img_url in flags_url:
    filename = img_url.split("/")[-1]
    image_content = requests.get("https:" + img_url).content
    with open("./country_flags/" + filename, "wb") as file:
        file.write(image_content)
        
#Exercício 9: Alguns sites possuem paginação feita através de rolagem infinita. Descubra como funciona a rolagem infinita e extraia todas as citações do seguinte site: http://quotes.toscrape.com/scroll.
import requests


has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(f"http://quotes.toscrape.com/api/quotes?page={page}")
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
