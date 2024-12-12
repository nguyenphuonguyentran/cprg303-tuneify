<h1 align="center">Tuneify 🎶</h1>

<h2 align="center">A Mobile Music Player Application by Team Skittles</h2>

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Architecture Decisions](#architecture-decisions)
- [Security Recommendations](#security-recommendations)
- [Project Status](#project-status)
- [Contributors](#contributors)
- [License](#license)

---

## Project Overview

**Tuneify** is a mobile music player application designed to give users an intuitive way to organize and play their favorite music. Developed as part of the Mobile Application Development course at SAIT, Tuneify combines robust playback functionality with a clean, user-friendly design to enhance the listening experience.

This project is developed by **Team Skittles** and is not intended for commercial distribution. Our goal is to build a music player app with essential features like playlist management, music library browsing, and playback controls.

## Features

Tuneify offers a range of features :
- **Playlist Management**: Allows users to create, rename, modify, and delete playlists, offering a personalized listening experience.

- **Music Library Browsing**: Users can browse through their music by artist, album, or genre, making it easy to find specific songs or explore their collection.

- **Playback Controls**: Core playback features such as play, pause, skip, and shuffle are integrated for an enhanced user experience.

- **User-Friendly Interface**: The app features a clean and responsive design that is visually appealing and easy to navigate.

- **Cross-Platform Compatibility**: Tuneify is optimized to work smoothly on both iOS and Android devices.


## Tech Stack

Tuneify uses the following technologies and frameworks:

- **React Native**:  A JavaScript framework used to build cross-platform mobile applications, enabling Tuneify to function on both iOS and Android from a single codebase.

- **Bootstrap**: A front-end framework that helps ensure Tuneify’s design is responsive and maintains a consistent look across different screen sizes and devices.

- **MongoDB Realm**: A flexible, scalable, and serverless database for managing user data. MongoDB Realm handles user playlists and preferences securely and efficiently.

- **Node.js**:Serves as the backend runtime environment for the app’s server-side logic, handling API requests, database interactions, and other core backend functionalities.

- **Spotify API**: Provides access to a comprehensive dataset of music metadata, including song, artist, and album details, ensuring that Tuneify has access to a broad music library.

- **Figma**: A collaborative design tool used to create wireframes and prototypes, allowing the team to visualize and refine Tuneify’s user interface and user experience.

- **GitHub**: A cloud-based version control platform used to manage code changes and facilitate team collaboration. GitHub also serves as a central repository for project files and documentation.


## Installation and Setup

to set up Tuneify...

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Expo CLI](https://expo.dev/) (for React Native setup)
- [MongoDB Realm](https://realm.mongodb.com/) account for data storage

### Installation Steps

1. **Clone the Repository** 
   ```bash
   git clone https://github.com/nguyenphuonguyentran/cprg303-tuneify?tab=readme-ov-file#project-overview

2. **Install Dependencies**
   ```bash
   npm install

3. **Set up Environment Variables**
   - Create a .env file in the root directory and add the necessary API keys and environment variables such as Spotify API keys and MongoDB Realm config.

   Example .env file:
   ```plaintext
   SPOTIFY_API_KEY=your_spotify_api_key
   MONGODB_REALM_APP_ID=your_mongodb_realm_app_id
   ```

4. **Run the Application**   
   ```bash
   expo start
   ```
   
   - Use an Android emulator to test the app. Follow expo CLI instructions to launch it on your device. 


## Usage

Once the app is running, you can: 
1. **Browse Music**: 
2. **Manage Playlists**:
3. **Playback Controls**:


## Architecture Decisions

All architectural decisions for this project are documented in detail and are available in the [folder-name] folder. Key decisions include:

- **Development Framework**: React Native
- **Navigation Strategy**: Bottom Navigation
- **Hardware Integration**: Speaker
- **Database Storage**: MongoDB Realm

## Security Recommendations
- **Security Recommendations and Reasons of Choice:**
Our recommendation is to implement OAuth 2.0 authentication to securely handle user logins for the Tuneify app. We chose this because it ensures that user credentials are never stored in the app, and it leverages third-party authentication providers (like Google or Facebook), making it both secure and user-friendly. This is particularly relevant since the app will have a search functionality relying on APIs, and OAuth provides a secure method of verifying users without handling sensitive login details.

- **People Benefitting the Recommendations:**
This recommendation primarily benefits the end-users, as it offers secure and easy authentication through trusted third-party providers. It also benefits the developer by simplifying the implementation of secure user authentication and reducing the burden of managing passwords and security features directly.

- **References of the Security Recommendations:**
What is OAuth 2.0 and what does it do for you? - Auth0 (https://auth0.com/intro-to-iam/what-is-oauth-2)

- **The Implementation of the Recommendations:**
OAuth 2.0 should be implemented as early as possible in the project, ideally before launching any user authentication feature. It is critical to handle user authentication securely to avoid risks related to password breaches, which could damage user trust.

- **The Importance of the Recommendations to Tuneify:**
Since Tuneify will have user login functionality, incorporating OAuth 2.0 is crucial to ensure that user data and credentials are securely managed. Without proper security mechanisms, the app may be vulnerable to attacks such as phishing or unauthorized access, which could lead to security breaches and a loss of user trust.

- **The Application of the Recommendations:**
Implementing OAuth 2.0 can be done by integrating a package or SDK like Firebase Authentication or directly using OAuth libraries such as react-oauth for React. The implementation would involve configuring OAuth providers (e.g., Google, Facebook), setting up callback URLs, and securely handling tokens. Given the current structure of Tuneify, integrating this would be feasible as it relies on third-party API calls, and authentication via OAuth can be added with minimal disruption to existing functionality. The feasibility is high, as there are well-documented libraries and guides available for React and mobile applications.


## Project Status

**Current Phase**: App Architecture (Phase 4)

### Next Steps
1. **UI/UX Design Mock-Ups**:
2. **Backend Functionality**:
3. **User Testing and Feedback**:


## Contributors

**Team Skittles**
- **Kshitiz Sapkota** - 
- **Nguyen Phuong Uyen Tran** - 
- **Naz Zaamout** - 
