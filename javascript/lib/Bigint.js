module.exports = function BigInt(string) {

    if (typeof string !== "String") {
        string = String(string);
    }

    this.value = string;

    this.add = function BigInt_add(other) {
        if (this.value.length >= other.value.length) {
            var digits_difference = this.value.length - other.value.length;
            while (digits_difference > 0) {
                other.value = '0' + other.value;
                digits_difference--;
            }
        } else {
            return other.add(this);
        }
        var me_last_digit, other_last_digit, sum,
            carry = 0,
            result = '';
        for (var i = other.value.length - 1; i>=0; i--) {
            me_last_digit = parseInt(this.value.substr(i, 1));
            other_last_digit = parseInt(other.value.substr(i, 1));
            sum = me_last_digit + other_last_digit + carry;
            carry = parseInt(sum / 10);
            result = (sum % 10) + result;
        }
        result = carry > 0 ? '1' + result : result;
        return new BigInt(result);
    };

    this.multiply = function BigInt_multiply(other) {

    };

    this.pow = function BigInt_pow(other) {

    };

    this.digits = function() {
        return this.value.length;
    };

};