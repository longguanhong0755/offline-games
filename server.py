from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import json
import os
import threading
import time
import webbrowser

ROOT = Path(__file__).resolve().parent
REGISTRY = ROOT / 'games.json'

DEFAULT_GAMES = [
    {'name': 'YORG.io 经典版', 'slug': 'yorg.io', 'directory': 'yorg.io', 'port': 8766, 'enabled': True},
    {'name': 'YORG.io 3', 'slug': 'yorg3.io', 'directory': 'yorg3.io', 'port': 8767, 'enabled': True},
    {'name': 'Idle Mining Empire', 'slug': 'idle-mining-empire', 'directory': 'idle-mining-empire', 'port': 8768, 'enabled': True},
    {'name': 'Hextris', 'slug': 'hextris-io', 'directory': 'hextris-io', 'port': 8770, 'enabled': True},
]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()


class QuietServer(ThreadingHTTPServer):
    daemon_threads = True

    def handle_error(self, request, client_address):
        pass


def load_games():
    if not REGISTRY.exists():
        return DEFAULT_GAMES
    try:
        data = json.loads(REGISTRY.read_text(encoding='utf-8'))
        games = data.get('games', []) if isinstance(data, dict) else data
        if not isinstance(games, list):
            raise ValueError('games must be a list')
        return games
    except Exception as exc:
        print(f'games.json 读取失败，使用内置列表：{exc}')
        return DEFAULT_GAMES


def serve(port, directory):
    handler = partial(QuietHandler, directory=str(directory))
    httpd = QuietServer(('localhost', port), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    os.chdir(ROOT)
    servers = []
    urls = []
    used_ports = set()

    for game in load_games():
        if not isinstance(game, dict) or game.get('enabled', True) is False:
            continue
        try:
            name = str(game.get('name') or game.get('slug') or '未命名游戏')
            port = int(game['port'])
            directory = (ROOT / str(game['directory'])).resolve()
            if not directory.is_relative_to(ROOT.resolve()):
                raise ValueError('目录超出项目根目录')
            if directory == ROOT.resolve() or not directory.is_dir():
                raise ValueError('游戏目录不存在')
            if port in used_ports:
                raise ValueError(f'端口重复：{port}')
            httpd = serve(port, directory)
        except Exception as exc:
            print(f'跳过 {game!r}：{exc}')
            continue
        used_ports.add(port)
        servers.append(httpd)
        url = f'http://localhost:{port}/'
        urls.append((name, url))
        print(f'{name}: {url}')

    if not servers:
        print('没有可启动的游戏。请检查 games.json。')
        return

    print('离线游戏服务器已启动。关闭此窗口即可停止。')
    for _, url in urls:
        webbrowser.open(url)

    try:
        while True:
            time.sleep(3600)
    except KeyboardInterrupt:
        for server in servers:
            server.shutdown()


if __name__ == '__main__':
    main()
