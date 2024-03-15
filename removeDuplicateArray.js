// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

var removeDuplicates = function(nums) {
    const sortedNums = [];
    for (let i = 0; i < nums.length; i++) {
       
        if (sortedNums.filter(elem => elem === nums[i]).length >= 2) {
            continue;
        }

        
        if (!sortedNums.includes(nums[i])) {
            sortedNums.push(nums[i]);
        } else {
         
            sortedNums.push(nums[i]);
        }
    }

    nums.length = 0; 
    nums.push(...sortedNums);
    return nums;
    }
console.log(removeDuplicates([0,0,0,1,1,1,1,2,2,2,3,3]));

var rmvDuplicates = function(nums) {
    const counts = {}; // Hashmap to store counts of each element
    const result = []; // Array to store the result

    // Count occurrences of each element
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] <= 2) {
            result.push(num); // Include the element in the result if it occurs less than or equal to 2 times
        }
    }

    // Update the original array with the new content
    nums.length = 0; // Clear the original array
    nums.push(...result); // Push elements from the result back to nums
    return nums;
};
console.log(rmvDuplicates([0,0,0,1,1,1,1,2,2,2,3,3]),"2nd approach");


