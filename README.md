# ReactLLLM (React Local LLM)

ReactLLM is a chat application that allows users to interact with a local language model (LLM). It uses LM Studio and runs a Mistral 7b fine-tuned model. This project was bootstrapped with [Create React App](www.github.com/facebook/create-react-app). It is intended to be used as a template for building your own chat application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a recent version of Node.js installed.
- You have downloaded [LM Studio](https://lmstudio.ai/) and have a Local Inference Server running. Instructions here: [LM Studio Local Inference Server](https://docs.lmstudio.ai/quickstart/local-inference-server)
- You have a Local Inference Server running a local LLM model. LM Studio makes this super easy. I've tested with [openhermes-2.5-mistral-7b.Q5_K_S.gguf](https://huggingface.co/TheBloke/OpenHermes-2.5-Mistral-7B-GGUF)

## Installation

Follow these steps to install and run the app:

1. Clone the repository: `git clone https://github.com/mgd1984/reactlllm.git`
2. Navigate to the project directory: `cd reactllm`
3. Install the dependencies: `npm install`

## Configuration

Start a local HTTP server that behaves like OpenAI's API.

Request and response formats follow OpenAI's Chat Completion API.

Both streaming and non-streaming usages are supported.

## What are the minimum hardware / software requirements?
Apple Silicon Mac (M1/M2/M3) with macOS 13.6 or newer
Windows / Linux PC with a processor that supports AVX2 (typically newer PCs)
16GB+ of RAM is recommended. For PCs, 6GB+ of VRAM is recommended
NVIDIA/AMD GPUs supported

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