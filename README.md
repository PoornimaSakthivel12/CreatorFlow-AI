# CreatorFlow AI: Your Creative Partner

Build a complete production-style full-stack web application called:

CREATORFLOW AI

Tagline: "Create more. Transform anything."

IMPORTANT:

Do NOT build a static demo, fake dashboard, or simple UI mockup.

Build a real AI-powered website architecture with frontend, backend, database, authentication, persistent chat history, file handling, and real Gemini AI integration.

The website must feel like a real modern AI product similar in usability to ChatGPT, Gemini, Bolt, and modern creator tools, but DO NOT copy their branding or exact UI.

==================================================

1. AUTHENTICATION — EMAIL FIRST-TIME OTP

==================================================

Create a modern login page.

Initial screen:

CreatorFlow AI logo

"Welcome to CreatorFlow AI"

"Create, transform and publish with AI."

Email input:

"Enter your email"

Button:

"Continue with email"

FIRST LOGIN:

1. User enters email.

2. Send a real 6-digit OTP to the exact email entered by the user.

3. Show OTP verification page.

4. User enters OTP.

5. Verify OTP.

6. Create the user account.

7. Login successfully.

8. Redirect directly into the CreatorFlow AI chat workspace.

OTP requirements:

- Real email delivery.

- 6 digit OTP.

- OTP expires after 10 minutes.

- Maximum 5 incorrect attempts.

- Resend OTP with cooldown.

- Never expose email provider credentials or API keys in frontend.

- Store OTP securely on backend.

- Never hardcode a fake OTP.

RETURNING USER:

If the email has already been verified previously:

- Do NOT ask for OTP again.

- Login directly after email verification/session recognition.

- Maintain the user's existing chats and projects.

IMPORTANT:

Do not break or replace an already working email OTP implementation if one exists.

Reuse the existing authentication system when possible.

Use secure authentication/session handling.

==================================================

2. AFTER LOGIN — DIRECT CHAT EXPERIENCE

==================================================

After successful login:

DO NOT show a traditional admin dashboard.

Open directly into the main AI chat workspace.

The experience should feel like a real AI assistant.

Top area:

CreatorFlow AI logo

User profile/email

Settings

Logout

Main screen:

"Welcome to CreatorFlow AI 👋"

"What do you want to create today?"

Then a large ChatGPT/Gemini-style conversation area.

Bottom:

Large rounded AI chat composer.

Placeholder:

"Message CreatorFlow AI..."

The user can ask anything.

Examples:

"What is Artificial Intelligence?"

"Explain DBMS normalization simply."

"Indha PDF la important points eduthu notes kudu."

"Indha topic ku 10 slide PPT create pannu."

"Give me 10 Instagram reel ideas for education."

"Indha video-va short reel ah convert pannu."

"Create a website for my startup."

The AI must actually answer using the real Gemini API.

Do NOT hardcode sample answers.

==================================================

3. SIDEBAR — CHAT HISTORY

==================================================

Create a beautiful collapsible sidebar.

Sidebar:

CreatorFlow AI logo

+ New Chat

Search chats

Recent Chats

Today

Yesterday

Previous

Each chat must show its actual title.

Example:

DBMS Normalization

AI PPT Creation

Cybersecurity Notes

Instagram Reel Ideas

Startup Website

When the user clicks a previous chat:

- Open that exact conversation.

- Show complete previous messages.

- User can continue chatting from where they stopped.

Persist chats in the database.

Chat features:

- New Chat

- Rename Chat

- Delete Chat

- Pin Chat

- Search Chat

- Continue previous Chat

Automatically generate chat title from the first meaningful user message.

Example:

User:

"Explain machine learning"

Chat title:

"Machine Learning Explanation"

User:

"Create PPT about cybersecurity"

Chat title:

"Cybersecurity PPT"

Never use fake/static chat history.

Every user's chats must be isolated by authenticated user ID/email.

==================================================

4. MAIN CHAT UI

==================================================

Make the chat UI modern and premium.

User messages:

Right aligned.

AI messages:

Left aligned.

AI avatar:

CreatorFlow AI icon.

AI response actions:

- Copy

- Regenerate

- Continue

- Like

- Dislike

Show:

- Loading animation

- Typing indicator

- Error states

- Retry

AI should support:

English

Tamil

Tanglish

Examples:

"Indha topic ah simple ah explain pannu"

"Enakku exam notes venum"

"5 mark answer mari kudu"

"Idha professional English la convert pannu"

The AI should naturally understand these requests.

==================================================

5. FEATURE ICONS BELOW CHAT COMPOSER

==================================================

IMPORTANT:

Before the user starts chatting, feature icons must be visible below/inside the chat composer.

Create a horizontally scrollable modern tool bar.

Icons + labels:

📎 Attach

📚 Notes

📊 PPT

📕 PDF

📄 Docs

🖼 Image

❓ Quiz

🌐 Website

🎬 Video Edit

✂ Reels

🎨 Creator Studio

🔥 Trending Content

Each feature must actually open a corresponding workflow.

Do NOT make them decorative buttons.

==================================================

6. ATTACH FILE

==================================================

Attach icon must support:

PDF

DOC

DOCX

PPT

PPTX

TXT

Images

Video

Show uploaded file preview.

Allow user to say:

"Indha file ah summarize pannu."

"Important points kudu."

"Exam notes create pannu."

"10 MCQ create pannu."

"Indha content ah PPT ah convert pannu."

The backend must actually process supported file content before claiming it analyzed the file.

For large files:

Use appropriate file/object storage.

Do not store large binary files directly inside the database.

Database should store:

file ID

user ID

chat ID

filename

file type

storage location

upload date

==================================================

7. NOTES GENERATOR

==================================================

Notes feature.

User can upload content or give a prompt.

Generate:

Title

Overview

Key Concepts

Definitions

Important Points

Examples

Quick Revision

Exam Points

Summary

Modes:

Quick Revision

Detailed Notes

Exam Notes

Beginner Friendly

Point-wise

Allow:

Edit

Regenerate

Copy

Export

==================================================

8. PPT GENERATOR

==================================================

PPT feature.

User can say:

"Create a 10 slide PPT about Artificial Intelligence."

or upload PDF/DOC.

Ask optional:

Number of slides

Audience

Language

Style

Generate:

Title slide

Introduction

Main concepts

Examples

Statistics when source-supported

Conclusion

References

Allow:

Preview

Edit slide content

Regenerate slide

Reorder slides

Download PPTX

Export PDF

Do not simply display fake PPT cards.

Create a real generation pipeline.

==================================================

9. PDF + DOCS

==================================================

DOC feature:

Generate structured documents.

Examples:

Reports

Assignments

Study notes

Project documentation

Articles

Research summaries

PDF feature:

Generate print-ready documents.

Allow:

Preview

Edit

Download

==================================================

10. QUIZ GENERATOR

==================================================

Generate quizzes from:

Prompt

PDF

DOC

PPT

Notes

Video transcript

Types:

MCQ

True/False

Short Answer

2 Mark

5 Mark

Show:

Question

Options

Correct Answer

Explanation

Allow regeneration.

==================================================

11. IMAGE GENERATION

==================================================

Image feature.

User can type:

"Create a futuristic AI classroom."

"Cybersecurity awareness poster create pannu."

"Create a thumbnail for my YouTube video."

Use a real image-generation backend/API if configured.

Options:

1:1

16:9

9:16

4:3

Purpose:

Social Media

Presentation

Poster

Infographic

Thumbnail

Educational

Marketing

Website

Style:

Realistic

3D

Illustration

Minimal

Cinematic

Professional

Cartoon

Infographic

Actions:

Regenerate

Edit Prompt

Create Variations

Save

Use in PPT

Use in Website

Never claim an image was generated if the image-generation API failed.

==================================================

12. CONTENT CREATOR — CREATOR STUDIO

==================================================

This is one of the MOST IMPORTANT parts.

CreatorFlow AI should strongly focus on content creators.

Create "Creator Studio".

User can select:

YouTube

Instagram

YouTube Shorts

Instagram Reels

LinkedIn

X

Facebook

Generate:

Content Ideas

Hooks

Video Scripts

YouTube Titles

YouTube Descriptions

Instagram Captions

Reel Captions

Shorts Ideas

Hashtags

Thumbnail Concepts

Carousel Ideas

LinkedIn Posts

X Threads

Content Calendar

Example:

User:

"I want 10 Instagram reel ideas about AI for students."

AI should generate useful ideas.

User:

"Create a 30 second reel script about cybersecurity."

AI should create:

Hook

Scene/point structure

Voiceover

On-screen text

CTA

Caption

Hashtags

==================================================

13. VIDEO EDITOR

==================================================

Create a real "Video Edit" workflow.

User uploads a video.

Then user can type natural language commands.

Examples:

"First 10 seconds remove pannu."

"Make this video 30 seconds."

"Add Tamil-English captions."

"Convert this to vertical 9:16."

"Remove silent portions."

"Add subtitles."

"Make this suitable for Instagram Reel."

The backend must translate the request into an actual video-processing pipeline.

Use FFmpeg or another appropriate server-side video-processing technology.

Supported operations:

Trim

Cut

Split

Crop

Resize

Rotate

Speed

Captions

Subtitles

Text overlay

Audio

Aspect ratio

Basic filters

IMPORTANT:

Only show "Edit completed" after the actual processing succeeds.

==================================================

14. LONG VIDEO → SHORTS / REELS

==================================================

Create a dedicated "Long Video to Reels" feature.

User uploads a long video.

System should:

1. Extract/process audio.

2. Generate transcript.

3. Understand the content.

4. Identify meaningful/engaging segments.

5. Generate multiple short-video candidates.

For each candidate show:

Reel title

Hook

Start timestamp

End timestamp

Duration

Why this segment works

Caption

Hashtags

Example:

Reel 1

"3 AI tools students should know"

00:12:30 - 00:13:08

38 seconds

Reel 2

"Biggest mistake beginners make"

00:24:10 - 00:24:48

38 seconds

Then allow:

Preview

Edit

Regenerate

Add captions

Change aspect ratio

Export

Default:

9:16 vertical.

==================================================

15. TRENDING CONTENT

==================================================

Create "Trending Content" section specifically for creators.

The purpose is to tell creators what content topics are currently popular.

DO NOT invent fake real-time trends.

Use a real web/news/trend data source or API when configured.

Show:

Trending Topic

Platform

Category

Why it is trending

Suggested content angle

Hook idea

Reel idea

Video idea

Hashtag suggestions

Categories:

AI

Technology

Education

Gaming

Business

Student Life

Programming

Cybersecurity

Design

Creator Economy

If live trend data is unavailable:

Clearly show that live trend data is not connected rather than pretending the data is current.

==================================================

16. WEBSITE GENERATOR

==================================================

Create a Website Generator.

User can say:

"Create a website for my startup."

"Create a portfolio website."

"Create a landing page for an AI product."

Generate:

Navbar

Hero

Features

About

Services

Statistics

Testimonials

FAQ

CTA

Footer

Show:

Live Preview

Edit

Regenerate

Theme

Layout

Export HTML/CSS/JS

Generated website should be responsive.

==================================================

17. MULTI-STEP AI COMMANDS

==================================================

The AI must understand multi-step requests.

Example:

"Indha PDF ah analyze panni exam notes prepare pannu, athula irunthu 10 slide PPT create pannu, and presentation-ku infographic image generate pannu."

System should process:

1. File analysis

2. Notes generation

3. PPT generation

4. Image generation

Show each result separately in the conversation.

Another example:

"Indha long video la best moments find panni 5 reels create pannu and captions add pannu."

==================================================

18. REAL GEMINI AI

==================================================

Use Gemini API on the BACKEND.

Environment variable:

GEMINI_API_KEY

Never expose the key in frontend JavaScript.

Create centralized AI service.

Example backend structure:

/backend

  /services

    aiService

    fileService

    videoService

    trendService

    documentService

  /routes

    auth

    chat

    files

    ai

    creator

    video

    trends

AI service should handle:

Chat

Text transformation

Summarization

Notes

Quiz

PPT content

Creator content

Video understanding through supported processing

Source-grounded responses

Handle errors:

Invalid API key

Rate limit

Timeout

Network error

Empty response

API unavailable

Never return fake successful AI results.

==================================================

19. DATABASE

==================================================

Create a real persistent database.

Tables:

users

chats

messages

files

outputs

projects

creator_content

video_jobs

Minimum fields:

users:

id

email

verified

created_at

chats:

id

user_id

title

pinned

created_at

updated_at

messages:

id

chat_id

role

content

created_at

files:

id

user_id

chat_id

file_name

mime_type

storage_url/path

created_at

outputs:

id

user_id

chat_id

type

title

file_url/path

created_at

Every record must be connected to the correct authenticated user.

One user must NEVER see another user's chats/files.

==================================================

20. FRONTEND

==================================================

Build a modern responsive frontend.

Preferred:

React

TypeScript

Vite

Tailwind CSS

Use clean reusable components.

Suggested:

components/

  Sidebar

  ChatWindow

  ChatComposer

  ToolBar

  MessageBubble

  FileUploader

  CreatorStudio

  VideoEditor

  ReelGenerator

  PPTGenerator

  NotesGenerator

  QuizGenerator

  ImageGenerator

  WebsiteGenerator

  TrendingContent

Pages:

Login

OTP Verification

Chat

Creator Studio

Video Editor

Reels

Trending

Settings

==================================================

21. DESIGN

==================================================

Main color:

Modern BLUE AI theme.

Use:

#2563EB style blue

white

very light blue

dark navy text

Design requirements:

Premium

Modern

Clean

Minimal

Professional

AI SaaS style

Rounded cards

Soft shadows

Subtle borders

Smooth hover animations

Good typography

Excellent spacing

Avoid:

Old admin dashboard appearance

Too many boxes

Huge gradients everywhere

Clutter

Tiny text

Cheap-looking UI

The website must look suitable for:

College hackathon

Startup demo

Real AI SaaS product

Responsive:

Desktop

Laptop

Tablet

Mobile

Sidebar should become a drawer on mobile.

==================================================

22. CHAT COMPOSER

==================================================

Composer should look premium.

Large rounded input.

Left side:

Attach button.

Below input:

Tool icons.

Right:

Send button.

Support:

Enter = Send

Shift + Enter = New line

Show:

Uploading

Processing

Generating

Completed

==================================================

23. REAL-TIME FEEDBACK

==================================================

When AI is processing:

"Thinking…"

When file is processing:

"Analyzing your file…"

When video is processing:

"Processing video…"

When generating:

"Creating your content…"

Use proper loading states.

Never freeze UI.

==================================================

24. PROJECT STORAGE

==================================================

Create "Projects" concept.

Users can save:

Chats

Generated notes

PPT

PDF

Docs

Images

Websites

Reels

Creator content

Project cards should show:

Name

Type

Last modified

Open

Rename

Delete

==================================================

25. SETTINGS

==================================================

Settings page:

Profile

Email

Language preference

Theme

AI preferences

Connected services

Logout

Language:

English

Tamil

Tanglish-friendly

==================================================

26. SECURITY

==================================================

Implement:

Environment variables

Secure API key handling

Authentication

Authorization

Input validation

File type validation

File size limits

Rate limiting where appropriate

Secure sessions/tokens

User-specific database queries

Never expose:

GEMINI_API_KEY

SMTP password

Database credentials

==================================================

27. IMPORTANT ARCHITECTURE

==================================================

Use this flow:

USER

 ↓

FRONTEND

 ↓

BACKEND API

 ↓

AUTH / DATABASE / FILE STORAGE / AI SERVICES

 ↓

GEMINI / VIDEO / DOCUMENT / IMAGE SERVICES

 ↓

BACKEND

 ↓

FRONTEND

 ↓

USER

Do not put AI API keys in frontend.

Do not store large videos directly in relational database.

==================================================

28. IMPORTANT USER EXPERIENCE

==================================================

The first experience after login should be:

CreatorFlow AI

Welcome to CreatorFlow AI 👋

What do you want to create today?

[ Chat input................................ ]

[Attach] [Notes] [PPT] [PDF] [Docs] [Image]

[Quiz] [Website] [Video Edit] [Reels]

[Creator Studio] [Trending]

Sidebar:

+ New Chat

Search

Recent Chats

This should immediately communicate:

"CreatorFlow AI can understand content and transform it into many formats."

==================================================

29. DO NOT BUILD FAKE FEATURES

==================================================

VERY IMPORTANT:

Do not create buttons that only show "Coming Soon" for the main promised features.

If a feature requires an external API/service:

- create the backend integration structure

- use environment variables

- show a clear configuration state if credentials are missing

- never fake successful output

For example:

If GEMINI_API_KEY is missing:

"Gemini is not connected. Add GEMINI_API_KEY in the backend environment."

Do NOT display a fake AI answer.

==================================================

30. FINAL REQUIREMENT

==================================================

Build the complete CreatorFlow AI application.

Before coding:

1. Inspect the existing project.

2. Reuse working authentication/backend/database code.

3. Do not unnecessarily duplicate existing services.

4. Preserve working Email OTP.

Then implement missing components.

At the end provide:

1. Complete project structure

2. Frontend code

3. Backend code

4. Database schema

5. Environment variable example

6. API routes

7. Setup instructions

8. Local run commands

9. Gemini API configuration instructions

10. Email SMTP/provider configuration instructions

The final result must feel like a REAL AI CONTENT CREATION AND TRANSFORMATION PLATFORM, not a simple college project UI.

Core product identity:

CREATORFLOW AI

"One source. Many possibilities."

Primary target:

CONTENT CREATORS + STUDENTS + EDUCATORS

Core flow:

UPLOAD / TYPE

↓

AI UNDERSTANDS

↓

USER PROMPT

↓

AI TRANSFORMS

↓

EDIT

↓

EXPORT

↓

PUBLISH

==================================================

MULTILINGUAL AI — ALL LANGUAGES

==================================================

CreatorFlow AI MUST be a multilingual AI platform.

The user should be able to communicate in ANY language supported by the configured AI model.

Do NOT restrict the application to:

English

Tamil

Tanglish

The AI should automatically detect the language of every user message.

Examples:

English:

"What is artificial intelligence?"

Tamil:

"செயற்கை நுண்ணறிவு என்றால் என்ன?"

Tanglish:

"AI na enna nu simple ah explain pannu."

Hindi:

"मुझे AI के बारे में समझाइए।"

Malayalam:

"AI എന്താണ്?"

Telugu:

"AI అంటే ఏమిటి?"

Kannada:

"AI ಎಂದರೇನು?"

Bengali:

"AI কী?"

Marathi:

"AI म्हणजे काय?"

Spanish:

"¿Qué es la inteligencia artificial?"

French:

"Qu'est-ce que l'intelligence artificielle ?"

German:

"Was ist künstliche Intelligenz?"

Japanese:

"人工知能とは何ですか？"

Korean:

"인공지능이란 무엇인가요?"

Chinese:

"什么是人工智能？"

Arabic:

"ما هو الذكاء الاصطناعي؟"

And other languages supported by the selected AI model.

==================================================

AUTOMATIC LANGUAGE DETECTION

==================================================

Every user message must automatically go through language detection.

The system should determine:

1. User language

2. Script

3. Mixed-language usage

4. Requested output language

5. Whether translation is required

Do NOT force the user to select a language before chatting.

Example:

User:

"Explain DBMS normalization."

AI:

Answer in English.

User:

"DBMS normalization ah simple ah explain pannu."

AI:

Answer naturally in Tanglish.

User:

"இதை தமிழில் எளிமையாக விளக்கவும்."

AI:

Answer in Tamil.

User:

"अब इसे हिंदी में समझाओ।"

AI:

Answer in Hindi.

==================================================

REPLY LANGUAGE RULE

==================================================

DEFAULT RULE:

Reply in the same language used by the user.

If the user mixes languages, understand the mixed-language message naturally and respond in the dominant/requested language.

Example:

User:

"Indha PDF ah summarize panni Tamil la notes kudu."

AI:

Generate Tamil notes.

User:

"இந்த topic-ஐ English-ல explain பண்ணு."

AI:

Generate English explanation.

User:

"Explain this in Hindi."

AI:

Generate Hindi response.

==================================================

LANGUAGE SWITCHING

==================================================

The user can switch languages at any time.

Do NOT permanently lock the chat to one language.

Example:

Message 1:

English

Message 2:

Tamil

Message 3:

Hindi

Message 4:

Tanglish

CreatorFlow AI should understand each message independently while maintaining the conversation context.

==================================================

CONTENT GENERATION LANGUAGE

==================================================

All CreatorFlow features must support multilingual output.

This includes:

Chat

Notes

PPT

PDF

Docs

Quiz

Image prompts

Website content

Video scripts

Video captions

Reel captions

YouTube titles

YouTube descriptions

Instagram captions

Hashtags

Creator Studio

Voice/transcription pipeline

Long-video-to-reels

AI-generated website text

Example:

User:

"Create a PPT about Cybersecurity in Tamil."

Generate the PPT content in Tamil.

User:

"Create the same PPT in Hindi."

Generate the same content in Hindi.

User:

"Create a 30 second Instagram reel script about AI in Tanglish."

Generate the reel script naturally in Tanglish.

==================================================

MULTILINGUAL FILE PROCESSING

==================================================

Uploaded files may contain different languages.

CreatorFlow AI should:

1. Detect the document language.

2. Extract the content.

3. Understand the content.

4. Allow the user to summarize or transform it.

5. Generate output in the requested language.

Example:

Hindi PDF:

"இந்த PDF-ஐ தமிழில் exam notes ஆக மாற்று."

The system should understand the Hindi source and create Tamil notes.

English PDF:

"Isko Hindi mein PPT bana do."

Create Hindi PPT content.

==================================================

MULTILINGUAL VIDEO

==================================================

For uploaded videos:

Detect spoken language where supported.

Generate transcript.

Allow:

"Summarize this in Tamil."

"Create Hindi subtitles."

"Make English captions."

"இந்த video-ல இருந்து Tanglish reels create pannu."

The user should be able to choose a different output language from the original video language.

==================================================

MULTILINGUAL CREATOR STUDIO

==================================================

Creator Studio must allow creators to generate content in different languages.

Language selector:

Auto Detect

English

Tamil

Tanglish

Hindi

Telugu

Malayalam

Kannada

Bengali

Marathi

Gujarati

Punjabi

Urdu

Spanish

French

German

Portuguese

Japanese

Korean

Chinese

Arabic

Other supported languages

Also allow:

"Use the language from my prompt."

==================================================

TANGLISH / MIXED LANGUAGE SUPPORT

==================================================

Tanglish must be treated as natural mixed-language input.

Examples:

"Enakku oru AI related reel script kudu."

"Indha content ah professional ah convert pannu."

"PDF la irukura important points mattum eduthu kudu."

"Website modern ah irukanum, blue theme use pannu."

Do NOT incorrectly translate Tanglish word-by-word.

Understand the actual meaning and intent.

==================================================

IMPORTANT AI IMPLEMENTATION

==================================================

Do not create a hardcoded language list that limits the AI.

Use the actual multilingual capability of the configured Gemini model.

The backend should send the original user message to the AI without unnecessarily translating it first.

For each request, provide system instructions such as:

"You are CreatorFlow AI, a multilingual AI assistant.

Understand the user's language automatically.

Respond in the same language as the user unless the user explicitly requests another language.

Understand mixed-language messages, transliteration, and Tanglish-style input.

Preserve the user's requested tone and intent.

When generating documents, PPTs, captions, scripts or other outputs, use the requested output language."

Do NOT hardcode translations.

Do NOT create fake multilingual responses.

==================================================

VOICE LANGUAGE SUPPORT

==================================================

If voice input/output is implemented:

Allow users to speak naturally in supported languages.

Automatically detect spoken language where the selected speech API supports it.

Example:

User speaks Tamil → understand Tamil.

User speaks Hindi → understand Hindi.

User speaks English → understand English.

User can switch languages between messages.

Do not force one language.

==================================================

LANGUAGE SETTINGS

==================================================

Settings should contain:

AI Response Language:

• Auto Detect

• English

• Tamil

• Hindi

• Telugu

• Malayalam

• Kannada

• Bengali

• Marathi

• Gujarati

• Punjabi

• Urdu

• Spanish

• French

• German

• Portuguese

• Japanese

• Korean

• Chinese

• Arabic

• Other supported languages

Default:

AUTO DETECT

Important:

Even when Auto Detect is selected, the user can explicitly say:

"Answer in Tamil."

"Translate this to Hindi."

"Give me this in English."

The explicit request must override automatic detection for that response.

==================================================

FINAL MULTILINGUAL REQUIREMENT

==================================================

CreatorFlow AI should feel like a genuinely multilingual AI assistant.

The user should NEVER feel:

"I can only use English."

Instead:

"Whatever language I use, CreatorFlow understands me."

Maintain:

- Natural language understanding

- Mixed-language understanding

- Translation

- Summarization

- Content generation

- Multilingual creator content

- Multilingual captions

- Multilingual notes

- Multilingual PPT

- Multilingual documents

- Multilingual quizzes

- Multilingual video content

Use the real AI model for language understanding and generation.

Never fake multilingual support.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f69bbe52-ebb2-4227-96a0-de227b1cda91).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

