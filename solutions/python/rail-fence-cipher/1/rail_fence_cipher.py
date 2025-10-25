from itertools import cycle, chain


def fence_pattern(rail, size):
    zig = cycle(chain(range(rail), range(rail - 2, 0, -1)))
    return zip(zig, range(size))


def encode(message, rail):
    fence = fence_pattern(rail=rail, size=len(message))
    return "".join(message[i] for _, i in sorted(fence))


def decode(encrypt, rail):
    fence = fence_pattern(rail=rail, size=len(encrypt))
    fence_msg = zip(encrypt, sorted(fence))
    return "".join(char for char, _ in sorted(fence_msg, key=lambda item: item[1][1]))