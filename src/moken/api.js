import Mock from "mockjs";
Mock.mock(/\/user\/login/, "get", (config) => {
  console.log(config);
  return {
    data: {
      username: "111",
      password: "111",
    },
  };
});
var control = [];
for (let i = 0; i < 10; i++) {
  control.push({
    number: Mock.mock('@tld()'),
    mark: Mock.mock('@county(true)'),
    gate: Mock.mock('@county(true)'),
    direction: Mock.mock('@cname'),
    time: Mock.mock('@date("yyyy-MM-dd")'),
  })
}
Mock.mock('/user/control', 'get', config => {
  console.log(config);
  return {
    data: control
  }
})
var derive = [];
for (var i = 0; i < 10; i++) {
  derive.push({
    number: Mock.mock('@tld()'),
    date: Mock.mock('@date("yyyy-MM-dd")'),
    name: Mock.mock('@county(true)'),
    PM2: Mock.mock('@cname'),
    PM10: Mock.mock('@cname'),
    TSP: Mock.mock("@cname"),
    online: Mock.mock('@tld()'),
    overproof: Mock.mock('@region()'),
    total: Mock.mock('@tld()'),
    operate: Mock.mock('@zip()')
  })
}
Mock.mock('/user/derive', "get", config => {
  console.log(config);
  return {
    data: derive
  }
})
// var name = [];
// for (let i = 0; i < 10; i++) {
//   name.push({
//     a: Mock.mock("@cname"),
//     b: Mock.mock("@cname"),
//     c: Mock.mock("@cname"),
//     d: Mock.mock("@cname"),
//     e: Mock.mock("@cname"),
//     f: Mock.mock("@cname"),
//     g: Mock.mock("@cname"),
//     h: Mock.mock("@cname"),
//     i: Mock.mock("@cname"),
//     j: Mock.mock("@cname"),
//     k: Mock.mock("@cname"),
//     l: Mock.mock("@cname"),
//   });
// }
// var firstname = [];
// for (let i = 0; i < 10; i++) {
//   firstname.push({
//     a: Mock.mock("@first"),
//     b: Mock.mock("@first"),
//     c: Mock.mock("@first"),
//     d: Mock.mock("@first"),
//     e: Mock.mock("@first"),
//     f: Mock.mock("@first"),
//     g: Mock.mock("@first"),
//     h: Mock.mock("@first"),
//     i: Mock.mock("@first"),
//     j: Mock.mock("@first"),
//     k: Mock.mock("@first"),
//     l: Mock.mock("@first"),
//   });
// }
// Mock.mock("/user/home", "get", (config) => {
//   console.log(config);
//   return {
//     data: name,
//   };
// });
// Mock.mock("/user/firstname", "get", (config) => {
//   console.log(config);
//   return {
//     data: firstname,
//   };
// });
