# ✅ Simple To-Do List App (React)

A simple and functional To-Do list application built with React. Users can add, remove, and mark tasks as completed. Clean structure with reusable components and state management using React Hooks.

---

## 🚀 Features

- 📝 Add new tasks
- ❌ Remove tasks
- ✅ Mark tasks as complete/incomplete
- ♻️ Dynamic updates with `useState`
- 🎨 Modular and maintainable component structure
- 📦 Easy to expand with new features (edit, drag-drop, filters, etc.)

---

## 🧱 Tech Stack

- ⚛️ React (with Hooks)
- 💅 CSS (for styling)
- 🗂️ Functional Components (modular design)

---

## 📂 Project Structure
```

todo-app/
├── src/
│ ├── components/
│ │ ├── TodoApp.jsx # Main App component
│ │ ├── TodoForm.jsx # Form to add tasks
│ │ ├── TodoList.jsx # List component to show tasks
│ ├── TodoApp.css # Styling for the app
│ └── index.js # Entry point
└── README.md
```
yaml
Copy
Edit

---

## 🛠 Getting Started

1. **Clone the repository**

``bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm start
The app will open on http://localhost:3000.

✨ Sample Usage
jsx
Copy
Edit
<TodoApp />
Inside TodoApp.jsx, the logic handles:

addTask(task) – adds a new task

removeTask(id) – deletes a task

toggleTask(id) – toggles task completion

These actions are passed down to the components TodoForm and TodoList.

💡 Possible Improvements
📝 Edit task feature

🔍 Filter tasks (all / completed / active)

💾 Persist tasks using local storage or database

📱 Responsive design improvements

📄 License
This project is licensed under the MIT License – free to use and modify.

🙌 Author
Made with ❤️ by Yeabsera 
Feel free to contribute or fork the project!
