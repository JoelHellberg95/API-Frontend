const login = async (username, password) => {
    const response = await fetch('https://localhost:7134/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};
