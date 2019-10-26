1. What problem does the context API help solve?

- it solves, getting data to deeply nested components, especially for global state for components in a state tree of react components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- store is known as the 'single source of truth' because, you have all your state in your single store. it is not stored on the components themselves(if used by more than just that single component) it stored in the redux store so all components may access it.

- actions, This is the information for your store which includes a type of information, and generally a payload of data to send.
- reducers, actions are sent to the reducer and the reducer does the applications state changes according to the actions.
- store, brings everything together and holds application state via wrapping around your entire application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

1. What is your favorite state management system you've learned and this sprint? Please explain why!
