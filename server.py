from flask import Flask, jsonify

app = Flask(__name__)

upload_folder = 'uploads'
os.makedir(upload_folder, exist_ok=True)
app.config['UPLOAD_FOLDER'] = upload_folder

@app.route("/", methods=['GET'])
def home():
    return jsonify({"message": "Hello from Flask"})

@app.route("/main", methods=["POST"])
def ai():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = file.filename
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        return jsonify({"filename": filename, 'path': file_path}). 200

if __name__ == '__main__':
    app.run(debug=True, port=8000)
