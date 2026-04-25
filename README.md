# 📺 YouTube Clone (HTML, CSS, JavaScript)

A fully responsive and interactive **YouTube-inspired web application** built using **HTML, CSS, and Vanilla JavaScript**. This project demonstrates DOM manipulation, dynamic rendering, and clean UI design while showcasing programming-related video content.

---

## 🚀 Features

* 🎥 Dynamic video cards (thumbnail, title, channel, views, duration)
* 🔍 Real-time search functionality
* ⌨️ Press **Enter** to search directly on YouTube
* 🖱️ Clickable cards that open videos in a new tab
* 🎨 Auto-generated channel avatars with unique colors
* ⚡ Smooth and responsive UI
* 🌐 Mix of English & Hindi programming tutorials

---

## 🛠️ Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and interactivity

---

## 📁 Project Structure

```
YouTube-Clone/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── YouTubeClone.js   # JavaScript logic
├── MainLogoYT.png    # Logo / Favicon
└── README.md         # Documentation
```

---

## ⚙️ How the Project Works

* Video data is stored in a **JavaScript array**
* Cards are dynamically generated using DOM manipulation
* Each video card includes:

  * Thumbnail (YouTube preview image)
  * Title
  * Channel name
  * Views & upload time
* Clicking a card opens the video on YouTube in a new tab

---

## 🔎 Search Functionality

* Filters videos in real-time
* Matches:

  * Video title
  * Channel name
* Press **Enter** → redirects to YouTube search page

---

## 💡 Sample Code

```javascript
// Search filter
document.getElementById('searchInput').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.video-card').forEach(card => {
        const title = card.querySelector('.v-title').textContent.toLowerCase();
        const channel = card.querySelector('.v-meta').textContent.toLowerCase();
        card.style.display = (!q || title.includes(q) || channel.includes(q)) ? '' : 'none';
    });
});
```

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Daimx1214/youtube-clone.git
```

2. Open the project folder

3. Run `index.html` in your browser

---

## 🎯 Learning Outcomes

This project helps you understand:

* DOM Manipulation
* Event Handling in JavaScript
* Dynamic UI Rendering
* Responsive Web Design
* Clean Code Structure

---

## 📌 Future Improvements

* 🔐 User authentication system
* ❤️ Like / Subscribe feature
* 📂 Category filtering
* 🌙 Dark / Light mode
* 📱 Enhanced mobile UI

---

## 👨‍💻 Author

**Daim Ali**

* Computer Science Student
* Passionate about Web Development & .NET
* Building real-world projects

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature-name`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
