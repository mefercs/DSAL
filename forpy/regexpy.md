# Regex patterns
- /d means a digit character
- re.compile(r'') returns a regex object (`r` beacuse we need to use a raw string)
- user regexObject.search("string to test") -> return None if no match found else returns a
- `Match` object with the `group()` method.
- if we wrap our regex within `(\d\d\d)` we create a group, which we can select with `group(>0)`
  - To return the group wraped use `matchObject.groups()`, which returns a tuple.
- We use backlash to scape special characters i.e.`\(`
  * .  ^  $  *  +  ?  {  }  [  ]  \  |  (  ) these characters have special meanings.
- `|` is like the `or` to match either strings. It only returns a single match.
  - We also group pipes("|") in a group for multiple options
    - r"Bat(man|movil|chick)"
- `()?` checks if the text within `()` appears or not.
  - e.i. r'Bat(wo)?man' -> Batman | Batwoman
- `()*` checks if the text within `()` appears or not, it can appear multiple times.
- `()+` match **one or more** times the text within `()`
- `(){minimum, maximum}` checks it the text within `()` appers in a range at least "minimum" times or "maximum" times.
  - remember that {number} will match the **exactly** `numbers` of times the match appears.
  - {,max} 0 until max times, {min,} min or more times.
  - We make the match `lazy` with the question mark, that means it returns the shortest match.
## regexObject.findall()
Return all the matches it not returns a `group()` method. And returns it in a list of strings. If no matches returns an empty string.
- If you use group matchig, returns a list of tuples of strings.

## Character classes

| shorthand class | reprensents |
|---|---|
| \d | numeric characters | 
| \D | Any that is not a digit |
| \w | letter, digit or underscore | 
| \w | Any that is not a letter, digit or underscore |
| \s | space, tab, newline character |
| \S | \s opposite | 

- with [something - otherthing] will create a match within that range. 
### Create your own class with []
You can specify the matched characters with []
- i.e. to match vowels [aeiouAEIOU]
  - match a vowel with search()
  - match more than 1 vowel use findall()
-  `., *, ?, or ()` within the class they don't need to be negated.
- we can negate the class similar as JS, with the caret after the first bracket.
  - `[^arsot]` negated class
- As well as js `^`(regex should start with) at the begining and `$`(regex should end with) at the end.
  - `r"^something$"` Indicates the string should be `something`
### wilcard character `.`
It matches any single character except by a new line. i.e. `(r".at")` will match cat,rat,pat... and so on.
- You can match anything or nothing multiple times with a group, where we use `(r" (.*) ")`, it matches anything
  - another ex. `(r"Name: (.*) Last Name: (.*)")` you have 2 groups, with nothing or maybe whatever is withing the group.
  - it matches the longest string be default i.e.`(r"<.*>")`, to make it lazy we use `(r"<.*?>")` to match the shortest.
  - To make it catch anything even the newlines we use the `re.compile(r"regex", re.DOTALL)`, with the `re.DOTALL`
  
#### Match upper and lower case
We use in the `re.compile(r"regex", re.I)`, `re.I` make this possible.

## Subtitude strings with regexObject.sub(replacement, stringToChange)
We can use `r"\1\2\3.."` to access to the catched replacement, and use it.
```py
agentNamesRegex = re.compile(r'Agent (\w)\w*')
agentNamesRegex.sub(r'\1****', 'Agent Alice told Agent Carol that Agent # we have selected "Agent"[0] with that notation 
Eve knew Agent Bob was a double agent.')
# output -> A**** told C**** that E**** knew B**** was a double agent.'
```

## Complex Regexes  
We can use the `re.VERBOSE` to add comments and multiple lines
```py
phoneRegex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}
(\s*(ext|x|ext.)\s*\d{2,5})?)')

# INSTEAD USE VERBOSE, it is not an "or" shorthand and it uses triple quote.

phoneRegex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```



