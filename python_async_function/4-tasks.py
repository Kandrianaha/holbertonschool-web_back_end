#!/usr/bin/env python3
"""This module takes the code from wait_n and alter it
to a new function task_wait_n"""
import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns a list of all delays in the order they finished"""
    tasks = [asyncio.create_task(task_wait_random(max_delay)) for _ in range(n)]
    results: List[float] = []
    for coro in asyncio.as_completed(tasks):
        res = await coro
        results.append(res)
    return results
