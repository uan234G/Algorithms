Algorithms in JavaScript

Big O:
"To assist in the calculus of runtime complexities, we approximate the scalability of an algorithm by extrapolating its input sizes toward infinity before counting the number of operations required. At this worst-case runtime upper bound, we can drop coefficients and additive terms, retaining only factors that dominate the function. Consequently, just a few categories can describe the scalability of almost any algorithm.
The most optimum algorithm scales in constant time and space. This means it does not care at all about the growth of its inputs. Next best is logarithmic time or space, then linear, linearithmic, quadratic, and exponential. The worst is factorial time or space. In Big-O notation:"

    Constant: O(1)
    Logarithmic: O(log n)
    Linear: O(n)
    Linearithmic: O(n log n)
    Quadratic: O(n²)
    Expontential: O(2^n)
    Factorial: O(n!)

Popular Algorithm Questions:
1. String Reversal      
        Given a string of characters as input, write a function that returns it with the characters reversed.
2. Palindrome
        A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.    
<!-- 3. Integer Reversal
        Given an integer, reverse the order of the digits.
4. Fizz Buzz
        Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
5. Max Character
        Given a string of characters, return the character that appears the most often. -->