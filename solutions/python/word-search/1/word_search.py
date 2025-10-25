from copy import copy


class Point(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return 'Point({}:{})'.format(self.x, self.y)

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Point(self.x - other.x, self.y - other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __ne__(self, other):
        return not (self == other)


# points on cartesian plan enclosing the word grid
PLANE_LIMITS = (
    Point(1, 0), Point(1, -1), Point(1, 1), Point(-1, -1),
    Point(0, -1), Point(0, 1), Point(-1, 1), Point(-1, 0)
)


class WordSearch(object):
    def __init__(self, puzzle):
        self.rows = puzzle.split()
        self.width = len(self.rows[0])
        self.height = len(self.rows)

    def search(self, word):
        positions = (Point(x, y) for x in range(self.width) for y in range(self.height))
        for pos in positions:
            for plane_limit in PLANE_LIMITS:
                result = self.find_word(word=word, position=pos, plane_limit=plane_limit)
                if result:
                    return result
        return None

    def find_word(self, word, position, plane_limit):
        curr_position = copy(position)
        for let in word:
            if self.find_char(coord_point=curr_position) != let:
                return
            curr_position += plane_limit
        return position, curr_position - plane_limit

    def find_char(self, coord_point):
        if coord_point.x < 0 or coord_point.x >= self.width:
            return
        if coord_point.y < 0 or coord_point.y >= self.height:
            return
        return self.rows[coord_point.y][coord_point.x]