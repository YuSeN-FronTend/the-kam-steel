import Mock from "mockjs";
// Mock.mock("/login", "POST", {
//   ret: 0,
//   data: {
//     name: "管理员",
//     phone: "15533570808",
//     account: "wjc",
//     password: "000919",
//     photo:
//       "https://img0.baidu.com/it/u=101483086,2641300916&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
//     role: "1",
//     token: "admin",
//   },
// });
Mock.mock(/\/user\/login/, "get", (config) => {
    console.log(config);
    return {
        data: {
            username: "ysnb",
            password: "zjzjzj",
        },
    };
});
var name = []
for (let i = 0; i < 10; i++) {
    name.push({
        a: Mock.mock('@cname'),
        b: Mock.mock('@cname'),
        c: Mock.mock('@cname'),
        d: Mock.mock('@cname'),
        e: Mock.mock('@cname'),
        f: Mock.mock('@cname'),
        g: Mock.mock('@cname'),
        h: Mock.mock('@cname'),
        i: Mock.mock('@cname'),
        j: Mock.mock('@cname'),
        k: Mock.mock('@cname'),
        l: Mock.mock('@cname'),
    })
}
var firstname = []
for (let i = 0; i < 10; i++) {
    firstname.push({
        a: Mock.mock('@first'),
        b: Mock.mock('@first'),
        c: Mock.mock('@first'),
        d: Mock.mock('@first'),
        e: Mock.mock('@first'),
        f: Mock.mock('@first'),
        g: Mock.mock('@first'),
        h: Mock.mock('@first'),
        i: Mock.mock('@first'),
        j: Mock.mock('@first'),
        k: Mock.mock('@first'),
        l: Mock.mock('@first'),
    })
}
Mock.mock("/user/home", "get", (config) => {
    console.log(config);
    return {
        data: name
    };
});
Mock.mock("/user/firstname", "get", (config) => {
    console.log(config);
    return {
        data: firstname
    };
});