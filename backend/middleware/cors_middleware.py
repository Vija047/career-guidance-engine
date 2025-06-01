from fastapi.middleware.cors import CORSMiddleware
from typing import List

def setup_cors(app, allowed_origins: List[str] = None):
    if allowed_origins is None:
        allowed_origins = [
            "http://localhost:3000",  # React dev server
            "http://localhost:5000",  # Production build
        ]
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["Content-Range", "X-Total-Count"]
    )
