const [count, setCount] = useState `<number>`(() => {

    console.log("Inilializer running...")

    const saved = localStorage.getItem('count');

    return saved ? Number(saved) : 0;

});

##### useState(initializer)

The initializer runs only once so React can preserve state across re-renders instead of resetting it every time the component function executes.

##### const [count, setCount] = useState `<number>`(...)

* `useState<number>` → state type is `number`
* `count` → current value (user-defined variable)
* `setCount` → function to update it (user-defined name)

##### return saved ? Number(saved) : 0;

**structure:**

condition ? value_if_true : value_if_false

* If `saved` is NOT null → true
* If `saved` is null → false

![1777739532305](image/resources/1777739532305.png)

### What is render?

> React calling your component function to figure out UI: UI Function execution to generate o/p - computing + preparing + updating UI
>
> When React “renders”, it does more than display:
>
> 1. Runs your component function
> 2. Calculates what UI should look like (JSX → virtual DOM)
> 3. Compares with previous version (diffing)
> 4. Updates only what changed in the real DOM
>
> What is re-render?

> React calling the component again because state/props changed
>
> ### ❓ What runs again?
>
> | Part                          | Runs again? |
> | ----------------------------- | ----------- |
> | useState initializer          | ❌ No       |
> | component function            | ✅ Yes      |
> | console logs inside component | ✅ Yes      |

# What happens when the page refreshes?

When you refresh the page (F5 / reload):

## React does NOT remember anything

* All React state is wiped
* Component is destroyed
* Everything starts fresh

| Aspect                                  | Lazy Function Initializer                                          | Direct Value Initializer                                    |
| --------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| **Syntax**                        | `useState(() => initialValue)`                                   | `useState(initialValue)`                                  |
| **What you pass**                 | A function (React will call it)                                    | A value (already computed)                                  |
| **When it runs (first render)**   | React**calls the function once**to compute the initial state | Value is**used directly**                             |
| **When it runs (re-render)**      | ❌ Function is**NOT called again**                           | ❌ Value is**ignored after first render**             |
| **Computation timing**            | **Deferred (lazy)**→ runs only when needed (first render)   | **Immediate**→ evaluated before `useState`runs     |
| **Performance impact**            | Efficient for**expensive calculations**                      | Can be inefficient if calculation is heavy                  |
| **Example (simple)**              | `useState(() => 1)`                                              | `useState(1)`                                             |
| **Example (real use)**            | `useState(() => Number(localStorage.getItem('count'))              |                                                             |
| **If calculation is expensive**   | ✅ Runs once → good                                               | ❌ Runs on every render → wasteful                         |
| **Typical use case**              | Reading from `localStorage`, complex logic, API-derived defaults | Static defaults like `0`,`''`,`[]`                    |
| **Mental model**                  | “React, run this once to get the initial value”                  | “Here is the initial value”                               |
| **Behavior after initialization** | Stored in React state memory and reused                            | Same — stored and reused                                   |
| **Risk if misused**               | None (safe pattern)                                                | Can cause**performance issues**if heavy logic is used |

##### useEffect(() => { setHistory(prev => [...prev, count]);

    }, [count]);  This runs after render

updates the `history` state

prev => ...  this is a **callback form;  prev = previous history array**

[...prev, count]  array spread; Take old history, Add new count at the end

Initial  history = [] count = 0

After count becomes 2:  history = [0, 1, 2]


<pre class="overflow-visible! px-0!" data-start="31" data-end="89"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼs ͼ16"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span class="ͼ11">localStorage</span><span class="ͼv">.</span><span>setItem(</span><span class="ͼz">'count'</span><span>, </span><span class="ͼ11">count</span><span class="ͼv">.</span><span>toString());</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

* **`localStorage`** → browser storage object that keeps data even after refresh
* **`.`** → access method inside the object
* **`setItem`** → function that stores a value in localStorage
* **`'count'`** → key (name used to identify the stored value)
* **`,`** → separates key and value arguments
* **`count`** → current state variable (a number)
* **`.toString()`** → converts number into string (because localStorage only stores strings)
* **`);`** → ends the function call statement

`const handleStepChange = (e: React.ChangeEvent `

* **`const`** → declares a constant function
* **`handleStepChange`** → function name (user-defined)
* **`=`** → assigns function to the variable
* **`(e: React.ChangeEvent<HTMLInputElement>)`** → event parameter
* `e` = event object
* `React.ChangeEvent` = React type for input change event
* `<HTMLInputElement>` = specifies event comes from an input field
* **`=>`** → arrow function syntax
* **`{`** → starts function body

`const value = Number(e.target.value);`

* **`const`** → declares variable
* **`value`** → user-defined variable storing converted input
* **`=`** → assignment operator
* **`Number(...)`** → converts string input to number
* **`e.target`** → the input element where event happened
* **`.value`** → actual text typed in input field

`setStep(value || 1);`

* **`setStep`** → React state updater function
* **`value`** → converted number from input
* **`||`** → OR operator (fallback logic)
* **`1`** → default value if input is empty, 0, or invalid

If user enters a valid number → use it, otherwise default step = 1
