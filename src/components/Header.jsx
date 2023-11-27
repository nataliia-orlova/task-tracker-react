import Button from './Button';

export default function Header() {
    const onClick = () => {
        console.log('click!!!!!');
    };
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onClick} color="red" text="Add" />
        </header>
    );
}
