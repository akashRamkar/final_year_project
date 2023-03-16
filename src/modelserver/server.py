import pickle

# load the model from a file
with open('C:\WebDevelopment\FinalYearProject_redesign\chatapp', 'rb') as file:
    model = pickle.load(file)



    # from model import summarize_text  # replace with the name of your text summarization module
from flask import Flask, jsonify, request

app=Flask(__name__)


#members api route

@app.route("/members")
def  members():
        return {"members":["member1","member2","member3"]}






@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data['text']
    summary = summarize_text(text)  # replace with the name of your text summarization function
    return jsonify({'summary': summary})

if __name__ =="__main__":
    app.run(debug=True)
