from selenium import webdriver
from selenium.webdriver.common.by import By

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

response = firefox.get("https://quotes.toscrape.com/")

search_quest = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')