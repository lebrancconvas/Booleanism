# Propositional Logic

## Set of Boolean (Truth Value)

- Boolean: {True (T), False (F)}

## Proposition

- Proposition: Sentence that can be assigned the truth value to be True (T) exclusive or False (F)

## Proposition Variable

- P, Q, ..., and so on.

## Operators

### NOT (~): Toggle between boolean

| P | $\neg$P |
|:-:|:-:|
| T | F |
| F | T |

### AND (^): False if at least one operand is False, True if both operands are True

| P | Q | P $\wedge$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

### OR (v): True if at least one operand is True, False if both operands are False

| P | Q | P $\vee$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

### IF...THEN: False if premise (P) is True, but consequences (Q) is False. Otherwises are True

| P | Q | P $\rightarrow$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

### IF AND ONLY IF (IFF.): True if both operands have the same truth value, False if not

| P | Q | P $\leftrightarrow$ Q |
|:-:|:-:|:-----:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |
