class Solution {
public:

    string encode(vector<string>& strs) {
        string res;

        for (const string& s : strs) {
            res += to_string(s.size()) + "#" + s;
        }
        // after the loop res will look like:
        // 1#i4#love3#you

        return res;
    }

    vector<string> decode(string s) {
        vector<string> res;
        int i = 0;

        while (i < s.size()) {
            int j = i;

            // while we're still in a word
            while (s[j] != '#') {
                j++;
            }

            // once we have length of word
            int length = stoi(s.substr(i, j - i));
            i = j + 1; // index of next word
            j = i + length; // 

            res.push_back(s.substr(i, length));
            i = j;
        }
        return res;
    }
};
