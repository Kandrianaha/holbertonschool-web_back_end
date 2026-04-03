#!/usr/bin/env python3
"""This module runs four parallel comprehensions"""
import asyncio
import random
import time
from typing import Generator, List


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_time() -> float:
    """Executes async_comprehension 4 times in parallel"""
    start = time.perf_counter()

    # Runs four times
    await asyncio.gather(
        async_comprehension,
        async_comprehension,
        async_comprehension,
        async_comprehension,
    )

    end = time.perf_counter()
    total_time = end - start
    return total_time
