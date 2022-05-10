declare namespace Helpshift {
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

  export type user = userWithEmail | userWithoutEmail

  export interface cifs {
    [key: string]: string[]
  }

  export interface Module {
    init: (apiKey: string, domain: string, appId: string) => void;
    login: (user: user) => void;
    logout: (user: user) => void;
    showConversation: () => void;
    showFAQs: () => void;
    showFAQById: ({ id }: {id: number}) => void;
    showSectionById: ({ id }: {id: number}) => void;
    showConversationWithCIFs: (cifs: cifs) => void;
    showFAQsWithCIFs: (cifs: cifs) => void;
    requestUnreadMessagesCount: () => Awaited<Promise<number>>
  }
}

declare const module: Helpshift.Module;
export default module;
