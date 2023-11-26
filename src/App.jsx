import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'bring kids to school',
            day: 'Sep 1 at 9am',
        },
        {
            id: 2,
            text: 'bring kids from school',
            day: 'Sep 1 at 2pm',
        },
    ]);

    //Delete Task function
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} />
            ) : (
                'You are done for the day!'
            )}
        </div>
    );
}

export default App;
