from flask import Flask, request, jsonify
import os
from tensorflow.keras.models import load_model
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

upload_folder = 'uploads'
os.makedirs(upload_folder, exist_ok=True)
app.config['UPLOAD_FOLDER'] = upload_folder

models = {}
models['urban'] = load_model("./models/urban_model.h5")
models['barrenland'] = load_model("./models/barrenland_model.h5")
models['grassland'] = load_model("./models/grassland_model.h5")
models['agriland'] = load_model("./models/agri_model.h5")
img_path = "./results/result.png"

def predict_from_path(model, image_path):
    # Load and preprocess the black-and-white image
    img = load_img(image_path, target_size=(256, 256), color_mode='grayscale')
    img_array = img_to_array(img) / 255.0  # Normalize to [0, 1]
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = np.expand_dims(img_array, axis=-1)  # Add channel dimension

    # Predict the colorized image
    predicted_color_image = model.predict(img_array)
    predicted_color_image = np.squeeze(predicted_color_image)  # Remove batch dimension

    # Display the results
    plt.figure(figsize=(15, 10))
    plt.imshow(predicted_color_image)
    plt.plot()
    plt.axis("off")
    plt.savefig(img_path)

@app.route("/", methods=['GET'])
def home():
    return jsonify({"message": "Hello from Flask"})

@app.route("/main", methods=["POST"])
def ai():
    if 'geo' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    if 'category' not in request.form:
        return jsonify({"error": "No category part"}), 400

    file = request.files['geo']
    category = request.form['category']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and category:
        filename = file.filename
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        if category == '0':
            predict_from_path(models["barrenland"], file_path)
        elif category == '1':
            predict_from_path(models["agri"], file_path)
        elif category == '2':
            predict_from_path(models["grassland"], file_path)
        elif category == '3':
            predict_from_path(models["urban"], file_path)
        return jsonify({"filename": filename, 'path': file_path, "geo": img_path}), 200

if __name__ == '__main__':
    app.run(debug=True, port=8000)
