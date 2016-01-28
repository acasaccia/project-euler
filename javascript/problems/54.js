// In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:
//
//    High Card: Highest value card.
//    One Pair: Two cards of the same value.
//    Two Pairs: Two different pairs.
//    Three of a Kind: Three cards of the same value.
//    Straight: All cards are consecutive values.
//    Flush: All cards of the same suit.
//    Full House: Three of a kind and a pair.
//    Four of a Kind: Four cards of the same value.
//    Straight Flush: All cards are consecutive values of same suit.
//    Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
//
// The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
//
// If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of
// eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of
// queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next
// highest cards are compared, and so on.
//
// Consider the following five hands dealt to two players:
//
// Hand 	Player 1	 	    Player 2	 	    Winner
// 1	 	5H 5C 6S 7S KD      2C 3S 8S 8D TD      Player 2
//          Pair of Fives       Pair of Eights
//
// 2	 	5D 8C 9S JS AC      2C 5C 7D 8S QH      Player 1
//          Highest card Ace    Highest card Queen
//
// 3	 	2D 9C AS AH AC      3D 6D 7D TD QD      Player 2
//          Three Aces          Flush with Diamonds
//
// 4	 	4D 6S 9H QH QC      3D 6D 7H QD QS      Player 1
//          Pair of Queens      Pair of Queens
//          Highest card Nine   Highest card Seven
//
// 5	 	2H 2D 4C 4D 4S      3C 3D 3S 9S 9D      Player 1
//          Full House          Full House
//          With Three Fours    with Three Threes
//
// The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten
// cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You
// can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific
// order, and in each hand there is a clear winner.
//
// How many hands does Player 1 win?

"use strict";

var hands = require("fs").readFileSync("problems/input/p054_poker.txt", "utf-8").split("\n");

var p1_won = 0;
var ties = 0;

var values = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13,
    'A': 14 };

var scores = [ '', 'high card', 'pair', 'two pairs', 'three of a kind', 'straight', 'flush', 'full house',
    'four of a kind', 'straight flush', 'royal flush' ];

var results = { '1': '>', '0': '=', '-1': '<' };

while (hands.length) {
    var hand = hands.shift().split(" ");
    var hand_1 = hand.splice(0, 5);
    var hand_2 = hand;
    var p1_hand = new Hand(hand_1);
    var p2_hand = new Hand(hand_2);
    var result = compare(p1_hand, p2_hand);
    if (result === 1) {
        p1_won++;
    }
    if (result === 0) {
        ties++;
    }
    console.log("%s %s %s", toString(p1_hand), results[result], toString(p2_hand));
}

console.log("P1 victories: %d", p1_won);
console.log("Ties: %d", ties);

function compare(hand_1, hand_2) {
    var score_1 = score(hand_1);
    var score_2 = score(hand_2);
    //console.log("%s -> %s", toString(hand_1), scores[score_1]);
    //console.log("%s -> %s", toString(hand_2), scores[score_2]);
    if (score_1 > score_2) {
        return 1;
    }
    if (score_1 === score_2) {
        return solve_tie(hand_1, hand_2, score_1);
    }
    return -1;
}

function toString(hand) {
    var cards = [];
    hand.forEach(function(card){
        cards.push(card.value + card.suit);
    });
    return cards.join(" ");
}

function solve_tie(hand_1, hand_2, score) {
    while (hand_1.length) {
        var high_card_1 = hand_1.pop();
        var high_card_2 = hand_2.pop();
        if (high_card_1.value > high_card_2.value) {
            return 1;
        }
        if (high_card_1.value < high_card_2.value) {
            return -1;
        }
    }
    return 0;
}

function filter_value(hand, value) {
    return hand.filter(function(card) {
        return card.value !== value;
    });
}

function score(hand) {
    if (flush(hand) && straight(hand) && high_card(hand) === 14) {
        return 10;
    } else if (flush(hand) && straight(hand)) {
        return 9;
    } else if (of_kind(4, hand)) {
        return 8;
    } else if (full_house(hand)) {
        return 7;
    } else if (flush(hand)) {
        return 6;
    } else if (straight(hand)) {
        return 5;
    } else if (of_kind(3, hand)) {
        return 4;
    } else if (two_pairs(hand)) {
        return 3;
    } else if (of_kind(2, hand)) {
        return 2;
    } else return 1;
}

function flush(hand) {
    var suit = hand[0].suit;
    for (var i=1; i<5; i++) {
        if (hand[i].suit !== suit) {
            return false;
        }
    }
    return true;
}

function of_kind(count, hand) {
    var streak = 0;
    var current_value;
    for (var i=0; i<hand.length; i++) {
        if (!current_value) {
            current_value = hand[i].value;
            streak++;
        } else {
            if (hand[i].value === current_value) {
                streak++;
            } else {
                current_value = hand[i].value;
                streak = 1;
            }
        }
        if (streak >= count) {
            var of_kind_cards = hand.splice(i+1-count, count);
            while (of_kind_cards.length) {
                hand.push(of_kind_cards.pop());
            }
            return true;
        }
        if (streak+hand.length-1-i < count) {
            break;
        }
    }
    return false;
}

function straight(hand) {
    var previous_value;
    for (var i=0; i<hand.length; i++) {
        if (previous_value && hand[i].value !== previous_value + 1) {
            return false;
        }
        previous_value = hand[i].value;
    }
    return true;
}

function high_card(hand) {
    return hand[hand.length-1].value;
}

function full_house(hand) {
    if (of_kind(3, hand)) {
        return hand[0].value === hand[1].value;
    }
}

function two_pairs(hand) {
    if (of_kind(2, hand)) {
        var rest_of_hand = hand.slice(0, 3);
        if (of_kind(2, rest_of_hand)) {
            hand = rest_of_hand.concat(hand.slice(3, 5));
            if (hand[1].value > hand[3].value) {
                hand = hand.slice(0, 1).concat(hand.slice(3, 5), hand.slice(1, 3));
            }
            return hand;
        }
    }
    return false;
}

function Hand(array) {
    var cards = [];
    array.forEach(function(item){
        cards.push(new Card(item));
    });
    return cards.sort(function(a, b) {
        return a.value > b.value;
    });
};

function Card(string) {
    this.value = values[string.charAt(0)];
    this.suit = string.charAt(1);
};