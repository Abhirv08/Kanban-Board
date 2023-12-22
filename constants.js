

const priorityIcon = (priority) => {
    if (priority === 0) {
        return (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path></svg>)
    } else if (priority === 1) {
        return (<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M2 20h.01"></path><path d="M7 20v-4"></path></svg>)
    } else if (priority === 2) {
        return (<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path></svg>)
    } else if (priority === 3) {
        return (<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path></svg>)
    }
    return (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg" style={{ "color": "rgb(245, 138, 66)" }}><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>)
}

const StatusIcon = (status) => {
    if (status === "Todo") {
        return (<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path></svg>)
    } else if (status === "Backlog") {
        return (<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7.5 4.21l0 .01"></path><path d="M4.21 7.5l0 .01"></path><path d="M3 12l0 .01"></path><path d="M4.21 16.5l0 .01"></path><path d="M7.5 19.79l0 .01"></path><path d="M12 21l0 .01"></path><path d="M16.5 19.79l0 .01"></path><path d="M19.79 16.5l0 .01"></path><path d="M21 12l0 .01"></path><path d="M19.79 7.5l0 .01"></path><path d="M16.5 4.21l0 .01"></path><path d="M12 3l0 .01"></path></svg>)
    } else if (status === "In progress") {
        return (<svg stroke="currentColor" fill="rgb(245, 200, 66)" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "rgb(245, 200, 66)" }}><path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path></svg>)
    } else if (status === "Done") {
        return (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "rgb(56, 75, 181)" }}> <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg >)
    }
    return (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "color": "gray" }}><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path></svg>)
}

const sortByPriority = (data) => {
    return data.sort((a, b) => {
        if (a.priority > b.priority) {
            return -1
        } else if (a.priority < b.priority) {
            return 1
        } else {
            return 0
        }
    })
}

const sortByTitle = (data) => {
    return data.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // Convert titles to uppercase for case-insensitive comparison
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
}

function addUserInfoToTickets(tickets, users) {
    // Create a map for quick user lookup based on user ID
    const userMap = new Map(users.map(user => [user.id, { name: user.name, available: user.available }]));

    // Update each ticket with user information
    const updatedTickets = tickets.map(ticket => {
        const user = userMap.get(ticket.userId);
        if (user) {
            return { ...ticket, userName: user.name, userAvailable: user.available, userColor: getRandomColor(user.name) };
        }
        return ticket;
    });

    return updatedTickets;
}

const getLetters = (name) => {
    const names = name.split(" ");
    if (names.length === 1) {
        return names[0][0].toUpperCase();
    }
    return names[0][0].toUpperCase() + names[1][0].toUpperCase();
}

const getRandomColor = () => {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');

    // Create a hex color string in the format "#RRGGBB"
    const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

    return hexColor;
}


export { priorityIcon, StatusIcon, sortByPriority, sortByTitle, addUserInfoToTickets, getLetters }