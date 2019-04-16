def search4letters(phrase, letters='aeiou'):
    """Return a set of 'letters' found in phrase"""
    return ser(letters).intersection(set(phrase))
