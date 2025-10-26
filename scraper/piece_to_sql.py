import mysql.connector
import json
from piece_information_generator import PieceInformationGenerator

class PieceToSql:
    def __init__(self, url: str):
        self.url = url
        self.db = None

        piece_information, piece_description = self._get_piece_information()
        self._connect()
        self.add_to_database(piece_information, piece_description)

    def _get_piece_information(self) -> tuple[dict, str]:
        piece_information_generator = PieceInformationGenerator(self.url)
        piece_info = piece_information_generator.get_piece_information()
        piece_description = piece_information_generator.generate_description(piece_info)
        return piece_info, piece_description # type: ignore

    def _connect(self):
        '''Helper function for connecting to the SQL database.
        '''        
        with open('sql_connection.json', 'r') as file:
            sql_connection_string = json.load(file)
        self.db = mysql.connector.connect(
            host=sql_connection_string["host"],
            user=sql_connection_string["user"],
            password=sql_connection_string["password"]
        )

    def add_to_database(self, piece_information: dict, piece_description: str):    
        mycursor = self.db.cursor() # type: ignore
        sql = (
            "INSERT INTO thinkpad_db.pieces (Title, Composer, Duration, Notes) VALUES (%s, %s, %s, %s)"
            )
        title = piece_information.get('Work Title', piece_information.get('Alternative Title', ''))
        composer = piece_information.get('Composer', '')
        # Duration is added as VARCHAR(255) --> need to convert for future filtering
        duration = piece_information.get('Average Duration', '') 
        notes = piece_description
        val = (title, composer, duration, notes)
        mycursor.execute(sql, val)

        try:
            self.db.commit() # type: ignore
            print(f"{title} successfully added to database.")
        except Exception as e:
            print(f"Failed to add {title} to database: {e}")
        
    
if __name__ == "__main__":
    url = r"https://imslp.org/wiki/Cavatine%2C_Op.144_(Saint-Sa%C3%ABns%2C_Camille)"
    piece_to_sql = PieceToSql(url)

