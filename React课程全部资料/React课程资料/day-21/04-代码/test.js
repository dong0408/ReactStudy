// 模拟的异步请求
// promise pending fullfiled rejec
function originFetch(url) {
  return new Promise((resolve, reject) => {
    console.log('fetch', url)
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

// 请求节流 等第一个请求发完，才能发第二个，才能发第三个
// Promise的链式  Promise.then()
// 思路：fetchOne函数需要有一个标记 有没有链式调用
function fetchOne(url) {
  // 如果fetchOne没有chain属性
  if (!fetchOne.chain) {
    fetchOne.chain = originFetch(url)
  } else {
    fetchOne.chain = fetchOne.chain.then(() => {
      return originFetch(url)
    })
  }
}

fetchOne(1)
fetchOne(2)
fetchOne(3)
fetchOne(4)
fetchOne(5)
