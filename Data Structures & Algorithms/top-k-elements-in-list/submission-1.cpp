class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // frequency map
        unordered_map<int, int> count;
        for (int num : nums) {
            count[num]++;
        }

        priority_queue<pair<int, int>, 
            vector<pair<int, int>>, greater<pair<int, int>>> heap;

        // populate the heap and it will automatically sort
        for (auto& entry: count) {
            heap.push({ entry.second, entry.first });
            // limit the heap so that it doesn't get bigger than K
            // why? When we construct the result
            // we want to return top K elements
            if (heap.size() > k) {
                heap.pop();
            }
        }

        vector<int> result;
        for (int i = 0; i < k; i++) {
            // second here represents the element
            // primary is the number of occurences
            result.push_back(heap.top().second);
            heap.pop();
        }

        return result;
    }
};
