# ReactLLLM (React Local LLM)

ReactLLLM is a basic chat application that allows users to interact with a small language model (SLM) running on a local inference server via [LM Studio](https://lmstudio.ai). This project was bootstrapped with [Create React App](www.github.com/facebook/create-react-app). It is intended to be used as a template for building your own chat application and to explore the capabilities of local language models.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a recent version of Node.js installed.
- You have downloaded [LM Studio](https://lmstudio.ai/) and have a Local Inference Server running. LM Studio makes this super easy. I've tested with [openhermes-2.5-mistral-7b.Q5_K_S.gguf](https://huggingface.co/TheBloke/OpenHermes-2.5-Mistral-7B-GGUF)

## Installation

Follow these steps to install and run the app:

1. Clone the repository: `git clone https://github.com/mgd1984/reactlllm.git`
2. Navigate to the project directory: `cd reactlllm`
3. Install the dependencies: `npm install`


## Running the App

To start the development server, run the following command in the project directory: `npm start`

The app will be available at `http://localhost:3000`.

## Usage

To use the application, simply type your message into the user prompt input field and press the "Send" button. The AI assistant will respond with a message in the chat window.

## Features

- User prompt input field: Allows the user to type a message to the AI assistant.
- System prompt input field: Allows the user to type a system prompt for the AI assistant.
- Chat window: Displays the messages from the user and the AI assistant.

![Screenshot](ezgif.com-speed (1).gif)

## Local Inference Server Notes

The local HTTP server created via LM Studio emulates the [OpenAI chat completions API](https://platform.openai.com/docs/guides/text-generation/chat-completions-api) which allows you to use the same code for both local and remote inference.

Both streaming and non-streaming usages are supported.

## What are the minimum hardware / software requirements?
- Apple Silicon Mac (M1/M2/M3) with macOS 13.6 or newer
- Windows / Linux PC with a processor that supports AVX2 (typically newer PCs)
- 16GB+ of RAM is recommended. For PCs, 6GB+ of VRAM is recommended
- NVIDIA/AMD GPUs supported

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