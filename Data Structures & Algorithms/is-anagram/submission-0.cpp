class Solution {
public:
    bool isAnagram(string s, string t) {
        // to determine if anagram, we can put
        // the number of characters in each string and compare
        // number of occurences.
        if (s.length() != t.length()) {
            return false;
        }

        unordered_map<char, int> countS;
        unordered_map<char, int> countT;

        for (int i = 0; i < s.length(); i++) {
            countS[s[i]]++;
            countT[t[i]]++;
        }

        return countS == countT;
    }
};
