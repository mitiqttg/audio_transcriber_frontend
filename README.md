My mini application using [OpenAI Transcriptions](https://docs.spring.io/spring-ai/reference/api/audio/transcriptions/openai-transcriptions.html) to transcribe input audio file to text!

Frontend: React, TailwindCSS
Backend: Spring Boot, Spring AI

![Transcriber](./public/myTranscriber.gif)

***How to use:*** 
    - Using audio recorder on your computer/laptop or a text to audio mp3 convertor like [TTSMP3](https://ttsmp3.com/). Save the file on your machine
    - Click `Choose File` to upload the file
    - Click `Upload and Transcribe`, wait and check the result below.

***How it works:***
    Sending API request to OpenAI server for transcription, wait for response and populate data to the frontend

***How to run on your local machine:***
    - **Step 1:** Go to https://start.spring.io/ for initializing the project. Choose Maven - Java - Spring Boot [version] (not SNAPSHOT) - Jar - Java [version]. Let's have the name of the Project `audio-transcriber` for consistency with the configurations. Choose `ADD DEPENDENCIES`: Spring Web + OpenAI. Then click `GENERATE`
    - **Step 2:** Clone the audio_transcribe (backend) to your local machine. Open it in your IDE (I used Intellij). Delete the current content under `src/main/java` and copy the folder `com.audio.demo` to there.
    - **Step 3:** Under `main/resources`, copy this code to the `application.properties` file (remember to retrieve your personal API key from your OpenAI account and paste it to `[YOUR_OPENAI_API_KEY]` + check the balance in `Billing` 💸💸💸)
  
```
spring.application.name=audio-transcribe
spring.ai.openai.api-key=[YOUR_OPENAI_API_KEY]
spring.ai.openai.audio.transcription.base-url=https://api.openai.com
spring.ai.openai.audio.transcription.options.model=whisper-1
spring.ai.openai.audio.transcription.options.response-format=json
```

    - **Step 4:** Choose run AudioTranscribeApplication

    - **Step 5:** Clone the frontend to your machine. Open the terminal in your IDE, run `npm install`. Make sure you install axios and TailwindCSS properly. Then run `npm run dev` to deploy the app locally at port `5173`
          

