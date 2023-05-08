const Content = () => {
    const handleName = () => {
        const names = ['Bob', 'Shivam', 'Cheems']
        const i = Math.floor(Math.random() * 3);
        return names[i];
    }
    return (
        <div>
            <ul>
                <li>{handleName()}</li>
                <li>{handleName()}</li>
                <li>{handleName()}</li>
            </ul>
        </div>
    )
}

export default Content;