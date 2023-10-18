let data = {
    users: [
        { id: 1, name: "Biba", age: 18, salary: 200 },
        { id: 2, name: "Boba", age: 23, salary: 560 },
        { id: 3, name: "Hopa", age: 34, salary: 1000 },
        { id: 4, name: "Topa", age: 33, salary: 456 },
        { id: 5, name: "Moba", age: 65, salary: 100 },
        { id: 6, name: "Rota", age: 25, salary: 876 },
    ],
    filteredUsers: []
};

function renderUsers() {
    const usersList = document.getElementById("users-list");
    usersList.innerHTML = "";

    data.users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = "Name: " + user.name + " Age: " + user.age + " Salary: " + user.salary;
        usersList.appendChild(listItem);
    });
}

document.getElementById("button1").addEventListener("click", () => {
    const name = prompt("Enter a username:");
    const age = parseInt(prompt("Enter the user's age:"));
    const salary = parseInt(prompt("Enter the user's salary:"));

    const newUser = { id: data.users.length + 1, name, age, salary };
    data.users = _.concat(data.users, newUser);
    renderUsers();
});

document.getElementById("button2").addEventListener("click", () => {
    const index = parseInt(prompt("Enter the zip code of the user you want to delete:"));

    if (index >= 0 && index < data.users.length) {
        data.users.splice(index, 1);
        renderUsers();
    } else {
        alert("Invalid user index.");
    }
});

document.getElementById("button3").addEventListener("click", () => {
    data.users = _.sortBy(data.users, 'salary');
    renderUsers();
});

document.getElementById("button4").addEventListener("click", () => {
    data.users = _.sortBy(data.users, 'age');
    renderUsers();
});

document.getElementById("button5").addEventListener("click", () => {
    const averageAge = _.meanBy(data.users, 'age');
    alert(`Середній вік користувачів: ${averageAge}`);
});

document.getElementById("button6").addEventListener("click", () => {
    const totalSalary = _.sumBy(data.users, 'salary');
    alert(`The total amount of salaries of all users: ${totalSalary}`);
});

document.getElementById("button7").addEventListener("click", () => {
    const searchName = prompt("Enter the name of the user you are looking for:");
    const foundUser = _.find(data.users, { name: searchName });
    if (foundUser) {
        alert(`Name: ${foundUser.name}, Age: ${foundUser.age}, Salary: ${foundUser.salary}`);
    } else {
        alert("Invalid user.");
    }
});

document.getElementById("button8").addEventListener("click", () => {
    const exchangeRate = 0.85;
    data.users = _.map(data.users, user => {
        user.salary = Math.round(user.salary * exchangeRate);
        return user;
    });
    renderUsers();
});

document.getElementById("button9").addEventListener("click", () => {
    const searchLetter = prompt("Enter a letter to search for users:");
    const usersWithLetter = _.filter(data.users, user => user.name.charAt(0).toLowerCase() === searchLetter.toLowerCase());
    if (usersWithLetter.length > 0) {
        alert(`Users with names starting with "${searchLetter}": ${usersWithLetter.map(user => user.name).join(', ')}`);
    } else {
        alert(`Users with names starting with "${searchLetter}", not found.`);
    }
});

document.getElementById("button10").addEventListener("click", () => {
    renderUsers();
});

renderUsers();
