#!/usr/bin/env python3
"""This module imports wait_random and writes an async routine
called wait_n"""
import asyncio


wait_random = __import__('0-basic_async_syntax.py').wait_random


async def wait_n(n: int, max_delay:int) -> List[float]:
    """spawns wait_random n times with the specified max_delay"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
