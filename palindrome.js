const isPalindrome = function(x) {
    x = x.toString();
    arrayX = x.split('');
    reverseX= arrayX.reverse();
    reverseX = reverseX.join('');
    reverseX = parseInt(reverseX);
    x = parseInt(x);

    if(x === reverseX) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isPalindrome(121);
