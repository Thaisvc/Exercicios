import requests
response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text) 

response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"{user['login']} {user['url']}")
