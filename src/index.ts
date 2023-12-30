function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (const str of strs.slice(1)) {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["aflower","eflow","tflight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

function romanToIntWithForEach(s: string): number {
    const romanMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    // 文字列を一文字ずつの配列に分割し、forEachメソッドで処理
    s.split('').forEach((currentChar, index) => {
        const current = romanMap[currentChar];
        const nextChar = s[index + 1];
        const next = romanMap[nextChar];

        if (next !== undefined && current < next) {
            result += next - current;
        } else {
            result += current;
        }
    });

    return result;
};

console.log(romanToIntWithForEach("III"));
console.log(romanToIntWithForEach("LVIII"));
console.log(romanToIntWithForEach("MCMXCIV"));


function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const center = Math.floor(nums.length / 2);

    if (nums.length % 2 === 0) {
        return (nums[center - 1] + nums[center]) / 2;
    } else {
        return nums[center];
    }

};

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));

function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const reversed = Number(x.toString().split('').reverse().join(''));
    return x === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
