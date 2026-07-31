/**
 * ASK ME - CBSE Mathematics Knowledge Base
 * K B Joshi's Digital Diary
 * Covers Classes 6–12 | NCERT Aligned | Board Exam Focused
 * 
 * Format: { keywords: [...], question: "...", answer: "...", class: "6-12", chapter: "...", source: "ASK ME Folder" }
 */

window.ASK_ME_DATA = [

  // ═══════════════════════════════════════════════
  //  CLASS 6 – 8
  // ═══════════════════════════════════════════════

  { keywords:['hcf','lcm','highest common factor','lowest common multiple','euclid algorithm'],
    question:'What are HCF and LCM?',
    answer:`<strong>HCF (Highest Common Factor)</strong> = Largest factor common to two or more numbers.<br>
<strong>LCM (Lowest Common Multiple)</strong> = Smallest multiple common to two or more numbers.<br><br>
🔑 <em>Key Property:</em> <span class="math-highlight">HCF × LCM = Product of two numbers</span><br><br>
<em>Example:</em> For 12 and 18 → HCF = 6, LCM = 36, and 6 × 36 = 12 × 18 = 216 ✓<br><br>
<em>Methods:</em> Prime factorisation, Division method, Euclid's algorithm`,
    class:'6', chapter:'Number System', source:'ASK ME Folder' },

  { keywords:['rational number','irrational','real number','terminating','recurring','non-terminating'],
    question:'Difference between Rational and Irrational numbers?',
    answer:`<strong>Rational Numbers:</strong> Can be written as p/q (q ≠ 0). Decimal form is terminating or recurring.<br>
Examples: 1/2 = 0.5 (terminating), 1/3 = 0.333... (recurring)<br><br>
<strong>Irrational Numbers:</strong> Cannot be written as p/q. Decimal is non-terminating and non-recurring.<br>
Examples: √2 = 1.41421…, π = 3.14159…, e = 2.71828…<br><br>
🔑 <span class="math-highlight">√p is irrational if p is a prime number</span>`,
    class:'9', chapter:'Number Systems', source:'ASK ME Folder' },

  { keywords:['integer','negative number','properties of integers'],
    question:'Properties of Integers',
    answer:`<strong>Properties of Integers:</strong><br>
• <em>Closure:</em> a + b, a − b, a × b are integers for integers a, b<br>
• <em>Commutative:</em> a + b = b + a; a × b = b × a<br>
• <em>Associative:</em> (a+b)+c = a+(b+c)<br>
• <em>Distributive:</em> a×(b+c) = a×b + a×c<br>
• <em>Identity:</em> a + 0 = a; a × 1 = a<br>
• Division is NOT always closed in integers.`,
    class:'6', chapter:'Integers', source:'ASK ME Folder' },

  { keywords:['fraction','numerator','denominator','mixed','proper improper'],
    question:'Types of Fractions',
    answer:`<strong>Types of Fractions:</strong><br>
• <em>Proper:</em> Numerator < Denominator (e.g., 3/7)<br>
• <em>Improper:</em> Numerator > Denominator (e.g., 9/4)<br>
• <em>Mixed:</em> Whole number + Proper fraction (e.g., 2¼)<br>
• <em>Like Fractions:</em> Same denominator (3/7, 5/7)<br>
• <em>Unlike Fractions:</em> Different denominators (1/3, 2/5)<br><br>
🔑 To add unlike fractions: find LCM of denominators first.`,
    class:'6', chapter:'Fractions and Decimals', source:'ASK ME Folder' },

  { keywords:['percentage','percent','profit','loss','discount','cp','sp','mp'],
    question:'Profit, Loss and Discount formulas',
    answer:`<strong>Profit & Loss:</strong><br>
<span class="math-highlight">Profit = SP − CP</span> (when SP > CP)<br>
<span class="math-highlight">Loss = CP − SP</span> (when CP > SP)<br>
<span class="math-highlight">Profit% = (Profit/CP) × 100</span><br>
<span class="math-highlight">Loss% = (Loss/CP) × 100</span><br>
<span class="math-highlight">SP = CP × (100 + Profit%)/100</span><br>
<span class="math-highlight">CP = SP × 100/(100 + Profit%)</span><br><br>
<strong>Discount:</strong><br>
<span class="math-highlight">Discount = MP − SP</span><br>
<span class="math-highlight">Discount% = (Discount/MP) × 100</span>`,
    class:'7', chapter:'Comparing Quantities', source:'ASK ME Folder' },

  { keywords:['simple interest','si','compound interest','ci','principal','rate','time','amount'],
    question:'Simple Interest and Compound Interest formulas',
    answer:`<strong>Simple Interest (SI):</strong><br>
<span class="math-highlight">SI = PRT/100</span><br>
<span class="math-highlight">Amount (A) = P + SI = P(1 + RT/100)</span><br><br>
<strong>Compound Interest (CI):</strong><br>
<span class="math-highlight">A = P(1 + R/100)ⁿ</span><br>
<span class="math-highlight">CI = A − P</span><br><br>
Where P = Principal, R = Rate% per annum, T/n = Time in years<br><br>
<em>Half-yearly:</em> A = P(1 + R/200)^(2n)<br>
<em>Quarterly:</em> A = P(1 + R/400)^(4n)<br><br>
🔑 CI > SI always (for same P, R, T with T > 1 year)`,
    class:'8', chapter:'Comparing Quantities', source:'ASK ME Folder' },

  { keywords:['linear equation','one variable','solving equation','transposition'],
    question:'Solving Linear Equations in one variable',
    answer:`<strong>Linear Equation in One Variable:</strong><br>
Form: <span class="math-highlight">ax + b = 0</span>, where a ≠ 0<br><br>
<em>Steps to Solve:</em><br>
1. Remove brackets by expanding<br>
2. Bring all variable terms to LHS, constants to RHS<br>
3. Divide both sides by coefficient of variable<br><br>
<em>Example:</em> 2x + 5 = 11<br>
→ 2x = 11 − 5 = 6<br>
→ <span class="math-highlight">x = 3</span>`,
    class:'8', chapter:'Linear Equations in One Variable', source:'ASK ME Folder' },

  // ═══════════════════════════════════════════════
  //  CLASS 9 – 10
  // ═══════════════════════════════════════════════

  { keywords:['polynomial','zero','root','remainder theorem','factor theorem','polynomial degree'],
    question:'Polynomials – Remainder and Factor Theorems',
    answer:`<strong>Remainder Theorem:</strong><br>
When p(x) is divided by (x − a), the remainder = <span class="math-highlight">p(a)</span><br><br>
<strong>Factor Theorem:</strong><br>
(x − a) is a factor of p(x) if and only if <span class="math-highlight">p(a) = 0</span><br><br>
<strong>Zeros of a Polynomial:</strong><br>
Linear ax+b : zero = −b/a<br>
Quadratic ax²+bx+c : sum of zeros = −b/a, product = c/a<br>
Cubic ax³+bx²+cx+d : sum = −b/a, sum of products of pairs = c/a, product = −d/a`,
    class:'9', chapter:'Polynomials', source:'ASK ME Folder' },

  { keywords:['pair linear','two variable','substitution','elimination','cross multiplication','graphical'],
    question:'Methods to solve Pair of Linear Equations in two variables',
    answer:`<strong>Pair of Linear Equations:</strong> a₁x+b₁y+c₁=0, a₂x+b₂y+c₂=0<br><br>
<strong>Consistency Conditions:</strong><br>
• Unique solution: <span class="math-highlight">a₁/a₂ ≠ b₁/b₂</span> (intersecting lines)<br>
• Infinite solutions: <span class="math-highlight">a₁/a₂ = b₁/b₂ = c₁/c₂</span> (coincident lines)<br>
• No solution: <span class="math-highlight">a₁/a₂ = b₁/b₂ ≠ c₁/c₂</span> (parallel lines)<br><br>
<strong>Methods:</strong> Graphical, Substitution, Elimination, Cross-Multiplication`,
    class:'10', chapter:'Pair of Linear Equations', source:'ASK ME Folder' },

  { keywords:['quadratic','ax2 bx c','discriminant','nature of roots','sum product roots'],
    question:'Quadratic Equations – Formula and Nature of Roots',
    answer:`<strong>Standard Form:</strong> <span class="math-highlight">ax² + bx + c = 0</span> (a ≠ 0)<br><br>
<strong>Quadratic Formula:</strong><br>
<span class="math-highlight">x = [−b ± √(b²−4ac)] / 2a</span><br><br>
<strong>Discriminant D = b² − 4ac:</strong><br>
• D > 0 : Two distinct real roots<br>
• D = 0 : Two equal real roots (x = −b/2a)<br>
• D < 0 : No real roots (complex roots)<br><br>
<strong>Relationship:</strong><br>
Sum of roots (α+β) = <span class="math-highlight">−b/a</span><br>
Product of roots (αβ) = <span class="math-highlight">c/a</span>`,
    class:'10', chapter:'Quadratic Equations', source:'ASK ME Folder' },

  { keywords:['arithmetic progression','ap','nth term','sum of ap','common difference'],
    question:'Arithmetic Progression (AP) formulas',
    answer:`<strong>Arithmetic Progression (AP):</strong><br>
A sequence where each term increases by a fixed common difference (d).<br><br>
<strong>nth term:</strong> <span class="math-highlight">aₙ = a + (n−1)d</span><br>
<strong>Sum of n terms:</strong> <span class="math-highlight">Sₙ = n/2 [2a + (n−1)d]</span><br>
Also: <span class="math-highlight">Sₙ = n/2 [a + l]</span> where l = last term<br><br>
<em>Note:</em> aₙ = Sₙ − S(n−1)<br>
<em>Middle term:</em> If AP has odd number of terms, middle term = AM of first and last.`,
    class:'10', chapter:'Arithmetic Progressions', source:'ASK ME Folder' },

  { keywords:['triangle','similar','congruent','bpt','basic proportionality','midpoint theorem'],
    question:'Triangles – Similarity, BPT and Theorems',
    answer:`<strong>Basic Proportionality Theorem (BPT):</strong><br>
If a line is parallel to one side of a triangle and intersects the other two sides:<br>
<span class="math-highlight">AD/DB = AE/EC</span><br><br>
<strong>Criteria for Similarity:</strong> AA, SSS, SAS<br>
If ΔABC ~ ΔPQR: <span class="math-highlight">AR(ΔABC)/AR(ΔPQR) = (AB/PQ)²</span><br><br>
<strong>Pythagoras Theorem:</strong><br>
<span class="math-highlight">AC² = AB² + BC²</span> (for right angle at B)<br><br>
Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25)`,
    class:'10', chapter:'Triangles', source:'ASK ME Folder' },

  { keywords:['circle','tangent','chord','arc','secant','angle subtended','equal chord'],
    question:'Circles – Tangent and Chord Properties',
    answer:`<strong>Circle Theorems:</strong><br>
• Equal chords subtend equal angles at centre<br>
• Perpendicular from centre bisects the chord<br>
• Angle subtended at centre = 2 × angle at circumference<br>
• Angles in same segment are equal<br>
• Angle in semicircle = 90°<br><br>
<strong>Tangent Properties:</strong><br>
• Tangent ⊥ radius at point of contact<br>
• Two tangents from external point are equal: <span class="math-highlight">PA = PB</span><br>
• Alternate segment theorem applies`,
    class:'10', chapter:'Circles', source:'ASK ME Folder' },

  { keywords:['area circle','circumference','pi r squared','sector','segment','arc length'],
    question:'Area and Perimeter of Circle, Sector, Segment',
    answer:`<strong>Circle Formulas:</strong><br>
<span class="math-highlight">Area = πr²</span><br>
<span class="math-highlight">Circumference = 2πr</span><br><br>
<strong>Sector (angle θ°):</strong><br>
<span class="math-highlight">Arc length = (θ/360) × 2πr</span><br>
<span class="math-highlight">Area of sector = (θ/360) × πr²</span><br><br>
<strong>Segment:</strong><br>
<span class="math-highlight">Area of minor segment = Area of sector − Area of triangle</span><br>
π = 22/7 (use 3.14 where specified)`,
    class:'10', chapter:'Areas Related to Circles', source:'ASK ME Folder' },

  { keywords:['surface area','volume','cylinder','cone','sphere','hemisphere','frustum','cuboid','cube'],
    question:'Surface Area and Volume formulas for all 3D shapes',
    answer:`<strong>📦 Cube (side a):</strong> SA = 6a², V = a³<br>
<strong>📦 Cuboid (l,b,h):</strong> SA = 2(lb+bh+hl), V = lbh<br>
<strong>🔵 Cylinder (r,h):</strong> CSA = 2πrh, TSA = 2πr(r+h), V = πr²h<br>
<strong>🔺 Cone (r,h,l):</strong> CSA = πrl, TSA = πr(r+l), V = ⅓πr²h, l = √(r²+h²)<br>
<strong>🌐 Sphere (r):</strong> SA = 4πr², V = 4/3 πr³<br>
<strong>⭕ Hemisphere (r):</strong> CSA = 2πr², TSA = 3πr², V = 2/3 πr³<br>
<strong>🪣 Frustum (r₁,r₂,h,l):</strong> CSA = π(r₁+r₂)l, V = πh/3(r₁²+r₂²+r₁r₂), l = √[h²+(r₁−r₂)²]`,
    class:'10', chapter:'Surface Areas and Volumes', source:'ASK ME Folder' },

  { keywords:['probability','event','sample space','equally likely','impossible','certain'],
    question:'Probability – Basic Concepts and Formula',
    answer:`<strong>Probability Formula:</strong><br>
<span class="math-highlight">P(E) = n(E) / n(S)</span><br>
where n(E) = number of favourable outcomes, n(S) = total outcomes<br><br>
<strong>Key Properties:</strong><br>
• 0 ≤ P(E) ≤ 1 always<br>
• P(impossible event) = 0<br>
• P(certain event) = 1<br>
• <span class="math-highlight">P(E) + P(Ē) = 1</span><br><br>
<strong>Coin toss:</strong> n(S) = 2 (H,T). Two coins: n(S) = 4.<br>
<strong>Die roll:</strong> n(S) = 6. Two dice: n(S) = 36.<br>
<strong>Card:</strong> Total 52 = 4 suits × 13 cards.`,
    class:'10', chapter:'Probability', source:'ASK ME Folder' },

  { keywords:['trigonometry','sin cos tan','ratios','height distance','elevation depression'],
    question:'Trigonometric Ratios and Applications',
    answer:`<strong>Trigonometric Ratios:</strong><br>
sinθ = Opposite/Hypotenuse, cosθ = Adjacent/Hypotenuse<br>
tanθ = Opposite/Adjacent = sinθ/cosθ<br>
cosecθ = 1/sinθ, secθ = 1/cosθ, cotθ = 1/tanθ<br><br>
<strong>Standard Values:</strong><br>
<span class="math-highlight">sin30°=½, sin45°=1/√2, sin60°=√3/2, sin90°=1</span><br>
<span class="math-highlight">cos30°=√3/2, cos45°=1/√2, cos60°=½, cos90°=0</span><br>
<span class="math-highlight">tan30°=1/√3, tan45°=1, tan60°=√3</span><br><br>
<strong>Identities:</strong><br>
sin²θ + cos²θ = 1 &nbsp;|&nbsp; 1 + tan²θ = sec²θ &nbsp;|&nbsp; 1 + cot²θ = cosec²θ<br><br>
<strong>Applications:</strong> Angle of Elevation ↗, Angle of Depression ↘`,
    class:'10', chapter:'Introduction to Trigonometry', source:'ASK ME Folder' },

  { keywords:['mean median mode','statistics','grouped data','class mark','frequency','cumulative'],
    question:'Statistics – Mean, Median and Mode for Grouped Data',
    answer:`<strong>Mean (Direct Method):</strong> <span class="math-highlight">x̄ = Σfᵢxᵢ / Σfᵢ</span><br>
<strong>Mean (Assumed Mean):</strong> x̄ = a + Σfᵢdᵢ / Σfᵢ, d = x − a<br>
<strong>Mean (Step Deviation):</strong> x̄ = a + (Σfᵢuᵢ / Σfᵢ) × h<br><br>
<strong>Median (Grouped):</strong><br>
<span class="math-highlight">M = l + [(n/2 − cf) / f] × h</span><br>
l=lower limit, cf=preceding cumulative freq, f=freq of median class, h=class width<br><br>
<strong>Mode (Grouped):</strong><br>
<span class="math-highlight">Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h</span><br>
f₁=highest freq, f₀=preceding, f₂=following<br><br>
🔑 Empirical Formula: <span class="math-highlight">Mode = 3 Median − 2 Mean</span>`,
    class:'10', chapter:'Statistics', source:'ASK ME Folder' },

  // ═══════════════════════════════════════════════
  //  CLASS 11
  // ═══════════════════════════════════════════════

  { keywords:['set','union','intersection','complement','subset','venn diagram','demorgan'],
    question:'Sets – Operations and De Morgan\'s Laws',
    answer:`<strong>Set Operations:</strong><br>
• Union: A ∪ B = {x : x ∈ A or x ∈ B}<br>
• Intersection: A ∩ B = {x : x ∈ A and x ∈ B}<br>
• Complement: A' = {x : x ∉ A}<br>
• Difference: A − B = {x : x ∈ A, x ∉ B}<br><br>
<strong>De Morgan's Laws:</strong><br>
<span class="math-highlight">(A ∪ B)' = A' ∩ B'</span><br>
<span class="math-highlight">(A ∩ B)' = A' ∪ B'</span><br><br>
<strong>Cardinal Numbers:</strong><br>
n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<br>
n(A ∪ B ∪ C) = n(A)+n(B)+n(C)−n(A∩B)−n(B∩C)−n(A∩C)+n(A∩B∩C)`,
    class:'11', chapter:'Sets', source:'ASK ME Folder' },

  { keywords:['relation function','domain range','codomain','one-one','onto','bijective','inverse function'],
    question:'Relations and Functions',
    answer:`<strong>Function Types:</strong><br>
• <em>One-one (Injective):</em> f(a) = f(b) ⟹ a = b<br>
• <em>Onto (Surjective):</em> Range = Codomain<br>
• <em>Bijective:</em> One-one AND Onto (has inverse)<br><br>
<strong>Domain and Range:</strong><br>
• For f(x) = √(x−a): Domain x ≥ a<br>
• For f(x) = 1/x: Domain x ≠ 0<br>
• For f(x) = log(x): Domain x > 0<br><br>
<strong>Composition:</strong> (fog)(x) = f(g(x))<br>
<strong>Inverse:</strong> f⁻¹ exists only if f is bijective`,
    class:'11', chapter:'Relations and Functions', source:'ASK ME Folder' },

  { keywords:['complex number','iota','argument','modulus','polar form','euler','conjugate','de moivre'],
    question:'Complex Numbers – Polar Form, Modulus, De Moivre\'s Theorem',
    answer:`<strong>Complex Number:</strong> z = a + bi, i² = −1<br>
<strong>Modulus:</strong> <span class="math-highlight">|z| = √(a² + b²)</span><br>
<strong>Conjugate:</strong> z̄ = a − bi<br>
<strong>Argument (θ):</strong> θ = tan⁻¹(b/a)<br>
<strong>Polar Form:</strong> z = r(cosθ + i sinθ) = re^(iθ)<br><br>
<strong>Powers of i:</strong> i, i²=−1, i³=−i, i⁴=1 (cycle of 4)<br>
i^(4n)=1, i^(4n+1)=i, i^(4n+2)=−1, i^(4n+3)=−i<br><br>
<strong>De Moivre's Theorem:</strong> (cosθ+isinθ)ⁿ = <span class="math-highlight">cos(nθ)+i sin(nθ)</span><br>
<strong>Euler's Identity:</strong> <span class="math-highlight">e^(iπ) + 1 = 0</span>`,
    class:'11', chapter:'Complex Numbers', source:'ASK ME Folder' },

  { keywords:['permutation combination','factorial','npr','ncr','counting principle','multinomial'],
    question:'Permutation and Combination',
    answer:`<strong>Fundamental Principle:</strong><br>
If event A can happen in m ways and B in n ways, both together: <span class="math-highlight">m × n ways</span><br><br>
<strong>Factorial:</strong> n! = n × (n−1) × ... × 2 × 1; 0! = 1<br><br>
<strong>Permutation (arrangement):</strong><br>
<span class="math-highlight">ⁿPᵣ = n! / (n−r)!</span><br>
All different: ⁿPₙ = n!<br>
With repetitions allowed: nʳ<br><br>
<strong>Combination (selection):</strong><br>
<span class="math-highlight">ⁿCᵣ = n! / [r!(n−r)!]</span><br>
ⁿCᵣ = ⁿCₙ₋ᵣ; ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ`,
    class:'11', chapter:'Permutations and Combinations', source:'ASK ME Folder' },

  { keywords:['binomial theorem','general term','middle term','coefficient','expansion','pascal'],
    question:'Binomial Theorem and General Term',
    answer:`<strong>Binomial Theorem (n ∈ N):</strong><br>
<span class="math-highlight">(a+b)ⁿ = Σ ⁿCᵣ a^(n−r) b^r</span>, r = 0 to n<br><br>
<strong>General Term:</strong> <span class="math-highlight">T(r+1) = ⁿCᵣ a^(n−r) b^r</span><br><br>
<strong>Number of terms:</strong> n + 1<br><br>
<strong>Middle term:</strong><br>
• n even: T(n/2 + 1) is middle term<br>
• n odd: T((n+1)/2) and T((n+3)/2) are middle terms<br><br>
<strong>Coefficient of xᵏ:</strong> Find r from power of x in T(r+1)<br>
<strong>Pascal's Triangle:</strong> Each row gives binomial coefficients`,
    class:'11', chapter:'Binomial Theorem', source:'ASK ME Folder' },

  { keywords:['sequence series','geometric progression','gp','sum infinity','sum n terms gp'],
    question:'Sequences and Series – AP and GP',
    answer:`<strong>AP:</strong> aₙ = a + (n−1)d, Sₙ = n/2[2a+(n−1)d]<br><br>
<strong>GP:</strong> aₙ = arⁿ⁻¹<br>
<span class="math-highlight">Sₙ = a(rⁿ−1)/(r−1)</span> for r ≠ 1<br>
<span class="math-highlight">S∞ = a/(1−r)</span> for |r| < 1<br><br>
<strong>AM and GM:</strong> AM = (a+b)/2, GM = √(ab)<br>
AM ≥ GM always (for positive numbers)<br><br>
<strong>Sum of Special Series:</strong><br>
Σn = n(n+1)/2, Σn² = n(n+1)(2n+1)/6, Σn³ = [n(n+1)/2]²`,
    class:'11', chapter:'Sequences and Series', source:'ASK ME Folder' },

  { keywords:['straight line','slope intercept form','general form','point slope','two point form','distance from line'],
    question:'Straight Lines – All Equations and Distance',
    answer:`<strong>Forms of Equation of a Line:</strong><br>
• Slope-Intercept: <span class="math-highlight">y = mx + c</span><br>
• Point-Slope: <span class="math-highlight">y − y₁ = m(x − x₁)</span><br>
• Two-point: (y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)<br>
• Intercept form: x/a + y/b = 1<br>
• Normal form: x cosα + y sinα = p<br><br>
<strong>Slope:</strong> m = (y₂−y₁)/(x₂−x₁) = tanθ<br>
Parallel: m₁ = m₂; Perpendicular: m₁ × m₂ = −1<br><br>
<strong>Distance from (x₁,y₁) to ax+by+c=0:</strong><br>
<span class="math-highlight">d = |ax₁+by₁+c| / √(a²+b²)</span><br><br>
<strong>Distance between parallel lines ax+by+c₁=0 and ax+by+c₂=0:</strong><br>
<span class="math-highlight">d = |c₁−c₂| / √(a²+b²)</span>`,
    class:'11', chapter:'Straight Lines', source:'ASK ME Folder' },

  { keywords:['conic section','parabola','ellipse','hyperbola','circle equation','locus'],
    question:'Conic Sections – Circle, Parabola, Ellipse, Hyperbola',
    answer:`<strong>Circle:</strong> (x−h)² + (y−k)² = r², Centre (h,k), Radius r<br>
Standard: x² + y² = r²<br><br>
<strong>Parabola:</strong> y² = 4ax (opens right), Focus (a,0), Directrix x=−a<br>
x² = 4ay (opens up), Focus (0,a), Directrix y=−a<br><br>
<strong>Ellipse:</strong> x²/a² + y²/b² = 1 (a>b)<br>
Foci: (±c,0), c²=a²−b², Eccentricity e=c/a < 1<br><br>
<strong>Hyperbola:</strong> x²/a² − y²/b² = 1<br>
Foci: (±c,0), c²=a²+b², Eccentricity e=c/a > 1`,
    class:'11', chapter:'Conic Sections', source:'ASK ME Folder' },

  { keywords:['limit','continuity','differentiability','sandwich theorem','lhl rhl'],
    question:'Limits and Continuity',
    answer:`<strong>Standard Limits:</strong><br>
<span class="math-highlight">lim(x→0) sinx/x = 1</span><br>
<span class="math-highlight">lim(x→0) tanx/x = 1</span><br>
<span class="math-highlight">lim(x→0)(1+x)^(1/x) = e</span><br>
<span class="math-highlight">lim(x→0)(eˣ−1)/x = 1</span><br>
<span class="math-highlight">lim(x→a)(xⁿ−aⁿ)/(x−a) = naⁿ⁻¹</span><br><br>
<strong>Continuity at x=a:</strong><br>
f is continuous if: <span class="math-highlight">lim(x→a) f(x) = f(a)</span><br>
i.e., LHL = RHL = f(a)<br><br>
<strong>Differentiability ⟹ Continuity</strong> (converse is NOT always true)`,
    class:'11', chapter:'Limits and Derivatives', source:'ASK ME Folder' },

  // ═══════════════════════════════════════════════
  //  CLASS 12
  // ═══════════════════════════════════════════════

  { keywords:['inverse trigonometric','principal value','domain range','properties inverse trig'],
    question:'Inverse Trigonometric Functions – Principal Values and Properties',
    answer:`<strong>Principal Value Branches:</strong><br>
sin⁻¹: [−π/2, π/2] &nbsp;|&nbsp; cos⁻¹: [0, π] &nbsp;|&nbsp; tan⁻¹: (−π/2, π/2)<br>
cosec⁻¹: [−π/2, π/2]−{0} &nbsp;|&nbsp; sec⁻¹: [0, π]−{π/2} &nbsp;|&nbsp; cot⁻¹: (0, π)<br><br>
<strong>Key Properties:</strong><br>
sin⁻¹(−x) = −sin⁻¹(x); cos⁻¹(−x) = π−cos⁻¹(x)<br>
<span class="math-highlight">sin⁻¹(x) + cos⁻¹(x) = π/2</span><br>
<span class="math-highlight">tan⁻¹(x) + cot⁻¹(x) = π/2</span><br>
<span class="math-highlight">sec⁻¹(x) + cosec⁻¹(x) = π/2</span><br>
<span class="math-highlight">tan⁻¹(x) + tan⁻¹(y) = tan⁻¹[(x+y)/(1−xy)]</span> when xy < 1`,
    class:'12', chapter:'Inverse Trigonometric Functions', source:'ASK ME Folder' },

  { keywords:['matrix','order','symmetric','skew symmetric','transpose','inverse matrix','identity matrix','adjoint'],
    question:'Matrices – Types, Operations, Inverse',
    answer:`<strong>Types of Matrices:</strong><br>
• Symmetric: Aᵀ = A &nbsp;|&nbsp; Skew-symmetric: Aᵀ = −A<br>
• Orthogonal: AAᵀ = I &nbsp;|&nbsp; Idempotent: A² = A<br><br>
<strong>Operations:</strong><br>
(A+B)ᵀ = Aᵀ+Bᵀ; (AB)ᵀ = BᵀAᵀ; (AB)⁻¹ = B⁻¹A⁻¹<br><br>
<strong>For 2×2 matrix A = [a b; c d]:</strong><br>
<span class="math-highlight">|A| = ad − bc</span><br>
<span class="math-highlight">adj(A) = [d −b; −c a]</span><br>
<span class="math-highlight">A⁻¹ = adj(A) / |A|</span>, provided |A| ≠ 0<br><br>
<strong>Solving AX = B:</strong> X = A⁻¹B`,
    class:'12', chapter:'Matrices', source:'ASK ME Folder' },

  { keywords:['determinant','cofactor','expansion','cramer','adjoint','singular matrix','area triangle determinant'],
    question:'Determinants – Properties and Applications',
    answer:`<strong>Determinant Properties:</strong><br>
1. |Aᵀ| = |A|<br>
2. Interchange two rows/cols: sign changes<br>
3. Identical rows/cols: |A| = 0<br>
4. |kA| = kⁿ|A| for n×n matrix<br>
5. |AB| = |A| × |B|<br><br>
<strong>Area of Triangle:</strong><br>
<span class="math-highlight">Area = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|</span><br><br>
<strong>Cramer's Rule for 3×3:</strong><br>
x = D₁/D, y = D₂/D, z = D₃/D (D ≠ 0)`,
    class:'12', chapter:'Determinants', source:'ASK ME Folder' },

  { keywords:['continuity differentiability','rolle','lagrange mvt','mean value','parametric derivative'],
    question:'Continuity and Differentiability – Rolle\'s and MVT',
    answer:`<strong>Rolle's Theorem:</strong><br>
If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then<br>
∃ c ∈ (a,b) such that <span class="math-highlight">f'(c) = 0</span><br><br>
<strong>Lagrange's Mean Value Theorem (MVT):</strong><br>
If f is continuous on [a,b] and differentiable on (a,b), then<br>
∃ c ∈ (a,b) such that <span class="math-highlight">f'(c) = [f(b)−f(a)] / (b−a)</span><br><br>
<strong>Parametric Differentiation (x=f(t), y=g(t)):</strong><br>
<span class="math-highlight">dy/dx = (dy/dt) / (dx/dt)</span>`,
    class:'12', chapter:'Continuity and Differentiability', source:'ASK ME Folder' },

  { keywords:['maxima minima','critical point','first derivative test','second derivative test','optimization'],
    question:'Application of Derivatives – Maxima and Minima',
    answer:`<strong>Finding Extrema:</strong><br>
1. Find f'(x) and solve f'(x) = 0 → critical points<br>
2. Use First or Second Derivative Test<br><br>
<strong>First Derivative Test:</strong><br>
• f'(x) changes +→−: Local maxima<br>
• f'(x) changes −→+: Local minima<br>
• No change: Not an extremum (point of inflection)<br><br>
<strong>Second Derivative Test:</strong><br>
f'(c) = 0 and <span class="math-highlight">f''(c) < 0 → Local maxima</span><br>
f'(c) = 0 and <span class="math-highlight">f''(c) > 0 → Local minima</span><br><br>
<strong>Important:</strong> Rate of change: dy/dx measures rate of change of y w.r.t. x`,
    class:'12', chapter:'Application of Derivatives', source:'ASK ME Folder' },

  { keywords:['integral','anti derivative','by substitution','by parts','partial fraction','definite properties'],
    question:'Integrals – Methods and Properties',
    answer:`<strong>Standard Results:</strong><br>
∫xⁿdx = xⁿ⁺¹/(n+1)+C, ∫eˣdx = eˣ+C, ∫(1/x)dx = ln|x|+C<br>
∫sinxdx = −cosx+C, ∫cosxdx = sinx+C<br>
∫sec²xdx = tanx+C, ∫cosec²xdx = −cotx+C<br><br>
<strong>Integration by Parts (ILATE):</strong><br>
<span class="math-highlight">∫u·v dx = u∫v dx − ∫(u'·∫v dx)dx</span><br><br>
<strong>Definite Integral Properties:</strong><br>
∫ₐᵇ f(x)dx = F(b)−F(a); ∫ₐᵇ = −∫ᵦₐ<br>
<span class="math-highlight">∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx</span><br>
∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx if f is even, = 0 if f is odd`,
    class:'12', chapter:'Integrals', source:'ASK ME Folder' },

  { keywords:['differential equation','order degree','variable separable','homogeneous','linear de','integrating factor'],
    question:'Differential Equations – Order, Degree and Methods',
    answer:`<strong>Order:</strong> Highest derivative present<br>
<strong>Degree:</strong> Power of highest derivative (after clearing fractions/radicals)<br><br>
<strong>Variable Separable:</strong><br>
f(x)dx = g(y)dy → integrate both sides separately<br><br>
<strong>Homogeneous DE (F(λx,λy)=λⁿF):</strong><br>
Put y = vx, dy/dx = v + x dv/dx<br><br>
<strong>Linear DE (dy/dx + Py = Q):</strong><br>
I.F. = <span class="math-highlight">e^(∫P dx)</span><br>
Solution: <span class="math-highlight">y × I.F. = ∫(Q × I.F.)dx + C</span>`,
    class:'12', chapter:'Differential Equations', source:'ASK ME Folder' },

  { keywords:['vector','dot product','cross product','scalar triple','unit vector','collinear','coplanar'],
    question:'Vectors – Dot Product, Cross Product, Triple Product',
    answer:`<strong>Magnitude:</strong> |a⃗| = √(a₁²+a₂²+a₃²)<br>
<strong>Unit vector:</strong> â = a⃗/|a⃗|<br><br>
<strong>Dot Product:</strong> a⃗·b⃗ = |a||b|cosθ = a₁b₁+a₂b₂+a₃b₃<br>
a⃗⊥b⃗ if a⃗·b⃗ = 0<br><br>
<strong>Cross Product:</strong> |a⃗×b⃗| = |a||b|sinθ<br>
a⃗ ∥ b⃗ if a⃗×b⃗ = 0⃗<br>
Area of parallelogram = |a⃗×b⃗|, Area of triangle = ½|a⃗×b⃗|<br><br>
<strong>Scalar Triple Product:</strong><br>
[a⃗ b⃗ c⃗] = a⃗·(b⃗×c⃗)<br>
Vectors coplanar if <span class="math-highlight">[a⃗ b⃗ c⃗] = 0</span>`,
    class:'12', chapter:'Vectors', source:'ASK ME Folder' },

  { keywords:['3d geometry','three dimensional','line','plane','skew lines','angle between plane','foot perpendicular'],
    question:'Three Dimensional Geometry – Lines and Planes',
    answer:`<strong>Direction Cosines:</strong> l²+m²+n²=1<br>
Direction ratios a,b,c: l=a/√(a²+b²+c²) etc.<br><br>
<strong>Equation of Line:</strong><br>
Vector: r⃗ = a⃗ + λb⃗<br>
Cartesian: <span class="math-highlight">(x−x₁)/a = (y−y₁)/b = (z−z₁)/c</span><br><br>
<strong>Equation of Plane:</strong><br>
<span class="math-highlight">ax+by+cz+d=0</span>; Normal vector: (a,b,c)<br>
Distance from (x₁,y₁,z₁): <span class="math-highlight">d = |ax₁+by₁+cz₁+d|/√(a²+b²+c²)</span><br><br>
<strong>Angle between lines/planes:</strong> cosθ = |l₁l₂+m₁m₂+n₁n₂|`,
    class:'12', chapter:'Three Dimensional Geometry', source:'ASK ME Folder' },

  { keywords:['linear programming','lpp','objective function','constraints','corner point','feasible region','optimal'],
    question:'Linear Programming Problem (LPP)',
    answer:`<strong>Steps to Solve LPP:</strong><br>
1. Define decision variables (x, y)<br>
2. Formulate objective function Z = ax + by (maximize or minimize)<br>
3. Write all constraints as inequalities<br>
4. Plot feasible region (graph)<br>
5. Find corner points of feasible region<br>
6. Evaluate Z at each corner point<br>
7. Maximum or minimum Z occurs at a corner point<br><br>
<strong>Theorem:</strong><br>
If optimal solution exists, it occurs at a <span class="math-highlight">corner (vertex) of the feasible region</span>.<br>
Unbounded feasible region may not give optimal solution.`,
    class:'12', chapter:'Linear Programming', source:'ASK ME Folder' },

  { keywords:['probability conditional','bayes theorem','total probability','independent events','bernoulli'],
    question:'Probability – Conditional, Bayes\' Theorem, Bernoulli Trials',
    answer:`<strong>Conditional Probability:</strong><br>
<span class="math-highlight">P(A|B) = P(A∩B) / P(B)</span><br><br>
<strong>Total Probability:</strong><br>
<span class="math-highlight">P(A) = Σ P(Eᵢ)·P(A|Eᵢ)</span> where E₁,E₂... form a partition<br><br>
<strong>Bayes' Theorem:</strong><br>
<span class="math-highlight">P(Eᵢ|A) = P(Eᵢ)·P(A|Eᵢ) / Σ P(Eⱼ)·P(A|Eⱼ)</span><br><br>
<strong>Independent Events:</strong> P(A∩B) = P(A)·P(B)<br><br>
<strong>Bernoulli Trials (Binomial Distribution):</strong><br>
<span class="math-highlight">P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ</span>, q = 1−p<br>
Mean = np, Variance = npq, SD = √(npq)`,
    class:'12', chapter:'Probability', source:'ASK ME Folder' },

  // ═══════════════════════════════════════════════
  //  BOARD EXAM SPECIAL
  // ═══════════════════════════════════════════════

  { keywords:['cbse board','marking scheme','chapter weightage','blueprint','class 12 maths'],
    question:'CBSE Class 12 Maths Board Exam Blueprint 2024-25',
    answer:`<strong>CBSE Class 12 Maths – Chapter Weightage (80 marks):</strong><br>
📌 Relations and Functions: 8 marks<br>
📌 Algebra (Matrices+Determinants): 10 marks<br>
📌 Calculus (Cont+Diff+AppDeriv+Integrals+AppIntegrals+DiffEq): 35 marks<br>
📌 Vectors and 3D Geometry: 14 marks<br>
📌 Linear Programming: 5 marks<br>
📌 Probability: 8 marks<br><br>
<strong>Question Distribution:</strong><br>
Section A: 20 MCQ (1 mark each)<br>
Section B: 5 VSA (2 marks each)<br>
Section C: 6 SA (3 marks each)<br>
Section D: 4 LA (5 marks each)<br>
Section E: 3 Case Study (4 marks each)`,
    class:'12', chapter:'General', source:'ASK ME Folder' },

  { keywords:['case based question','assertion reason','competency based','application based'],
    question:'Case-Based and Assertion-Reason Questions Tips',
    answer:`<strong>Case-Based Questions Strategy:</strong><br>
1. Read the passage/context carefully<br>
2. Identify the mathematical concept being tested<br>
3. Note given values and what is asked<br>
4. Apply the correct formula systematically<br><br>
<strong>Assertion-Reason Format:</strong><br>
(A) Both A and R are true, R is correct explanation<br>
(B) Both A and R are true, R is NOT correct explanation<br>
(C) A is true but R is false<br>
(D) A is false but R is true<br><br>
<strong>Common Topics for Case Studies:</strong><br>
LPP, Probability, Application of Derivatives (optimization), 3D Geometry`,
    class:'12', chapter:'Exam Tips', source:'ASK ME Folder' },

  { keywords:['important questions','most asked','frequently asked','common mistakes'],
    question:'Most Frequently Asked Topics in CBSE Board Math',
    answer:`<strong>Most Frequently Asked (Class 12):</strong><br><br>
🔥 <em>5-mark Questions:</em><br>
• Maxima/Minima word problems<br>
• Integration by parts & partial fractions<br>
• Plane equation & distance problems<br>
• 3×3 determinant & matrix equation<br>
• LPP graphical method<br><br>
🔥 <em>3-mark Questions:</em><br>
• Inverse trig expressions<br>
• Relation type (reflexive/symmetric/transitive)<br>
• Differential equations (variable separable)<br>
• Vectors (projection, angle, area)<br><br>
🔥 <em>Common Mistakes to Avoid:</em><br>
• Forgetting +C in indefinite integrals<br>
• Wrong sign in cross products<br>
• Not checking domain of inverse functions`,
    class:'12', chapter:'Exam Tips', source:'ASK ME Folder' }

];

// Quick search function for client-side use
window.searchAskMe = function(query) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);
  
  const scored = window.ASK_ME_DATA.map(item => {
    let score = 0;
    words.forEach(word => {
      if (word.length < 2) return;
      item.keywords.forEach(kw => {
        if (kw.toLowerCase().includes(word)) score += 3;
        if (word.includes(kw.toLowerCase())) score += 2;
      });
      if (item.question.toLowerCase().includes(word)) score += 2;
      if (item.answer.toLowerCase().includes(word)) score += 1;
    });
    return { ...item, score };
  });
  
  return scored
    .filter(i => i.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};
