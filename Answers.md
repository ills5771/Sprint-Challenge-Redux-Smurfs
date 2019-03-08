1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, reduce, filter. I believe that would be map.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions let us know what changes will be made. Reducers are the logic behind creating a new state, they take in the current state and and action, and calculate a new state based on an event. The store is a warehouse where all of our state is kept. It's a single source of truth because state is only found here.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    In redux, the state of the whole app lives in the store, making it available to use by any component which is wired up to it. Component state lives only on that component and can be passed to its children by props. This becomes an issue when we begin to scale our apps. It's easier to manage state in a huge app by keeping it in one place and sending it to components when its needed

1.  What is middleware?
    Common tool used in programming, intercepts a process, runs a function then continues the process. Intercepts every action before it flows to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a middleware function that returns another function which allows us to use async behavior in our apps. redux-thunk intercepts action-creators and interpret their logic to determine the next step. If it sees a thunk, the function will be run with the dispatch for it's argument.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect
