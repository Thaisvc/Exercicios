from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

def scrape(url):
        firefox.get(url)

        quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

        print(quote)

scrape('https://quotes.toscrape.com/')



from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)

def scrape(url):
    firefox.get(url)
    paragraphs  = firefox.find_elements(By.TAG_NAME, 'p')
    for p in paragraphs:
        print(p.text)

scrape('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')




from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

def scrape(url):
    firefox.get(url)

    posts = []
    for post in firefox.find_elements(By.CLASS_NAME, 'post-outer'):
        new_item = dict()
        new_item['title'] = post.find_element(By.CLASS_NAME, 'entry-title').find_element(By.TAG_NAME, 'a').get_attribute('innerHTML')
        new_item['link'] = post.find_element(By.CLASS_NAME, 'entry-title').find_element(By.TAG_NAME, 'a').get_attribute('href')
        new_item['excerpt'] = post.find_element(By.CLASS_NAME, 'entry-excerpt').get_attribute('innerHTML')
        posts.append(new_item)
    return posts

print(scrape('https://diolinux.com.br/'))