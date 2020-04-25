from flask import Flask, request
from flask import g
from flask import request
import json
from src.database import Database
from flask_cors import cross_origin

app = Flask(__name__, static_url_path="",
            static_folder="static")


# Function to call to get connection to database
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


# Automatic close connection to database
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


# All api route starts with /api
@app.route('/api/boardGames')
def get_all():
    boardgames = get_db().get_boardgames()
    boardgames_json = json.dumps(boardgames)
    return boardgames_json


@app.route('/api/boardGame/<identifiant>')
@cross_origin()
def get_boardgame_by_id(identifiant):
    boardgame = get_db().get_boardgame_by_id(identifiant)
    boardgame_json = json.dumps(boardgame)
    return boardgame_json


@app.route('/api/searchTitle', methods=['GET'])
@cross_origin()
def get_boardgame_by_title():
    query = request.args.get('search')
    boardgame = get_db().get_boardgame_by_title(query)
    boardgame_json = json.dumps(boardgame)
    return boardgame_json


@app.route('/api/search', methods=['GET'])
@cross_origin()
def find_boardgames():
    min_player = request.args.get('min_player')
    max_player = request.args.get('max_player')
    min_time = request.args.get('min_time')
    max_time = request.args.get('max_time')
    min_age = request.args.get('min_age')

    games = get_db().search_boardgames(min_player, max_player, min_time, max_time,
                                       min_age)
    games_json = json.dumps(games)
    return games_json


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
