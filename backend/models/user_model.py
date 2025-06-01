from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    board: str
    interests: list[str]w