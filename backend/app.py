from urllib.parse import urlencode

import requests

from flask import Flask, jsonify, redirect
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for the frontend's origin (adjust port if necessary)
CORS(app, origins=["http://localhost:3000"])


@app.route('/poop', methods=['GET'])
def get_index():
    return jsonify({"message": "poop"})



if __name__ == '__main__':
    # Run the Flask app on port 5000
    app.run(debug=True, port=5000)