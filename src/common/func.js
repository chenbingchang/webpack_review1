/**
 * 防抖
 * @param {Function} fn 实际要执行的函数
 * @param {number} delay 延迟时间，单位毫秒，默认200
 * @return {Function} 返回防抖函数
 */
function debounced(fn, delay = 200) {
  // 定时器
  let timer;

  return function() {
    // 保存函数调用时的上下文和参数，传递给fn
    let context = this;
    let args = arguments;
    // 如果定时器已存在则先清除，保证不执行fn
    clearTimeout(timer);
    // 当返回的函数被最后一次调用，即过了delay毫秒后执行fn
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * 节流
 * @param {Function} fn 实际要执行对函数
 * @param {number} threshhold 执行间隔，单位毫秒，默认250
 * @return {Function} 返回一个“节流”函数
 */
function throttle(fn, threshhold = 250) {
  //记录上次执行对时间
  let last;
  // 定时器
  let timer;

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function() {
    // 保存函数调用时的上下文和参数，传递给fn
    let context = this;
    let args = arguments;
    let now = +new Date();
    // 如果距离上次执行的时间小于threshhold那么就放弃执行fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer);
      // 保证在当前时间区间结束后，再执行一次fn
      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/**
 * 获取当前日期时间，格式：yyyy-MM-dd HH:mm:ss
 * @param {number} tiems 时间戳，可选
 * @param {string} timeType 时间的格式。H，小时; I,小时：分钟; S，小时:分钟:秒; 默认S
 */
function curDateTime(tiems, timeType = 'S') {
  let d = tiems ? new Date(tiems) : new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate(); 
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  if(month < 10) {
    month = "0"  + month
  }
  if(date < 10) {
    date = "0"  + date
  }
  if(hours < 10) {
    hours = "0"  + hours
  }
  if(minutes < 10) {
    minutes = "0"  + minutes
  }
  if(seconds < 10) {
    seconds = "0"  + seconds
  }
  
  let timeTxt = ''
  switch(timeType.toLocaleUpperCase()) {
    case 'H':
      timeTxt = `${hours}`
      break
    case 'I':
      timeTxt = `${hours}:${minutes}`
      break
    case 'S':
      timeTxt = `${hours}:${minutes}:${seconds}`
      break
    default: 
      timeTxt = `${hours}:${minutes}:${seconds}`
  }

  let result = `${year}-${month}-${date} ${timeTxt}`
  return result
}

function sayHello() {
  console.log('公共代码，sayHello')
}

/**
 * 判断删除的数据是否是最后一页最后一条数据，是则查询页码要-1
 * @param {number} total 总数
 * @param {number} pageSize 每页数
 * @param {number} pageIndex 当前页码
 * @returns {Boolean} true: 是；false： 不是;
 */
function isLastPageLastData(total, pageSize, pageIndex) {
  // 当前页码是1，则不用判断
  if(pageIndex === 1) {
    return false
  }

  // 最后一页
  if(Math.ceil(total / pageSize) === pageIndex) {
    // 最后一条
    if(total % pageSize === 1) {
      return true
    }
  }

  return false
}

export { debounced, throttle, curDateTime, isLastPageLastData, sayHello };
