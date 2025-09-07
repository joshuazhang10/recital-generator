import mysql.connector
import json

class PieceToSql:
    def __init__(self):
        self.db = None
        self.__connect__()
        self.test()

    def __connect__(self):
        with open('sql_connection.json', 'r') as file:
            sql_connection_string = json.load(file)
        self.db = mysql.connector.connect(
            host=sql_connection_string["host"],
            user=sql_connection_string["user"],
            password=sql_connection_string["password"]
        )

    def test(self):
        mycursor = self.db.cursor() # type: ignore
        sql = (
            "INSERT INTO thinkpad_db.pieces (Title, Composer, Duration, Notes) VALUES (%s, %s, %s, %s)"
            )
        val = ("Test", "John Composer 2", "00:04:33", "This is a note.")
        mycursor.execute(sql, val)

        self.db.commit() # type: ignore
        
    
if __name__ == "__main__":
    piece_to_sql = PieceToSql()