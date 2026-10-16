const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


  test('verify user is not in list before add(), then added properly', () => {
    let user = new User(2001, "Maria", "maria@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

//tareass
test('remove() does not change list when removing a user not in the list', () => {
    let unaddedUser = new User(9999, "Ghost", "ghost@generation.org");
    const initialLength = userController.getUsers().length;
    userController.remove(unaddedUser);
    expect(userController.getUsers()).not.toContain(unaddedUser);
    expect(userController.getUsers().length).toBe(initialLength);
});

test('findByEmail() finds an existing user by email', () => {
    let user = new User(3001, "Carlos", "carlos@generation.org");
    userController.add(user);
    expect(userController.findByEmail("carlos@generation.org")).toEqual(user);
});

test('findByEmail() returns undefined when email does not exist', () => {
    expect(userController.findByEmail("noexiste@generation.org")).toBeUndefined();
});

test('findById() finds an existing user by ID', () => {
    let user = new User(4001, "Lucia", "lucia@generation.org");
    userController.add(user);
    expect(userController.findById(4001)).toEqual(user);
});

test('findById() returns undefined when ID does not exist', () => {
    expect(userController.findById(8888)).toBeUndefined();
});
