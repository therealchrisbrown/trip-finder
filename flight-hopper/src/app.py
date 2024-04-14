from flask import Flask, request, jsonify
from flask_cors import CORS
from googlesearch import search_flights
import requests

app = Flask(__name__)
CORS(app)

@app.route('/search_flights', methods=['POST'])
def search_flights():
    # Lesen Sie die Benutzereingaben aus dem Request-Body
    data = request.get_json()
    origin = data['origin']
    destination = data['destination']
    travel_dates = data['travel_dates']
    budget = data['budget']

    # Implementieren Sie hier die Logik zur Suche nach günstigen Flugkombinationen
    flight_options = search_google_flights(origin, destination, travel_dates, budget)

    # Geben Sie die Ergebnisse als JSON-Antwort zurück
    return jsonify(flight_options)

def search_google_flights(origin, destination, travel_dates, budget):
    # Rufen Sie die Google Flights-API auf, um Flugoptionen zu suchen
    flight_options = search_flights(
        origin=origin,
        destination=destination,
        outbound_date=travel_dates['outbound'],
        inbound_date=travel_dates['inbound'],
        max_price=budget
    )

    # Verarbeiten und formatieren Sie die Ergebnisse
    formatted_options = []
    for option in flight_options:
        formatted_option = {
            'outbound_flight': option['outbound'],
            'inbound_flight': option['inbound'],
            'total_price': option['price']
        }
        formatted_options.append(formatted_option)

    return formatted_options

if __name__ == '__main__':
    app.run(debug=True)