import mysql.connector
import json
from piece_information_generator import PieceInformationGenerator

class PieceToSql:
    def __init__(self, url: str):
        self.url = url
        self.db = None

        piece_information, piece_description = self._get_piece_information()
        self.__connect()
        self.add_to_database(piece_information, piece_description)

    def _get_piece_information(self) -> tuple[str, str]:
        piece_information_generator = PieceInformationGenerator(self.url)
        piece_info = piece_information_generator.get_piece_information()
        piece_description = piece_information_generator.generate_description(piece_info)
        return piece_info, piece_description # type: ignore
        

    def __connect(self):
        '''Helper function for connecting to the SQL database.
        '''        
        with open('sql_connection.json', 'r') as file:
            sql_connection_string = json.load(file)
        self.db = mysql.connector.connect(
            host=sql_connection_string["host"],
            user=sql_connection_string["user"],
            password=sql_connection_string["password"]
        )

    def add_to_database(self, piece_information, piece_description):       
        mycursor = self.db.cursor() # type: ignore
        sql = (
            "INSERT INTO thinkpad_db.pieces (Title, Composer, Duration, Notes) VALUES (%s, %s, %s, %s)"
            )
        val = ("Test", "John Composer 2", "00:04:33", "This is a note.")
        mycursor.execute(sql, val)

        self.db.commit() # type: ignore
        
    
if __name__ == "__main__":
    piece_to_sql = PieceToSql()