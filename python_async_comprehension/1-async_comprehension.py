#!/usr/bin/env python3
"""This module imports async_generator then writes a coroutine"""
import asyncio
import random
from typing import Generator, List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine that collects 10 random
    numbers from async generator"""
    result = [i async for i in async_generator()]
    return result
