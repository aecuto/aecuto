const array = [1, 2, 3, 4, 5];
const object = { name: "a", age: "25" };

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

// await
const forOf = async () => {
  for (const item of array) {
    await sleep();
    console.log(item);
  }
};

const forIn = async () => {
  for (const item in object) {
    await sleep();
    console.log(item);
  }
};

const whileLoop = async () => {
  let i = 0;
  while (i < array.length) {
    await sleep();
    console.log(array[i]);
    i++;
  }
};

const doWhileLoop = async () => {
  let i = 0;

  do {
    await sleep();
    console.log(array[i]);
    i++;
  } while (i < array.length);
};

const forLoop = async () => {
  for (let i = 0; i < array.length; i++) {
    await sleep();
    console.log(array[i]);
  }
};

// not await
const forEach = async () => {
  array.forEach(async (item) => {
    await sleep();
    console.log(item);
  });
};

const map = async () => {
  array.map(async (item) => {
    await sleep();
    console.log(item);
  });
};

const start = async () => {
  console.log("before");
  await doWhileLoop();
  console.log("after");
};

start();
