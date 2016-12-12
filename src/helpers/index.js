//helpers

const users = ['John', 'David', 'Angie', 'Makayla', 'Kathryn', 'Steven', 'Thomas', 'Mary', 'Cynthia', 'James'];

const randomFromList = (list) => list[list.length * Math.random() | 0];

export function setMessageData(username, text) {
  return {
    admin: false,
    user: username,
    text,
    timestamp: Math.floor((new Date()).getTime() / 1000)
  };
};

export function randomUsername() {
  return randomFromList(users);
}
