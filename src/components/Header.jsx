import Button from './Button';

export default function Header({ onAdd, showAdd }) {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button
                onClick={onAdd}
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
            />
        </header>
    );
}
