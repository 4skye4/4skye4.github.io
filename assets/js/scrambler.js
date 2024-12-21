// Largely taken from https://github.com/mathiasbynens/rot.
// (function ($) {
    const rot = (charRot, numRot, str) => {
        var numbers = "0123456789";
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var regexNumber = /[0-9]/;
        var regexLowercase = /[a-z]/;
        var regexUppercase = /[A-Z]/;

        str = String(str);

        if (charRot < 0) {
            charRot += 26;
        }
        if (numRot < 0) {
            numRot += 10;
        }
        var length = str.length; // note: no need to account for astral symbols
        var index = -1;
        var result = "";
        var character;
        var currentPosition;
        var shiftedPosition;
        while (++index < length) {
            character = str.charAt(index);
            if (regexNumber.test(character)) {
                currentPosition = numbers.indexOf(character);
                shiftedPosition = (currentPosition + numRot) % 10;
                result += numbers.charAt(shiftedPosition);
            } else if (regexLowercase.test(character)) {
                currentPosition = lowercase.indexOf(character);
                shiftedPosition = (currentPosition + charRot) % 26;
                result += lowercase.charAt(shiftedPosition);
            } else if (regexUppercase.test(character)) {
                currentPosition = uppercase.indexOf(character);
                shiftedPosition = (currentPosition + charRot) % 26;
                result += uppercase.charAt(shiftedPosition);
            } else {
                result += character;
            }
        }
        return result;
    };

    const rot18 = (str) => rot(13, 5, str);


    const info =
        "                <h5>Para młoda</h5>\n" +
        "            <ul>\n" +
        "                <li>Dlyocl epw. 085 393 532</li>\n" +
        "                <li>Clqlł epw. 020 212 179</li>\n" +
        "            </ul>\n" +
        "            <p>W dniu uroczystości prosimy o kontakt z&nbsp;Rodzicami lub&nbsp;Świadkami</p>\n" +
        "            <h5>Świadkowie</h5>\n" +
        "            <ul>\n" +
        "                <li>Xtnslwtyl epw. 054 018 307</li>\n" +
        "                <li>Trzc epw. 020 705 138</li>\n" +
        "            </ul>\n" +
        "            <h5>Rodzice</h5>\n" +
        "            <ul>\n" +
        "                <li>Cpylel epw. 151 379 201</li>\n" +
        "                <li>Thzyl epw. 056 516 248</li>\n" +
        "                <li>Lwpvdlyopc epw. 059 719 170</li>\n" +
        "            </ul>";

    // const encodedEmail = rot(13, 3, "mail@example.com");
    // const decodedMail = rot(-13, -3, encodedEmail);
    // console.log(encodedEmail)
    // console.log(decodedMail);
// })(jQuery);



// module.exports = {
//     rot,
//     encode: rot18,
//     decode: rot18,
// };
