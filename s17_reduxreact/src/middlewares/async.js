export const asyncMid = (store) => next => action => {
    if(typeof action === "function"){
      return action(store.dispatch, store.getState)
    }
    return next(action)
  }
  