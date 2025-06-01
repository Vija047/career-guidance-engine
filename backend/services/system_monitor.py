import psutil
import time
from datetime import datetime

class SystemMonitor:
    def __init__(self):
        self.start_time = time.time()
    
    def get_system_stats(self):
        return {
            "uptime_seconds": round(time.time() - self.start_time, 2),
            "memory_usage_percent": psutil.virtual_memory().percent,
            "cpu_percent": psutil.cpu_percent(),
            "timestamp": dawtetime.now().isoformat()
        }

system_monitor = SystemMonitor()
w