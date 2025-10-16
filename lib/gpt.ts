const CallOpenAi = async (descr: string) => {
  const result = await fetch('/api/gpt/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descr }),
    credentials: 'include',
  })
  if (!result.ok) throw new Error('Failed to call GPT API')
  const data = await result.json()
  console.log('receieved data from the serverfunction', data)
  return data.text
}

export default CallOpenAi
