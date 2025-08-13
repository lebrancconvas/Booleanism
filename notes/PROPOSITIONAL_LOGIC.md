# Propositional Logic

## Set of Boolean (Truth Value)

- Boolean: {**True (T)**, **False (F)**}

## Proposition

- Proposition: Sentence that can be assigned the truth value to be True (T) exclusive or False (F)

## Proposition Variable

- P, Q, R, ..., and so on.

## Operators

### **NOT ($\neg$)**: Toggle between boolean

| P | $\neg$P |
|:-:|:-:|
| T | F |
| F | T |

### **AND ($\wedge$)**: False if at least one operand is False, True if both operands are True

| P | Q | P $\wedge$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

### **OR ($\vee$)**: True if at least one operand is True, False if both operands are False

| P | Q | P $\vee$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

### **IF...THEN ($\rightarrow$)**: False if premise (P) is True, but consequences (Q) is False. Otherwises are True

| P | Q | P $\rightarrow$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

### **IF AND ONLY IF (IFF.) ($\leftrightarrow$)**: True if both operands have the same truth value, False if not

| P | Q | P $\leftrightarrow$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

## Law of Logic

### AND ($\wedge$) Law

- **P $\wedge$ Q $\equiv$ Q $\wedge$ P** (Commutative)
- **P $\wedge$ (Q $\wedge$ R) $\equiv$ (P $\wedge$ Q) $\wedge$ R** (Associative)
- **P $\wedge$ (Q $\vee$ R) $\equiv$ (P $\wedge$ Q) $\vee$ (P $\wedge$ R)** (Distributive)
- **$\neg$(P $\wedge$ Q) $\equiv$ $\neg$P $\vee$ $\neg$Q** (De Morgan)
- **P $\wedge$ P $\equiv$ P**
- **P $\wedge$ $\neg$P $\equiv$ F**
- **P $\wedge$ F $\equiv$ F**
- **P $\wedge$ T $\equiv$ P**

### OR ($\vee$) Law

- **P $\vee$ Q $\equiv$ Q $\vee$ P** (Commutative)
- **(P $\vee$ Q) $\vee$ R $\equiv$ P $\vee$ (Q $\vee$ R)** (Associative)
- **P $\vee$ (Q $\wedge$ R) $\equiv$ (P $\vee$ Q) $\wedge$ (P $\vee$ R)** (Distributive)
- **$\neg$(P $\vee$ Q) $\equiv$ $\neg$P $\wedge$ $\neg$Q** (De Morgan)
- **P $\vee$ P $\equiv$ P**
- **P $\vee$ $\neg$P $\equiv$ T**
- **P $\vee$ T $\equiv$ T**
- **P $\vee$ F $\equiv$ P**

### If...Then... ($\rightarrow$) Law

- P $\rightarrow$ Q $\equiv$ $\neg$Q $\rightarrow$ $\neg$P
- P $\rightarrow$ Q $\equiv$ $\neg$P $\vee$ Q
- $\neg$(P $\rightarrow$ Q) $\equiv$ P $\wedge$ $\neg$Q
- P $\rightarrow$ P $\equiv$ T
- P $\rightarrow$ $\neg$P $\equiv$ $\neg$P
- P $\rightarrow$ T $\equiv$ T
- P $\rightarrow$ F $\equiv$ $\neg$P
- T $\rightarrow$ P $\equiv$ P
- F $\rightarrow$ P $\equiv$ T
