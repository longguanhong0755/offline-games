from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import threading, webbrowser, time, os

ROOT = Path(__file__).resolve().parent
YORG_PORT = 8766
YORG3_PORT = 8767
IDLE_MINING_PORT = 8768

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

class QuietServer(ThreadingHTTPServer):
    daemon_threads = True
    def handle_error(self, request, client_address):
        pass

def serve(port, directory):
    handler = partial(QuietHandler, directory=str(directory))
    httpd = QuietServer(('localhost', port), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd

if __name__ == '__main__':
    os.chdir(ROOT)
    servers = [
        serve(YORG_PORT, ROOT / 'yorg.io'),
        serve(YORG3_PORT, ROOT / 'yorg3.io'),
        serve(IDLE_MINING_PORT, ROOT / 'idle-mining-empire'),
    ]
    urls = [
        f'http://localhost:{YORG_PORT}/',
        f'http://localhost:{YORG3_PORT}/',
        f'http://localhost:{IDLE_MINING_PORT}/',
    ]
    print('Offline game servers started')
    for url in urls:
        print(url)
    print('Close this window to stop the servers.')
    for url in urls:
        webbrowser.open(url)
    try:
        while True:
            time.sleep(3600)
    except KeyboardInterrupt:
        for s in servers:
            s.shutdown()
