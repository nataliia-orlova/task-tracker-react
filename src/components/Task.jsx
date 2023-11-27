import { FaTimes } from 'react-icons/fa';

export default function Task({ task, onDelete, onToggle }) {
    return (
        // if reminder is true add class of reminder, otherwise leave as is
        //use template literal for the expression
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <h3>{task.day}</h3>
        </div>
    );
}
