// Code your solutions in this file
const writeCards = (msgName, msgEvent) => {
    let message = []

    for(let i = 0; i < msgName.length; i++) {
    console.log(msgName[i]);
    message.push(`Thank you, ${msgName[i]}, for the wonderful ${msgEvent} gift!`);
    }

    return message;
}

const countDown = () => {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--)
    }
    return countDown;
}