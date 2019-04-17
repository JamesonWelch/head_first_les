
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

# 1) Set URL assigned to variable
my_url = 'https://www.newegg.com/Video-Cards-Video-Devices/Category/ID-38?Tpk=graphics%20cards'

# 2) Opening connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

# 3) Parse html
page_soup = soup(page_html, "html.parser")

# graps each product from container
containers = page_soup.findAll('div',{'class':'item-container'})

divWithInfo = containers[0].find("div","item-info")

for container in divWithInfo:
    brand = divWithInfo.a.img["title"]

    title_container = divWithInfo.findAll("a", {"class":"item-title"})
    product_name = title_container[0].text

    shipping_container = divWithInfo.findAll('li', {'class':'price-ship'})
    shipping = shipping_container[0].text.strip()

    print('Brand: ' + brand)
    print('Product Name: ' + product_name)
    print('Shipping: ' + shipping)

    
