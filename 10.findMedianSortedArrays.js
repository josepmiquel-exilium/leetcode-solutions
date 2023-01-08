const findMedianSortedArrays = (nums1, nums2) => {
    const newArr = [...nums1, ...nums2].sort((a, b) => a - b);

    if (newArr.length % 2 !== 0) return newArr[Math.floor(newArr.length / 2)];
    return (newArr[newArr.length / 2] + newArr[newArr.length / 2 - 1]) / 2;
};

console.log(findMedianSortedArrays([3], [-2, -1]));
