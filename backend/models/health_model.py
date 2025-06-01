from pydantic import BaseModel
from typing import Dict

class HealthStatus(BaseModel):
    status: str
    timestamp: str
    uptime_seconds: float
    memory_usage_percent: float

class ServiceStatus(BaseModel):
    services: Dict[str, str]
    version: str
w