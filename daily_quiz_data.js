/**
 * Daily CBSE Mathematics Quiz Database & Engine
 * Complies with NCERT Textbooks & CBSE Curriculum
 */

const DAILY_QUIZ_DATABASE = {
  // Formula of the Day Pool (Formatted with proper LaTeX)
  formulaOfDay: [
    {
      formula: "$$a^2 - b^2 = (a - b)(a + b)$$",
      meaning: "Difference of Two Squares Identity",
      variables: "$a, b$: real numbers or algebraic expressions",
      example: "$$99^2 - 1^2 = (99 - 1)(99 + 1) = 98 \\times 100 = 9800$$",
      shortcut: "Instead of squaring large numbers, convert into sum and difference factors.",
      common_mistake: "Writing $(a - b)^2$ instead of $(a - b)(a + b)$."
    },
    {
      formula: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
      meaning: "Quadratic Formula for roots of $ax^2 + bx + c = 0$",
      variables: "$a, b, c$: coefficients where $a \\neq 0$",
      example: "For $x^2 - 5x + 6 = 0$: $$x = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2} \\implies x = 3 \\text{ or } x = 2$$",
      shortcut: "Check discriminant $D = b^2 - 4ac$ first. If $D < 0$, no real roots exist.",
      common_mistake: "Dividing only the $\\sqrt{D}$ part by $2a$ instead of the full numerator $(-b \\pm \\sqrt{D})$."
    },
    {
      formula: "$$a_n = a + (n - 1)d$$",
      meaning: "N-th Term of an Arithmetic Progression (AP)",
      variables: "$a$: first term, $d$: common difference, $n$: term number",
      example: "For AP $3, 7, 11, \\dots$: $$a_{10} = 3 + (10 - 1) \\times 4 = 3 + 36 = 39$$",
      shortcut: "Common difference $d = a_2 - a_1$. $a_n$ is linear in $n$: $d \\cdot n + (a - d)$.",
      common_mistake: "Using $n$ instead of $(n - 1)$ when multiplying by $d$."
    },
    {
      formula: "$$\\sin^2\\theta + \\cos^2\\theta = 1$$",
      meaning: "Fundamental Pythagorean Trigonometric Identity",
      variables: "$\\theta$: any angle measure",
      example: "If $\\sin\\theta = \\frac{3}{5}$, then $\\cos\\theta = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$ (in Q1)",
      shortcut: "Use right triangle $3-4-5$ or $5-12-13$ ratios directly to save calculation time.",
      common_mistake: "Confusing $\\sin^2\\theta + \\cos^2\\theta = 1$ with $1 + \\tan^2\\theta = \\sec^2\\theta$."
    },
    {
      formula: "$$\\frac{d}{dx}(u \\cdot v) = u \\frac{dv}{dx} + v \\frac{du}{dx}$$",
      meaning: "Product Rule of Differentiation",
      variables: "$u, v$: differentiable functions of $x$",
      example: "$$\\frac{d}{dx}(x \\cdot \\sin x) = x \\cos x + \\sin x \\cdot (1) = x \\cos x + \\sin x$$",
      shortcut: "Keep first $\\times$ diff second $+$ keep second $\\times$ diff first.",
      common_mistake: "Differentiating both terms and multiplying them together: $\\frac{du}{dx} \\cdot \\frac{dv}{dx}$."
    }
  ],

  // Facts & Motivation
  didYouKnow: [
    "The number 1729 is known as the Hardy-Ramanujan number because it is the smallest number expressible as the sum of two cubes in two different ways ($1^3 + 12^3$ and $9^3 + 10^3$).",
    "Zero ($0$) was invented in ancient India by mathematician Brahmagupta and Aryabhata, revolutionizing the global decimal place-value system.",
    "A 'googol' is the number $1$ followed by $100$ zeros. The search engine name 'Google' was derived from a misspelling of this mathematical term!",
    "The Fibonacci sequence appears naturally in sunflower seeds, pinecones, seashell spirals, and galaxy arms.",
    "The symbol for infinity ($\\infty$) is called a 'lemniscate', introduced by mathematician John Wallis in 1655."
  ],

  motivation: [
    "“Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.” — William Paul Thurston",
    "“The only way to learn mathematics is to do mathematics.” — Paul Halmos",
    "“Pure mathematics is, in its way, the poetry of logical ideas.” — Albert Einstein",
    "“Mathematics is the most beautiful and most powerful creation of the human spirit.” — Stefan Banach",
    "“Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.” — Albert Einstein"
  ],

  // Question Banks for Classes 6 to 12
  classes: {
    "6": [
      {
        question: "What is the perimeter of a regular hexagon with side length 7 cm?",
        options: { A: "35 cm", B: "42 cm", C: "28 cm", D: "49 cm" },
        correct: "B",
        chapter: "Mensuration",
        topic: "Perimeter of Regular Shapes",
        difficulty: "Easy",
        formula: "$$\\text{Perimeter} = 6 \\times \\text{side}$$",
        explanation: "A regular hexagon has 6 equal sides. Perimeter = $6 \\times 7\\text{ cm} = 42\\text{ cm}$.",
        revision_tip: "Multiply the side length by the total number of sides for any regular polygon."
      },
      {
        question: "Find the HCF of 24 and 36.",
        options: { A: "6", B: "12", C: "18", D: "24" },
        correct: "B",
        chapter: "Playing with Numbers",
        topic: "Highest Common Factor (HCF)",
        difficulty: "Medium",
        formula: "$$\\text{HCF} = \\text{Product of common prime factors with lowest powers}$$",
        explanation: "Factors of $24 = 2^3 \\times 3$; Factors of $36 = 2^2 \\times 3^2$. Common factors = $2^2 \\times 3 = 12$.",
        revision_tip: "HCF is the largest number that divides both given numbers without leaving a remainder."
      },
      {
        question: "Express the fraction 15/20 in its simplest form.",
        options: { A: "1/2", B: "3/4", C: "4/5", D: "2/3" },
        correct: "B",
        chapter: "Fractions",
        topic: "Simplest Form of Fractions",
        difficulty: "Easy",
        formula: "$$\\text{Simplest form} = \\frac{\\text{Numerator} \\div \\text{HCF}}{\\text{Denominator} \\div \\text{HCF}}$$",
        explanation: "HCF of 15 and 20 is 5. Divide $15 \\div 5 = 3$ and $20 \\div 5 = 4$. Result = $3/4$.",
        revision_tip: "Always divide both top and bottom by their greatest common factor."
      },
      {
        question: "What integer represents a temperature drop of 8°C below 0°C?",
        options: { A: "+8°C", B: "-8°C", C: "0°C", D: "-16°C" },
        correct: "B",
        chapter: "Integers",
        topic: "Representation of Integers",
        difficulty: "Easy",
        formula: "$$\\text{Below zero} \\implies -x$$",
        explanation: "Temperature below 0°C is indicated by a negative sign. Hence $-8^\\circ\\text{C}$.",
        revision_tip: "Remember: 'Below', 'loss', 'deposit' use negative signs; 'above', 'gain', 'profit' use positive signs."
      },
      {
        question: "Evaluate: 4.5 + 2.75 - 1.2",
        options: { A: "6.05", B: "6.25", C: "5.85", D: "6.15" },
        correct: "A",
        chapter: "Decimals",
        topic: "Addition and Subtraction of Decimals",
        difficulty: "Medium",
        formula: "Align decimal points vertically before operating",
        explanation: "$4.50 + 2.75 = 7.25$. Then $7.25 - 1.20 = 6.05$.",
        revision_tip: "Add trailing zeros to make decimal places equal before adding or subtracting."
      }
    ],

    "7": [
      {
        question: "If $3x + 7 = 22$, what is the value of $x$?",
        options: { A: "3", B: "5", C: "4", D: "6" },
        correct: "B",
        chapter: "Simple Equations",
        topic: "Solving Linear Equations",
        difficulty: "Easy",
        formula: "$$3x = 22 - 7$$",
        explanation: "$3x = 22 - 7 \\implies 3x = 15 \\implies x = 15 / 3 = 5$.",
        revision_tip: "When moving a term across the equal sign, flip its operation (+ to -, × to ÷)."
      },
      {
        question: "Find the mean of the first five prime numbers.",
        options: { A: "5.2", B: "5.6", C: "6.0", D: "4.8" },
        correct: "B",
        chapter: "Data Handling",
        topic: "Arithmetic Mean",
        difficulty: "Medium",
        formula: "$$\\text{Mean} = \\frac{\\sum x}{n}$$",
        explanation: "First 5 prime numbers = $2, 3, 5, 7, 11$. Sum = $28$. Mean = $28 / 5 = 5.6$.",
        revision_tip: "Note that 1 is neither prime nor composite; the first prime number is 2."
      },
      {
        question: "Two complementary angles are in the ratio 2 : 3. Find the smaller angle.",
        options: { A: "36°", B: "54°", C: "45°", D: "30°" },
        correct: "A",
        chapter: "Lines and Angles",
        topic: "Complementary Angles",
        difficulty: "Medium",
        formula: "$$x + y = 90^\\circ$$",
        explanation: "$2x + 3x = 90^\\circ \\implies 5x = 90^\\circ \\implies x = 18^\\circ$. Smaller angle = $2 \\times 18^\\circ = 36^\\circ$.",
        revision_tip: "Complementary angles sum to 90°; supplementary angles sum to 180°."
      },
      {
        question: "A shirt was bought for ₹400 and sold for ₹500. Calculate the profit percentage.",
        options: { A: "20%", B: "25%", C: "15%", D: "30%" },
        correct: "B",
        chapter: "Comparing Quantities",
        topic: "Profit Percentage",
        difficulty: "Easy",
        formula: "$$\\text{Profit \\%} = \\frac{\\text{Profit}}{\\text{Cost Price}} \\times 100$$",
        explanation: "Profit = $500 - 400 = ₹100$. Profit \\% = $(100 / 400) \\times 100 = 25\\%$.",
        revision_tip: "Profit or loss percentage is always calculated on the Cost Price (CP)."
      },
      {
        question: "What is the area of a circle with radius 7 cm? (Use $\\pi = 22/7$)",
        options: { A: "154 cm²", B: "44 cm²", C: "144 cm²", D: "176 cm²" },
        correct: "A",
        chapter: "Perimeter and Area",
        topic: "Area of Circle",
        difficulty: "Easy",
        formula: "$$\\text{Area} = \\pi r^2$$",
        explanation: "Area = $(22/7) \\times 7 \\times 7 = 22 \\times 7 = 154\\text{ cm}^2$.",
        revision_tip: "Do not confuse circumference ($2\\pi r$) with area ($\\pi r^2$)."
      }
    ],

    "8": [
      {
        question: "Solve for $y$: $$\\frac{y}{4} + \\frac{1}{2} = \\frac{5}{4}$$",
        options: { A: "y = 2", B: "y = 3", C: "y = 4", D: "y = 1" },
        correct: "B",
        chapter: "Linear Equations in One Variable",
        topic: "Equations Reducible to Linear Form",
        difficulty: "Medium",
        formula: "$$\\frac{y}{4} = \\frac{5}{4} - \\frac{1}{2}$$",
        explanation: "$y/4 = 5/4 - 2/4 = 3/4 \\implies y = 3$.",
        revision_tip: "Multiply the entire equation by the LCM of denominators to clear fractions."
      },
      {
        question: "How many sides does a regular polygon have if each exterior angle measures 45°?",
        options: { A: "6", B: "8", C: "10", D: "12" },
        correct: "B",
        chapter: "Understanding Quadrilaterals",
        topic: "Exterior Angles of Polygons",
        difficulty: "Easy",
        formula: "$$n = \\frac{360^\\circ}{\\text{Exterior Angle}}$$",
        explanation: "$n = 360^\\circ / 45^\\circ = 8$ sides (Octagon).",
        revision_tip: "The sum of exterior angles of any convex polygon is always 360°."
      },
      {
        question: "Evaluate: $$\\sqrt{176 + \\sqrt{2401}}$$",
        options: { A: "14", B: "15", C: "16", D: "13" },
        correct: "B",
        chapter: "Squares and Square Roots",
        topic: "Nested Square Roots",
        difficulty: "Hard",
        formula: "$$\\sqrt{2401} = 49$$",
        explanation: "$\\sqrt{2401} = 49$. Inner sum = $176 + 49 = 225$. $\\sqrt{225} = 15$.",
        revision_tip: "Work from the innermost square root outwards."
      },
      {
        question: "Factorise completely: $x^2 - 9x + 20$",
        options: { A: "(x - 4)(x - 5)", B: "(x + 4)(x - 5)", C: "(x - 2)(x - 10)", D: "(x + 2)(x + 10)" },
        correct: "A",
        chapter: "Factorisation",
        topic: "Splitting the Middle Term",
        difficulty: "Medium",
        formula: "$$p+q = -9 \\text{ and } p \\times q = 20$$",
        explanation: "Numbers are $-4$ and $-5$. $x^2 - 4x - 5x + 20 = (x - 4)(x - 5)$.",
        revision_tip: "Check signs carefully: positive product with negative sum means both numbers are negative."
      },
      {
        question: "Simplify using exponent laws: $$\\frac{2^3 \\times 3^4 \\times 4}{3 \\times 32}$$",
        options: { A: "27", B: "9", C: "18", D: "36" },
        correct: "A",
        chapter: "Exponents and Powers",
        topic: "Laws of Exponents",
        difficulty: "Hard",
        formula: "$$\\frac{a^m}{a^n} = a^{m-n}$$",
        explanation: "Convert to base 2 and 3: $\\frac{2^3 \\times 3^4 \\times 2^2}{3^1 \\times 2^5} = \\frac{2^5 \\times 3^4}{2^5 \\times 3^1} = 3^3 = 27$.",
        revision_tip: "Express all numbers in prime factor power form before canceling."
      }
    ],

    "9": [
      {
        question: "Which of the following is an irrational number?",
        options: { A: "√4", B: "0.333...", C: "√7", D: "22/7" },
        correct: "C",
        chapter: "Number Systems",
        topic: "Irrational Numbers",
        difficulty: "Easy",
        formula: "Irrational numbers have non-terminating, non-repeating decimal expansions",
        explanation: "$\\sqrt{7}$ cannot be expressed as $p/q$ ($p, q$ integers, $q \\neq 0$). $\\sqrt{4} = 2$ is rational; $22/7$ is rational.",
        revision_tip: "Square roots of non-perfect squares are always irrational."
      },
      {
        question: "If $(x - 2)$ is a factor of $p(x) = x^3 - 3x + k$, find the value of $k$.",
        options: { A: "-2", B: "2", C: "-4", D: "4" },
        correct: "A",
        chapter: "Polynomials",
        topic: "Factor Theorem",
        difficulty: "Medium",
        formula: "$$p(2) = 0$$",
        explanation: "$p(2) = 2^3 - 3(2) + k = 0 \\implies 8 - 6 + k = 0 \\implies 2 + k = 0 \\implies k = -2$.",
        revision_tip: "Substitute the zero of the factor into polynomial and set equal to zero."
      },
      {
        question: "In $\\Delta ABC$, if $\\angle A = 50^\\circ$ and $\\angle B = 70^\\circ$, find the measure of exterior angle at vertex C.",
        options: { A: "120°", B: "60°", C: "110°", D: "130°" },
        correct: "A",
        chapter: "Triangles",
        topic: "Exterior Angle Property",
        difficulty: "Easy",
        formula: "$$\\text{Exterior angle} = \\text{Sum of opposite interior angles}$$",
        explanation: "Exterior angle at C = $\\angle A + \\angle B = 50^\\circ + 70^\\circ = 120^\\circ$.",
        revision_tip: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles."
      },
      {
        question: "Find the area of a triangle with sides 13 cm, 14 cm, and 15 cm using Heron's Formula.",
        options: { A: "84 cm²", B: "96 cm²", C: "72 cm²", D: "90 cm²" },
        correct: "A",
        chapter: "Heron's Formula",
        topic: "Area of Triangle",
        difficulty: "Hard",
        formula: "$$\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}, \\text{ where } s = \\frac{a+b+c}{2}$$",
        explanation: "$s = (13+14+15)/2 = 21$. Area = $\\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84\\text{ cm}^2$.",
        revision_tip: "Always calculate semi-perimeter $s$ first before plugging into Heron's square root formula."
      },
      {
        question: "A hemisphere has a radius of 6 cm. Find its total surface area.",
        options: { A: "108π cm²", B: "72π cm²", C: "144π cm²", D: "216π cm²" },
        correct: "A",
        chapter: "Surface Areas and Volumes",
        topic: "Hemisphere Surface Area",
        difficulty: "Medium",
        formula: "$$\\text{TSA} = 3\\pi r^2$$",
        explanation: "TSA = $3 \\times \\pi \\times 6^2 = 3 \\times 36 \\times \\pi = 108\\pi\\text{ cm}^2$.",
        revision_tip: "Curved surface area is $2\\pi r^2$, but Total Surface Area includes the base circle ($3\\pi r^2$)."
      }
    ],

    "10": [
      {
        question: "If $\\text{HCF}(306, 657) = 9$, find $\\text{LCM}(306, 657)$.",
        options: { A: "22338", B: "22328", C: "21338", D: "23338" },
        correct: "A",
        chapter: "Real Numbers",
        topic: "HCF and LCM Relation",
        difficulty: "Medium",
        formula: "$$\\text{HCF} \\times \\text{LCM} = a \\times b$$",
        explanation: "LCM = $(306 \\times 657) / 9 = 34 \\times 657 = 22338$.",
        revision_tip: "Product of HCF and LCM of two numbers equals the product of the two numbers."
      },
      {
        question: "Find the 20th term of the A.P. 2, 7, 12, 17...",
        options: { A: "97", B: "102", C: "92", D: "107" },
        correct: "A",
        chapter: "Arithmetic Progressions",
        topic: "Nth Term of an AP",
        difficulty: "Easy",
        formula: "$$a_n = a + (n - 1)d$$",
        explanation: "$a = 2, d = 5$. $a_{20} = 2 + (19 \\times 5) = 2 + 95 = 97$.",
        revision_tip: "For 20th term, multiply common difference $d$ by 19, not 20."
      },
      {
        question: "If $\\tan \\theta = 4/3$, find the value of $\\sin \\theta + \\cos \\theta$.",
        options: { A: "7/5", B: "1/5", C: "5/7", D: "6/5" },
        correct: "A",
        chapter: "Introduction to Trigonometry",
        topic: "Trigonometric Ratios",
        difficulty: "Medium",
        formula: "$$\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} \\implies \\text{hyp} = \\sqrt{\\text{opp}^2 + \\text{adj}^2}$$",
        explanation: "Opposite = 4, Adjacent = 3 $\\implies$ Hypotenuse = 5. $\\sin\\theta = 4/5$, $\\cos\\theta = 3/5$. Sum = $7/5$.",
        revision_tip: "Identify hypotenuse first using Pythagoras theorem."
      },
      {
        question: "Find the discriminant of the quadratic equation $2x^2 - 4x + 3 = 0$ and determine the nature of roots.",
        options: { A: "D = -8, No real roots", B: "D = 8, Two real roots", C: "D = 0, Equal roots", D: "D = -16, No real roots" },
        correct: "A",
        chapter: "Quadratic Equations",
        topic: "Nature of Roots",
        difficulty: "Easy",
        formula: "$$D = b^2 - 4ac$$",
        explanation: "$D = (-4)^2 - 4(2)(3) = 16 - 24 = -8$. Since $D < 0$, no real roots exist.",
        revision_tip: "D > 0: 2 distinct real roots; D = 0: 2 equal real roots; D < 0: no real roots."
      },
      {
        question: "A card is drawn at random from a standard deck of 52 cards. What is the probability of getting a face card?",
        options: { A: "3/13", B: "1/13", C: "4/13", D: "1/4" },
        correct: "A",
        chapter: "Probability",
        topic: "Theoretical Probability",
        difficulty: "Medium",
        formula: "$$P(E) = \\frac{\\text{Favorable outcomes}}{\\text{Total outcomes}}$$",
        explanation: "There are 12 face cards (4 Jacks, 4 Queens, 4 Kings). $P = 12/52 = 3/13$.",
        revision_tip: "Aces are NOT counted as face cards."
      }
    ],

    "11": [
      {
        question: "Evaluate: $$\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$$",
        options: { A: "5", B: "1", C: "0", D: "1/5" },
        correct: "A",
        chapter: "Limits and Derivatives",
        topic: "Standard Trigonometric Limits",
        difficulty: "Easy",
        formula: "$$\\lim_{x \\to 0} \\frac{\\sin(kx)}{x} = k$$",
        explanation: "$$\\lim_{x \\to 0} 5 \\cdot \\frac{\\sin(5x)}{5x} = 5 \\cdot 1 = 5$$",
        revision_tip: "Make the angle in the denominator match the angle inside sine."
      },
      {
        question: "Find the general solution of the trigonometric equation $$\\sin x = \\frac{1}{2}$$",
        options: { A: "n\\pi + (-1)^n \\frac{\\pi}{6}", B: "2n\\pi \\pm \\frac{\\pi}{6}", C: "n\\pi + \\frac{\\pi}{6}", D: "2n\\pi + \\frac{\\pi}{3}" },
        correct: "A",
        chapter: "Trigonometric Functions",
        topic: "General Trigonometric Solutions",
        difficulty: "Medium",
        formula: "$$\\sin x = \\sin \\alpha \\implies x = n\\pi + (-1)^n \\alpha$$",
        explanation: "$\\sin x = \\sin(\\pi/6) \\implies x = n\\pi + (-1)^n (\\pi/6)$, where $n \\in \\mathbb{Z}$.",
        revision_tip: "Remember the $(-1)^n$ term for sine general solutions."
      },
      {
        question: "If $^nP_3 = 60$, find the value of $n$.",
        options: { A: "5", B: "6", C: "4", D: "7" },
        correct: "A",
        chapter: "Permutations and Combinations",
        topic: "Permutation Formula",
        difficulty: "Medium",
        formula: "$$^nP_3 = n(n-1)(n-2)$$",
        explanation: "$n(n-1)(n-2) = 60 = 5 \\times 4 \\times 3$. Hence $n = 5$.",
        revision_tip: "Express the right hand side as a product of consecutive decreasing integers."
      },
      {
        question: "Find the distance between the parallel lines $3x + 4y - 9 = 0$ and $3x + 4y + 16 = 0$.",
        options: { A: "5 units", B: "7 units", C: "3 units", D: "4 units" },
        correct: "A",
        chapter: "Straight Lines",
        topic: "Distance Between Parallel Lines",
        difficulty: "Hard",
        formula: "$$d = \\frac{|c_1 - c_2|}{\\sqrt{A^2 + B^2}}$$",
        explanation: "$d = |-9 - 16| / \\sqrt{3^2 + 4^2} = |-25| / 5 = 25 / 5 = 5$ units.",
        revision_tip: "Ensure $x$ and $y$ coefficients $A$ and $B$ are identical in both equations before applying formula."
      },
      {
        question: "If A and B are two sets such that $n(A) = 17$, $n(B) = 23$, and $n(A \\cup B) = 38$, find $n(A \\cap B)$.",
        options: { A: "2", B: "4", C: "6", D: "8" },
        correct: "A",
        chapter: "Sets",
        topic: "Cardinality of Sets",
        difficulty: "Easy",
        formula: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$",
        explanation: "$38 = 17 + 23 - n(A \\cap B) \\implies 38 = 40 - n(A \\cap B) \\implies n(A \\cap B) = 2$.",
        revision_tip: "Venn diagrams are great visual aids for cardinal number set problems."
      }
    ],

    "12": [
      {
        question: "Evaluate: $$\\int \\frac{1}{x \\ln(x)} \, dx$$",
        options: { A: "\\ln|\\ln(x)| + C", B: "\\frac{1}{\\ln(x)} + C", C: "(\\ln x)² + C", D: "\\frac{\\ln(x)}{x} + C" },
        correct: "A",
        chapter: "Integrals",
        topic: "Integration by Substitution",
        difficulty: "Medium",
        formula: "$$\\int \\frac{g'(x)}{g(x)} \, dx = \\ln|g(x)| + C$$",
        explanation: "Let $u = \\ln(x)$, then $du = (1/x) dx$. Integral becomes $\\int \\frac{1}{u} du = \\ln|u| + C = \\ln|\\ln(x)| + C$.",
        revision_tip: "Look for a function and its derivative present in the integrand."
      },
      {
        question: "If A is a $3 \\times 3$ square matrix such that $|A| = 5$, find the value of |adj(A)|.",
        options: { A: "25", B: "125", C: "5", D: "1/5" },
        correct: "A",
        chapter: "Determinants",
        topic: "Adjoint Matrix Properties",
        difficulty: "Medium",
        formula: "$$|\\text{adj}(A)| = |A|^{n-1}$$",
        explanation: "For $n = 3$: $|\\text{adj}(A)| = 5^{3-1} = 5^2 = 25$.",
        revision_tip: "Power of determinant in adj(A) is $(n - 1)$, where $n$ is the order of square matrix."
      },
      {
        question: "Find the order and degree of the differential equation: $$\\frac{d^2y}{dx^2} + \\left(\\frac{dy}{dx}\\right)^3 + y = 0$$",
        options: { A: "Order = 2, Degree = 1", B: "Order = 2, Degree = 3", C: "Order = 1, Degree = 3", D: "Order = 3, Degree = 2" },
        correct: "A",
        chapter: "Differential Equations",
        topic: "Order and Degree",
        difficulty: "Easy",
        formula: "Order = highest order derivative; Degree = power of highest order derivative",
        explanation: "Highest derivative is $\\frac{d^2y}{dx^2}$ (Order = 2). Its power is 1 (Degree = 1).",
        revision_tip: "Degree is determined ONLY after differential equation is free from fractional powers of derivatives."
      },
      {
        question: "Find the angle between two vectors $\\vec{a}$ and $\\vec{b}$ if $|\\vec{a}| = 2$, $|\\vec{b}| = 3$, and $\\vec{a} \\cdot \\vec{b} = 3$.",
        options: { A: "\\pi/3", B: "\\pi/6", C: "\\pi/4", D: "\\pi/2" },
        correct: "A",
        chapter: "Vector Algebra",
        topic: "Dot Product of Vectors",
        difficulty: "Easy",
        formula: "$$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}$$",
        explanation: "$\\cos\\theta = 3 / (2 \\times 3) = 3/6 = 1/2 \\implies \\theta = \\pi/3$ ($60^\\circ$).",
        revision_tip: "If dot product is zero, vectors are perpendicular ($\\theta = \\pi/2$)."
      },
      {
        question: "Two events A and B are independent such that $P(A) = 0.4$ and $P(B) = 0.5$. Find $P(A \\cup B)$.",
        options: { A: "0.7", B: "0.9", C: "0.2", D: "0.8" },
        correct: "A",
        chapter: "Probability",
        topic: "Independent Events",
        difficulty: "Medium",
        formula: "$$P(A \\cap B) = P(A) \\cdot P(B) \\text{ and } P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$",
        explanation: "$P(A \\cap B) = 0.4 \\times 0.5 = 0.2$. $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$.",
        revision_tip: "Independent events mean $P(A \\cap B) = P(A) \\times P(B)$."
      }
    ]
  },

  // Generator Function to return exact requested JSON
  getDailyQuizJSON: function(targetClass, dateStr) {
    const cls = String(targetClass || "10");
    const today = dateStr || new Date().toISOString().split('T')[0];
    
    // Deterministic pseudo-random seed based on date string
    let seed = 0;
    for (let i = 0; i < today.length; i++) {
      seed = (seed * 31 + today.charCodeAt(i)) % 10007;
    }
    
    const formulaIdx = seed % this.formulaOfDay.length;
    const factIdx = (seed + 2) % this.didYouKnow.length;
    const quoteIdx = (seed + 4) % this.motivation.length;

    const classQuestions = this.classes[cls] || this.classes["10"];

    return {
      "date": today,
      "class": cls,
      "formula_of_the_day": this.formulaOfDay[formulaIdx],
      "quiz": classQuestions,
      "did_you_know": this.didYouKnow[factIdx],
      "motivation": this.motivation[quoteIdx],
      "score_feedback": {
        "0": "Keep Practicing! Review the NCERT concepts and try again.",
        "1": "Good Start! You are building foundational skills.",
        "2": "Nice Work! A little more practice will make you sharp.",
        "3": "Excellent! Great understanding of CBSE concepts! ⭐",
        "4": "Outstanding! Almost perfect score! ⭐⭐",
        "5": "Math Champion! Perfect 5/5 score! ⭐⭐⭐"
      }
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_QUIZ_DATABASE;
}
