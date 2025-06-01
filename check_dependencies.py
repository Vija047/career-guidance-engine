import pkg_resources
import sys

required = {
    'scikit-learn': 'sklearn',
    'sentence-transformers': 'sentence_transformers',
    'transformers': 'transformers',
    'fastapi': 'fastapi',
    'uvicorn': 'uvicorn'
}

def check_dependencies():
    missing = []
    for package, import_name in required.items():
        try:
            __import__(import_name)
        except ImportError:
            missing.append(package)
    
    if missing:
        print("Missing dependencies found. Please install:")
        print(f"pip install {' '.join(missing)}")
        sys.exit(1)
    print("All dependencies installed successfully!")

if __name__ == "__main__":
    check_dependencies()
