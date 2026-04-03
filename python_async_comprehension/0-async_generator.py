#!/usr/bin/env python3
"""This module writes a coroutine called async_geertor
that takes no arguments"""
import random
import asyncio


async def async_generator():
    """async generator that loops 10 times
    waiting 1 second each time"""
    for _ in range(10):
        #waits for 1 second
        await asyncio.sleep(1)
        #yield random bumber between 1 to 10
        yield random.randint(0, 10)
