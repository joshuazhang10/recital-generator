from ollama import chat
from ollama import ChatResponse

class PieceInformationGenerator():
    def __init__(self):
        '''Generates information fields for a given piece, including the composition date, composer, etc.  
        Also uses AI to generate a description for the given piece.
        '''

    def generate_description(self):
        '''Uses ollama (llama3.1) to generate a description of the given piece.
        '''
        piece_info = "Composer 	Grøndahl, Launy\
        Internal Reference Number 	ILG 1\
        Movements/Sections 	3 movements:\
        \
                Moderato assai ma molto maestoso\
                Quasi una Leggenda: Andante grave\
                Finale: Maestoso - Rondo \
        \
        Year/Date of Composition 	1924\
        First Publication 	1924 ca.\
        Dedication 	Vilhelm Aarkrogh\
        Average Duration 	15 minutes\
        Composer Time Period 	Early 20th century\
        Piece Style 	Modern\
        Instrumentation 	trombone, orchestra "
        response: ChatResponse = chat(model='llama3.1', messages=[
            {
                'role': 'user',
                'content': f'Generate a description for the given music piece based on the following information. Also, avoid "unknown" or blank/empty fields in your response. {piece_info}',
            },
        ])
        print(response.message.content)


if __name__ == '__main__':
    test_piece = PieceInformationGenerator()
    test_piece.generate_description()

    