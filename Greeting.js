const now = new Date();
const currentHour = now.getHours();
let greeting = 'Welcome to our website!'
switch (true) {
    case (currentHour >= 5 && currentHour < 12):
        alert("Good morning! " + greeting);
        break;
    case (currentHour >= 12 && currentHour < 17):
        alert("Good afternoon! " + greeting);
        break;
    case (currentHour >= 17 && currentHour < 21):
        alert("Good evening! " + greeting);
        break;
    case (currentHour >= 21 || currentHour < 5):
        alert("Good night! " + greeting);
        break;
}