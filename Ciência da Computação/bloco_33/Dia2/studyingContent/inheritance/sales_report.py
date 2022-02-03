from abc import ABC, abstractmethod
from csv import DictWriter
import gzip
import json
from zipfile import ZipFile

class ZipCompressor():
    '''Compressors will have fixed at the files storing file local, so let define it the constructors'''
    def __init__(self, filepath='./'):
        self.filepath = filepath

    def compress(self, file_name):
        with ZipFile(file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor():
    def __init__(self, filepath='./'):
        self.filepath = filepath

    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    def __init__(self, export_file, compressor=GzCompressor()):
        self.export_file = export_file
        self.compressor = compressor

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
    
    FILE_EXTENSION = ''

    def get_export_file_name(self):
        # here it used the class atribute
        # Will make more sente in inheriting classes!
      return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())
    
    # def compress(self):
    #     binary_content = json.dumps(self.build()).encode('utf-8')
    #     #Here it have a problema, cause the file that will be created is with extensions .gz, but what if it needs create with extension .zip?
    #     # Change the extension bellow can't possible, cause it will compromise others places that are using this method, so what we can do to fix this? 
    #     with gzip.open(self.export_file + '.gz', 'wb') as compressed_file:
    #         compressed_file.write(binary_content)

    @abstractmethod
    def serialize(self):
        raise NotImplementedError
    
    # @abstractmethod
    # def get_length(self):
    #     raise NotImplementedError


class SalesReportJSON(SalesReport):
    # It aren't reimplemented the get_export_file_name
    # as it use a class attribute to get the extension
    # only redefine the attrbute already will make it result!
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open(self.get_export_file_name(), 'w') as file:
            json.dump(self.build(), file)

    def get_length():
        return 4

class SalesReportCSV(SalesReport):
    # def serialize(self):
    #     with open(self.export_file + '.csv', 'w') as file:
    #         json.dump(self.build(), file)

    # Resolution copy from the template
    def serialize(self):
        with open(self.get_export_file_name(), 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)
    pass

# test = SalesReportJSON('test')
# test.serialize()
# it isn't working
# print(test.get_length())

# test2 = SalesReportCSV('test2')
# test2.serialize()

# Test implementation
relatorio_de_compras = SalesReportJSON('meu_relatorio_1')
relatorio_de_vendas = SalesReportJSON('meu_relatorio_2', ZipCompressor())

relatorio_de_compras.compress()
relatorio_de_vendas.compress()