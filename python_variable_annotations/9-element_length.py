#!/usr/bin/env python3
"""This module annotates the below function's
parameters and return values with the appropriate types"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples containing each element and its length"""
    return [(i, len(i)) for i in lst]
