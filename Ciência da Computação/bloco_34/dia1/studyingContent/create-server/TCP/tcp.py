from socketserver import TCPServer, StreamRequestHandler

# encoding: utf-8
# encoding: iso-8859-1
# encoding: win-1252

class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        print(self.rfile.readline().decode("UTF-8"))

server_address = ("localhost", 8080)

with TCPServer(server_address, TCPHandler) as server:
    print('Server on')
    server.serve_forever()
