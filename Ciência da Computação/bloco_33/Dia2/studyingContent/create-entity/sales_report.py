import json


class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'

    def build(self):
      # Here we set the logic for entity 'self create', in other words, create a printing report. For simplicity, lets omit this logic at examples 
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    def serialize(self):
        # Lets generate, here, our report in JSON format
        with open(self.export_file, 'w') as file:
            json.dump(self.build(), file)
