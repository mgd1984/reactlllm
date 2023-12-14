# ReactLLM

ReactLLM is a chat application that allows users to interact with an AI assistant. It uses LM Studio and runs a Mistral 7b fine-tuned model.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a recent version of Node.js installed.
- You have access to LM Studio and have a Mistral 7b fine-tuned model available.

## Installation

Follow these steps to install and run the app:

1. Clone the repository: `git clone https://github.com/yourusername/your-app-name.git`
2. Navigate to the project directory: `cd your-app-name`
3. Install the dependencies: `npm install`

## Configuration

Before you can run the app, you need to configure it to use your Mistral 7b fine-tuned model:

1. In LM Studio, navigate to your Mistral 7b fine-tuned model and copy its ID.
2. In the project directory, create a new file named `.env`.
3. In the `.env` file, add the following line: `REACT_APP_MODEL_ID=your-model-id`
    Replace `your-model-id` with the ID of your Mistral 7b fine-tuned model.

## Running the App

To start the development server, run the following command in the project directory: `npm start`

The app will be available at `http://localhost:3000`.

## Usage

To use the application, simply type your message into the user prompt input field and press the "Send" button. The AI assistant will respond with a message in the chat window.

## Features

- User prompt input field: Allows the user to type a message to the AI assistant.
- System prompt input field: Allows the user to type a system prompt for the AI assistant.
- Chat window: Displays the messages from the user and the AI assistant.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the [License Name]. For more details, see the [LICENSE](./LICENSE) file.

## Contact

For any inquiries or feedback, please contact [Your Email Address].