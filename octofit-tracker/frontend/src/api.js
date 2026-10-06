const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const codespaceHostName =
  typeof window === 'undefined'
    ? undefined
    : window.location.hostname.match(/^(.*)-5173\.app\.github\.dev$/)?.[1]

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : codespaceHostName
    ? `https://${codespaceHostName}-8000.app.github.dev`
    : 'http://localhost:8000'

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (payload && typeof payload === 'object') {
    for (const key of ['results', 'data', 'items']) {
      if (Array.isArray(payload[key])) {
        return payload[key]
      }
    }
  }

  throw new Error('The API returned an unsupported collection response.')
}

export async function fetchCollection(endpoint, fetcher = fetch, signal) {
  let response
  try {
    response = await fetcher(`${apiBaseUrl}${endpoint}`, { signal })
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw error
    }

    const details = error instanceof Error ? ` ${error.message}` : ''
    throw new Error(
      `Could not reach the API at ${apiBaseUrl}. Check that the backend is running on port 8000.${details}`,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}.`)
  }

  return normalizeCollection(await response.json())
}
