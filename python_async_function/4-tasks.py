#!/usr/bin/env python3
"""This module takes the code from wait_n and alter it
to a new function task_wait_n"""
import asyncio
import random
from typing import List



async def task_wait_random(max_delay: int) -> float:
    """Wait for a random delay between 0 and max_delay and return the delay."""
    delay = random.random() * max_delay
    await asyncio.sleep(delay)
    return delay


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns a list of all delays in the order they finished"""
    """creating a list first"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return results
