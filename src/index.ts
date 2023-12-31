
// 同じ文字列があったら一致した文字列を返す
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    strs.slice(1).forEach((str: string) => {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    });

    return prefix;
};

// console.log(longestCommonPrefix(["aflower","eflow","tflight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));

// ローマ数字をアラビア数字に変換する
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
    s.split('').forEach((currentChar: string, index: number):void => {
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

// console.log(romanToIntWithForEach("III"));
// console.log(romanToIntWithForEach("LVIII"));
// console.log(romanToIntWithForEach("MCMXCIV"));


// 2個配列をくっつけてソートして中央値を返す
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const center = Math.floor(nums.length / 2);

    if (nums.length % 2 === 0) {
        return (nums[center - 1] + nums[center]) / 2;
    } else {
        return nums[center];
    }

};

// console.log(findMedianSortedArrays([1,3], [2]));
// console.log(findMedianSortedArrays([1,2], [3,4]));

// 数字が逆になっても同じならtrueを返す
function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const reversed = Number(x.toString().split('').reverse().join(''));
    return x === reversed;
};

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(-101));


// 組み合わせが正しい括弧かどうかを判定する
function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (bracketMap[current]) {
            stack.push(current);
        } else {
            const last: string | undefined = stack.pop(); // Use union type to handle possible undefined
            if (last === undefined || bracketMap[last] !== current) {
                return false;
            }
        }
    }

    return stack.length === 0;

};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("]"));

// ソートされた配列から重複を削除する
function removeDuplicates(nums: number[]): number {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i ++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
