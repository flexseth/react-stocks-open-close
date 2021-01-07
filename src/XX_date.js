
var stub = 'https://api.polygon.io/v1/open-close/AAPL/'

var apiKey = '?apiKey=sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2''

var year = getFullYear()
var month = getMonth() 
var day = getDate

var dateFragment = year + '-' + month + '-' + day

dateFragment = stub .= dateFragment .= apiKey

