from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from ollama import chat
from ollama import ChatResponse

class PieceInformationGenerator():
    def __init__(self, url):
        '''Generates information fields for a given piece, including the composition date, composer, etc.  
        Also uses AI to generate a description for the given piece.
        '''
        chromedriver_path = r"C:\Program Files\chromedriver-win64\chromedriver.exe"
        service = Service(executable_path=chromedriver_path)

        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.url = url

    def get_piece_information(self) -> str:
        '''Scrapes piece url and returns general information as a string.

        Returns:
            str: Piece information, not cleaned up
        '''  
        self.driver.get(self.url)
        piece_info = self.driver.find_element(By.CLASS_NAME, 'wi_body')
        return piece_info.text

    def generate_description(self, piece_info: str) -> str:
        '''Uses ollama (llama3.1) to generate a description of the given piece.
        '''
        response: ChatResponse = chat(model='llama3.1', messages=[
            {
                'role': 'user',
                'content': f'Generate a description for the given music piece based on the following information, and also use the web to find extra information on the piece. Do not include extraneous information such as "Here is a description of the piece:". Also, avoid "unknown" or blank/empty fields in your response. {piece_info}',
            },
        ])
        try:
            description = response.message.content
        except:
            description = ""
        return description # type: ignore


if __name__ == '__main__':
    test_piece = PieceInformationGenerator(r"https://imslp.org/wiki/Trombone_Concerto_(Tomasi%2C_Henri)")
    piece_info = test_piece.get_piece_information()
    test_piece.generate_description(piece_info)

    