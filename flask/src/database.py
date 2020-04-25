import sqlite3


class Database:
    columns_of_interest = '"row_names", "details.name", "details.description", \
    "details.minplayers", "details.maxplayers", "details.minplaytime", \
    "details.maxplaytime", "details.minage", "details.playingtime", "details.yearpublished", \
    "attributes.boardgamecategory", "attributes.boardgamedesigner", \
    "attributes.boardgamepublisher", "attributes.boardgamemechanic"'
    smaller_COI = '"row_names", "details.name", "details.minplayers", "details.maxplayers",\
    "details.playingtime", "details.yearpublished"'

    def __init__(self):
        self.connection = None

    def to_dict(self, dict_name, cursor):
        return [dict(dict_name) for dict_name in cursor.fetchall()]

    def get_connection(self):
        if self.connection is None:
            self.connection = sqlite3.connect('src/db/database.sqlite')
            self.connection.row_factory = sqlite3.Row
        return self.connection

    def disconnect(self):
        if self.connection is not None:
            self.connection.close()
            self.connection = None

    def get_boardgames(self):
        cursor = self.get_connection().cursor()
        cursor.execute("SELECT " + self.smaller_COI + " FROM BoardGames")
        return self.to_dict("boardgames", cursor)

    def get_boardgame_by_id(self, identifiant):
        cursor = self.get_connection().cursor()

        # concat safe parce que nom de colonne et parce que 100% controlé par nous, pas de user input
        cursor.execute("SELECT " + self.columns_of_interest +
                       " FROM BoardGames WHERE row_names = ?", [identifiant])
        return self.to_dict("boardgame", cursor)

    def get_boardgame_by_title(self, title):
        cursor = self.get_connection().cursor()

        # concat safe parce que nom de colonne et parce que 100% controlé par nous, pas de user input
        cursor.execute("SELECT " + self.columns_of_interest +
                       " FROM BoardGames WHERE \"details.name\" LIKE ?", ["%" + title + "%"])
        return self.to_dict("boardgame", cursor)

    def search_boardgames(self, min_player, max_player, min_time, max_time, min_age):
        cursor = self.get_connection().cursor()

        request = "SELECT " + self.columns_of_interest + " FROM BoardGames WHERE "
        list_to_fill = []

        if min_player != 'null':
            request += '\"details.minplayers\" >= ? AND '
            list_to_fill.append(min_player)

        if max_player != 'null':
            request += '\"details.maxplayers\" <= ? AND '
            list_to_fill.append(max_player)

        if min_time != 'null':
            request += '\"details.minplaytime\" >= ? AND '
            list_to_fill.append(min_time)

        if max_time != 'null':
            request += '\"details.maxplaytime\" <= ? AND '
            list_to_fill.append(max_time)

        if min_age != 'null':
            request += '\"details.minage\" >= ? AND '
            list_to_fill.append(min_age)

        cursor.execute(request[:-4], list_to_fill)
        return self.to_dict("boardgames", cursor)
