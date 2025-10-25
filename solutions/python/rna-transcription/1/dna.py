def to_rna(dnastrand):
    d = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    return ''.join([x.replace(x, d.get(x)) for x in dnastrand])