import requests
from lxml import etree
import panda as pd
for a in range(1,101):
	res = requests.get("http://comic.sfacg.com/Catalog/default.aspx", {'PageIndex': a})
# print res.text[1:1000]

# res.encoding='utf8'
	root = etree.fromstring(res.content, etree.HTMLParser(encoding='utf8'))
	for x in root.xpath('//*[@id="aspnetForm"]/table[3]/tr/td/ul/li[2]/strong/a'): print(x.text)




# //*[@id="aspnetForm"]/table[3]/tbody/tr/td/ul[1]/li[2]/strong/a
# //*[@id="aspnetForm"]/table[3]/tbody/tr/td/ul[2]/li[2]/strong/a

# //*[@id="aspnetForm"]/table[3]/tbody/tr/td/ul[4]/li[2]/strong/a
# //*[@id="aspnetForm"]/table[3]/tbody/tr/td/ul[6]/li[2]/strong/a