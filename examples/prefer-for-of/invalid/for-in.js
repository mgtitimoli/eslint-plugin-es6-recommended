var arr = [ "one", "two", "three" ];

for (var i in arr) if (arr.hasOwnProperty(i)) {
    console.log(arr[i]);
}