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

// 12  34
function fetchTwo(url) {
  if (!fetchTwo.arr) {
    fetchTwo.arr = []
  }
  fetchTwo.arr.push(url)
  setTimeout(() => {
    let temp = []
    temp = fetchTwo.arr.splice(0, 2)
    // console.log(temp)
    if (!fetchTwo.chain) {
      fetchTwo.chain = Promise.all(temp.map((url) => originFetch(url)))
    } else {
      fetchTwo.chain = fetchTwo.chain.then(() =>
        Promise.all(temp.map((url) => originFetch(url)))
      )
    }
  }, 0)
}

fetchTwo(1)
fetchTwo(2)
fetchTwo(3)
fetchTwo(4)
fetchTwo(5)
