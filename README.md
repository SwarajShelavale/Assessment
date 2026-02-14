# 💕 Valentine's Day Website

A romantic, interactive Valentine-themed single-page website created with love for my beautiful wife.

## 🎨 Features

- **Romantic Design**: Soft pink, red, white and golden color palette
- **Interactive Quiz**: Personalized questions about your relationship
- **Memory Gallery**: Beautiful photo showcase with hover effects
- **Animations**: Floating hearts, rose petals, and glitter particles
- **Audio Controls**: Background music with mute/unmute functionality
- **Love Counter**: Shows days you've been together
- **Responsive Design**: Works perfectly on desktop and mobile
- **Love Letter**: Beautiful popup with personalized message
- **Final Surprise**: Romantic Valentine question with special effects

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript**: Interactive functionality and dynamic content
- **Google Fonts**: Dancing Script and Poppins fonts

## 📁 Project Structure

```
Valentine/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
├── Assets/             # Photo gallery
│   ├── Swami.jpeg
│   ├── Love.jpeg
│   └── TCS.jpeg
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🚀 How to Use

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Valentine
   ```

2. **Customize the content**
   - Edit `script.js` to change:
     - `wifeName`: Your wife's name
     - `relationshipStartDate`: Your relationship start date
     - `quizQuestions`: Personalized questions
     - `typewriterMessage`: Custom intro message
     - Love letter text in the HTML

3. **Add your photos**
   - Replace photos in the `Assets/` folder
   - Update image paths in `index.html` if needed

4. **Run locally**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

5. **Open in browser**
   Navigate to `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages

1. Push the code to your GitHub repository
2. Go to repository Settings
3. Scroll down to "GitHub Pages"
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at `https://<username>.github.io/<repository-name>/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Import from GitHub
- **Firebase Hosting**: Deploy with Firebase CLI
- **Surge.sh**: Quick deployment with surge command

## 💝 Personalization Tips

### Questions
Edit the `quizQuestions` array in `script.js`:
```javascript
const quizQuestions = [
    {
        question: "Your personalized question?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: 2 // Index of correct answer
    }
];
```

### Photos
1. Add your photos to the `Assets/` folder
2. Update the image paths in `index.html`:
```html
<img src="Assets/your-photo.jpg" alt="Description" />
```

### Love Letter
Edit the love letter text in the modal section of `index.html`.

## 🎯 Customization Guide

### Colors
Main theme colors in `style.css`:
- Primary: `#ff69b4` (Hot Pink)
- Secondary: `#ff1493` (Deep Pink)
- Accent: `#d63384` (Rose)

### Animations
- Floating hearts: Every 2 seconds
- Rose petals: Every 3 seconds  
- Glitter particles: Every 0.5 seconds

### Responsive Breakpoints
- Desktop: Full grid layout
- Tablet: Adjusted grid
- Mobile: Single column layout

## 💌 Special Features

- **Moving NO Button**: The NO button moves away on hover in the final question
- **Heart Explosion**: Triggered when YES is clicked
- **Countdown Timer**: Shows time until next Valentine's Day
- **Typewriter Effect**: Romantic intro message animation
- **Wrong Answer Handling**: Playful message after 3 wrong attempts

## 📱 Mobile Optimization

- Touch-friendly buttons
- Responsive grid layout
- Optimized animations
- Proper image scaling

## ❤️ Made With Love

Created with infinite love by a husband for his wonderful wife.

---

*Happy Valentine's Day! 💕*
