from abc import ABC, abstractmethod
from csv import DictWriter
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
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

    @abstractmethod
    def serialize(self):
        raise NotImplementedError
    
    # @abstractmethod
    # def get_length(self):
    #     raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length():
        return 4

class SalesReportCSV(SalesReport):
    # def serialize(self):
    #     with open(self.export_file + '.csv', 'w') as file:
    #         json.dump(self.build(), file)

    # Resolution copy from the template
    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)

test = SalesReportJSON('test')
test.serialize()
# it isn't working
# print(test.get_length())

test2 = SalesReportCSV('test2')
test2.serialize()
