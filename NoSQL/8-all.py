#!/usr/bin/env python3
"""This module list all documents in Python"""

def list_all(mongo_collection):
	"""List all documents in Python"""
	return list(mongo_collection.find())

if __name__ == '__main__':
	list_all(mongo_collection)
