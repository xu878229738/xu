
// 已经npm 浏览器驱动
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


// 一下是有路径 并且配置环境变量pach就可以用  但是需要下载浏览器驱动器
// https://chromedriver.storage.googleapis.com/index.html 下载驱动的网址
// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
//                 .forBrowser('chrome')
//                 .build();






var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
driver.get('http://www.baidu.com');