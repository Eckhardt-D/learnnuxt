type Message = {
  content: string;
  type: 'error' | 'success',
}

export default () => {
  const messages = useState<Message[]>('snackbars', () => [])

  const triggerPendingRemoval = () => {
    setTimeout(() => {
      messages.value.shift()
    }, 2000)
  }

  const success = (message: string) => {
    messages.value.push({
      type: 'success',
      content: message,
    })
    triggerPendingRemoval();
  }

  const error = (message: string) => {
    messages.value.push({
      type: 'error',
      content: message,
    })
    triggerPendingRemoval()
  }

  return {
    messages,
    success,
    error
  }
}