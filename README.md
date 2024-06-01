markdown
# React To-Do List

A simple and visually appealing To-Do List application built with React. This application allows users to add, edit, delete, and filter tasks, and also supports marking tasks as completed. Tasks are persisted using local storage, so they remain between page reloads.

## Features

- Add Task: Users can add new tasks to the list.
- Edit Task: Users can edit the title of an existing task.
- Delete Task: Users can delete a task from the list.
- Mark Task as Completed: Users can mark tasks as completed.
- Complete All Tasks: Users can mark all tasks as completed.
- Delete Completed Tasks: Users can delete all completed tasks.
- Filter Tasks: Users can filter tasks based on their completion status.
- Task Count: The total number of tasks and the number of completed tasks are displayed.
- Local Storage Integration: Tasks are saved to local storage to persist between page reloads.
- Input Validation: Ensures that the input is not empty before adding a task.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Adding a Task**: Enter a task in the input field and click "Add Task".
- **Editing a Task**: Click on the task text to edit it directly.
- **Deleting a Task**: Click the "Delete" button next to a task to remove it.
- **Marking a Task as Completed**: Check the checkbox next to a task to mark it as completed.
- **Complete All Tasks**: Click "Complete all tasks" to mark all tasks as completed.
- **Delete Completed Tasks**: Click "Delete Comp tasks" to remove all completed tasks.
- **Filtering Tasks**: Use the dropdown menu to filter tasks by "All", "Active", or "Completed".
- **Task Persistence**: Refresh the page to see tasks persist between reloads due to local storage integration.

## Project Structure

```
todolist
├── src
│   ├── components
│   │   ├── style.css
│   │   └── TodoList.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   └── serviceWorker.js
└── README.md
```

## Testing

1. **Setup and Installation**:
   - Ensure you have Node.js and npm installed.
   - Navigate to your project directory in the terminal.
   - Install the necessary dependencies by running `npm install`.

2. **Running the Application**:
   - Start the development server with `npm start`.
   - Open your browser and navigate to `http://localhost:3000` to view your To-Do List application.

3. **Testing Functionality**:
   - **Add Task**: Enter a task in the input field and click "Add Task". Verify the task appears in the list.
   - **Edit Task**: Edit the task by changing its text directly in the list.
   - **Delete Task**: Delete a task by clicking the "Delete" button next to it.
   - **Mark Task as Completed**: Check the checkbox next to a task to mark it as completed. Ensure the task is visually marked (e.g., line-through).
   - **Complete All Tasks**: Click "Complete all tasks" and verify all tasks are marked as completed.
   - **Delete Completed Tasks**: Click "Delete Comp tasks" and ensure all completed tasks are removed.
   - **Filter Tasks**: Use the filter dropdown to display all, active, or completed tasks.
   - **Persist Tasks**: Refresh the page and ensure tasks persist between reloads, indicating successful local storage integration.

4. **Inspect for Errors**:
   - Open the browser's developer tools (F12 or right-click and select "Inspect") and check the console for any errors or warnings.
   - Verify local storage functionality by checking the "Application" tab in developer tools, under "Local Storage".

5. **Run Automated Tests** (if applicable):
   - If you have set up automated tests (e.g., using Jest), you can run them using `npm test`.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


