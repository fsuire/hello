
const blockedActions = {}

export const block = (actionType, effect) => {
  const blockedEffect = async () => {
    if (!blockedActions[actionType]) {
      blockedActions[actionType] = true
      await effect()
      delete blockedActions[actionType]
    }
  }
  return blockedEffect
}