from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class PieceScraper:
    def __init__(self, url):
        '''A class for scraping the pieces from an IMSLP page and adding the pieces to a MySQL database.

        Args:
            url (str): The URL to scrape from.

        '''
        chromedriver_path = "/usr/bin/chromedriver-linux64/chromedriver"
        service = Service(executable_path=chromedriver_path)

        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.url = url
        self.links = []

    def __get_piece_links(self):
        self.driver.get(self.url)

        while True:
            anchor_tags = []
            page_cols = self.driver.find_elements(By.CLASS_NAME, 'fcatcol')   
            for col in page_cols:
                anchors = col.find_elements(By.TAG_NAME, 'a')      
                for anchor in anchors:
                    anchor_tags.append(anchor)
            for anchor_tag in anchor_tags:
                self.links.append(anchor_tag.get_attribute('href'))
                print(anchor_tag.get_attribute('href'))
            try: # Go to next page if applicable
                next_page_outer = self.driver.find_elements(By.CLASS_NAME, 'catpglnksp1')[1]
                next_page = next_page_outer.find_elements(By.TAG_NAME, 'a')[-1]
                next_page.click()
            except:
                break
            if next_page_outer.text.endswith('(no next)'): # Break if last page
                print("Scraping complete.")
                break


def main():
    url = "https://imslp.org/wiki/Category:For_trombone,_orchestra"
    # url = "https://imslp.org/wiki/Category:For_violin,_orchestra"
    trombone_scraper = PieceScraper(url)
    # trombone_scraper.

if __name__ == '__main__':
    main()