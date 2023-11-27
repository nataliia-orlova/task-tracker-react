import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'bring kids to school',
            day: 'Sep 1 at 9am',
            reminder: true,
        },
        {
            id: 2,
            text: 'bring kids from school',
            day: 'Sep 1 at 2pm',
            reminder: false,
        },
    ]);

    //Add Task
    const addTask = (task) => {
        //give a random number to the id
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'You are done for the day!'
            )}
        </div>
    );
}

export default App;
