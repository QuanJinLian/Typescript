const personWathcer = watch({
    firstName: "Hong",
    lastName: "GilDong",
    age: "55",
});
personWathcer.on("firstNameChanged", (oldValue, newValue) => { });
const animalWater = watch({
    name: "duck",
    canSwim: true,
    sound: "꽥꽥",
});
animalWater.on("canSwimChanged", (oldValue, newValue) => { });
