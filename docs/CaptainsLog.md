## Introduction

This application will help the user monitor and improve their weight and nutrition. It will track, record, and analyze the user’s weight and nutritional inputs against the user's goals and best-practice guidelines.

## Features

### Weight

- Display weight graph
  - Target weight slope
  - Predicted weight slope
  - Moving average
  - Zoom to current weight-loss campaign
  - Automatically mark milestones & achievements:
     - 🎯 🏆 🎖️ ⭐ 🌟 🎉
- Configure weight graph
  - Target weight slope: weight/week
  - Show only lowest weight of a given day
  - Show/hide annotations
- Analyze previous weight-loss campaigns
- Update weight log
  - Import/sync weight data from Fitbit  
  - Import weight data from CSV  
  - Add current weight
  - Annotate
    - symbols:
      - Output: 💩
      - Food: 🍕 🍔 🍟 🌭 🥪 🧆 🍗 🍖 🥓 🍳 🥚 🧀
      - Sweets & Desserts: 🍪 🍩 🍰 🎂 🧁 🍫 🍬 🍭 🍮 🍯 🧈
      - Snacks: 🥨 🥐 🥖 🥯 🧇 🥞 🍞 🥜 🍿
      - Fruits: 🍎 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝
      - Vegetables: 🥦 🥬 🥒 🥕 🌽 🌶️ 🫑 🥑 🍅 🥔 🧄 🧅 🥗
      - Meals: 🍲 🍱 🍚 🍛 🍜 🍝 🍠 🥘 🥙 🧆
      - Drinks: ☕ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🧊 💧 🥛
    - trademarks: McDonalds Coke

### Nutrition

- Log meal from camera
- Input food manually using autocomplete food chooser
- Nutrients achieved
- Nutrients needed
- Pre-mealtime nags: 11:30, 5:30
- Graph calories, nutrients
- Hydration tracking/nagging
- Integrate w/ Chronometer etc.

### Health

- Input symptoms, pains

### Fitness

  - Exercise & Activities:
    - Cardio: 🏃 🚴 🏊 🚶 🏃‍♀️ 🏃‍♂️ 🚴‍♀️ 🚴‍♂️
    - Strength: 🏋️ 🏋️‍♀️ 🏋️‍♂️ 💪 🤸 🤸‍♀️ 🤸‍♂️
    - Sports: ⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥊 🥋
    - Yoga/Wellness: 🧘 🧘‍♀️ 🧘‍♂️ 🛌 😴
    - Other: 🚵 🚵‍♀️ 🚵‍♂️ 🏇 🏂 🏄 🏄‍♀️ 🏄‍♂️ 🏌️ 🏌️‍♀️ 🏌️‍♂️
  - Health & Medical:
    - 🩺 💊 💉 🏥 🏩 🩹 ⚕️ 🧬
  - Events & Occasions:
    - 🎂 🎉 🎊 🎈 🎁 🍾 🥳 🎪 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻

### Display

- Web dashboard  
- Android app+widget  
- Google TV app/screensaver  
- Mac screensaver (or just use web dashboard?)

### Motivation

- Share w/ friends/sponsor  
- Gamify: streaks, badges, levels

## Project Planning

- Open source?   
- Business model? donations, ads, ad-free, premium features  
- Once we pick a name, we'll buy a DNS domain name

## Project Technical Stack & Deployment Summary

### Technical Stack (JPR)

- **Backend Framework:** **Java Spring Boot**. This was chosen due to the team's preference for Java, providing a robust, enterprise-grade, and well-supported platform for building secure REST APIs.  
- **Database:** **PostgreSQL**. This is an industry-standard, highly reliable open-source relational database that integrates seamlessly with Spring Boot via Spring Data JPA.  
- **Frontend:** **React**. This remains the standard, modern choice for building fast, component-based user interfaces.  
- **Containerization:** **Docker** is highly recommended. It will be used for packaging the Spring Boot application and the PostgreSQL database into consistent, portable images. This simplifies collaboration and makes future migration to commercial cloud platforms straightforward. **Kubernetes (K8s)** is specifically excluded as it introduces unnecessary complexity for this project size.

### Deployment Plan: Local Self-Hosting

The chosen deployment strategy is to run the server on local hardware to control costs and provide a learning opportunity.

- **Server Hardware:** The compiled Spring Boot application and its database container will run on a **Local Mac Mini** dedicated to hosting the service.  
- **Connectivity:** The application will be accessed over the internet using a **dedicated DNS domain name**. This approach requires a few manual steps: setting up **port forwarding** on the home router and managing **dynamic IP address** updates (likely via a dynamic DNS service) if the local ISP does not provide a static IP address.

