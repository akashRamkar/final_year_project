from flask import Flask, request, jsonify
TextModel="./myText_sum.ipynb";
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from the request
    data = request.json

    # Process the data using your pre-trained model
    result = {TextModel}.predict(data)

    # Return the result as JSON
    return jsonify({'result': result})
if __name__ == '__main__':
    app.run()
