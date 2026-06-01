class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;

        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];

            if (seen.count(complement)) {
                return { seen[complement], i };
            }

            seen[nums[i]] = i;
        }

        return {};
    }
};

// i = 1
// nums[i] = 4
// complement = 3
// { 3: was seen at index 0, } is 3 in this set?
// Yes, 3 was seen at index 0,
// and the current nums[i] is at 1
// so return [0, 1]

