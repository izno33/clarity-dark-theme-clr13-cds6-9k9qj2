# clarity-dark-theme-clr13-cds6-9k9qj2

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/clarity-dark-theme-clr13-cds6-9k9qj2)

# Calcul mitigation
p => piercing
d => defense
A => Armor
S => Shield
D => Dodge
f (logistic function) => L / (1 + e^(-k(x-x0))) - L = 1, x0 = 1, k = 
Approximation : f => 1 / (1 + 4^(1.1-x))
Mitigation => 1 - (1-cA*f(dA/pA)).(1-cS*f(dS/pS)).(1-cD*f(dD/pD))
[cA, cS, cD] en fonction du type de vaisseau
survey => [0.3, 0.3, 0.3]
battleship => [0.55, 0.2, 0.2]
explorer => [0.2, 0.55, 0.2]
interceptor => [0.2, 0.2, 0.55]
