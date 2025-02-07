from flask import Flask, render_template, jsonify
import requests
from requests.auth import HTTPBasicAuth

app = Flask(__name__)

def fetch_pricing_data():
    """
    Attempt to fetch pricing data from the Arrow API.
    If the call fails, return dummy data with three pricing options.
    """
    url = "https://xsp.arrow.com/index.php/api"
    api_key = "LoCRmXCRNzWCryzRZzDPBfsXscTLWrzi"
    api_secret = "U9TdOVsnQNvGNAWCM"
    
    try:
        response = requests.get(url, auth=HTTPBasicAuth(api_key, api_secret))
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print("Error fetching data from API:", e)
        # Dummy data for demonstration
        data = {
            "licenses": [
                {
                    "name": "Microsoft E3",
                    "pricing": {
                        "monthly": 32.0,
                        "annual": 350.0,
                        "three_year": 900.0
                    }
                },
                {
                    "name": "Microsoft E5",
                    "pricing": {
                        "monthly": 50.0,
                        "annual": 550.0,
                        "three_year": 1400.0
                    }
                }
            ]
        }
    return data

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/pricing")
def api_pricing():
    data = fetch_pricing_data()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)