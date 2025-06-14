from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

def setup_cors(app: FastAPI):
    origins = ["*"]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )