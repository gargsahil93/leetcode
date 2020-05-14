/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.obj = {
        exist: false
    };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let insert = (obj, i) => {
        if (obj[word[i]] === undefined) {
            obj[word[i]] = {
                exist: false
            };
        }
        if (word.length === i+1) obj[word[i]].exist = true;
        else insert(obj[word[i]], i+1);
    };
    insert(this.obj, 0);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let search = (obj, i) => {
        if (obj[word[i]] === undefined) return false;
        if (word.length === i+1) return obj[word[i]].exist;
        return search(obj[word[i]], i+1);
    }
    return search(this.obj, 0);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.startsWith = function (word) {
    let search = (obj, i) => {
        if (obj[word[i]] === undefined) return false;
        if (word.length === i+1) return true;
        return search(obj[word[i]], i+1);
    }
    return search(this.obj, 0);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */