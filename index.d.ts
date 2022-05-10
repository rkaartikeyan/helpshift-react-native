interface userWithEmail {
  identifier?: string
  email: string,
  name: string,
  authToken?: string
}

interface userWithoutEmail {
  identifier: string
  email?: string,
  name: string,
  authToken?: string
}

interface cifs {
  [key: string]: string[]
}

interface Helpshift {
  init: (apiKey: string, domain: string, appId: string) => void;
  login: (user: userWithEmail | userWithoutEmail) => void;
  logout: (user: userWithEmail | userWithoutEmail) => void;
  showConversation: () => void;
  showFAQs: () => void;
  showFAQById: ({ id }: {id: number}) => void;
  showSectionById: ({ id }: {id: number}) => void;
  showConversationWithCIFs: (cifs: cifs) => void;
  showFAQsWithCIFs: (cifs: cifs) => void;
  requestUnreadMessagesCount: () => Awaited<Promise<number>>
}

export default Helpshift;
